import { useState } from 'react'
import styled from "styled-components";
import { gql, useQuery } from '@apollo/client';
import { useAuthContext } from '../../context/auth.context';

interface GetFlashcardsDataI {
  getFlashcards: FlashcardI[];
}
interface FlashcardI {
  id: number;
  front: string;
  back: string;
}

const GET_FLASHCARDS = gql`
  query {
    getFlashcards {
      id
      front
      back
    }
  }
`

const Flashcard = styled.div`
  padding: 1rem;
  border: 1px black solid;
  width: 400px;
  height: 200px;
  align-content: center;
  font-size: 2rem;
`

const Flashcards = () => {
  const [showingCards, setShowingCards] = useState<number[]>([]);
  const [displayIdx, setDisplayIdx] = useState<number>(0);
  const { loading, error, data } = useQuery<GetFlashcardsDataI>(GET_FLASHCARDS);
  const cards = data?.getFlashcards || [];
  const { user } = useAuthContext();

  const handleClick = (id: number) => {
    if (showingCards.find(oldId => oldId === id)) {
      setShowingCards(showingCards.filter(oldId => oldId !== id));
      return;
    }
    setShowingCards([...showingCards, id])
  }

  const changeCard = (id: number) => {
    if (id > cards.length - 1) {
      id = 0;
    } else if (id < 0) {
      id = cards.length - 1;
    }
    setDisplayIdx(id);
  }

  const getRandomCard = () => {
    changeCard(Math.floor(Math.random() * (cards.length)));
  }

  const displayedCard = cards[displayIdx];

  if (error) return <p>{error.message}</p>
  if (loading) return <p>loading...</p>
  if (cards.length === 0) return <>No Cards Exist</>

  return (
    <>
      {
        <Flashcard onClick={() => handleClick(displayedCard.id)}>
          {showingCards.find((id) => id === displayedCard.id)
            ? displayedCard.back
            : displayedCard.front}
        </Flashcard>
      }
      <div style={{ padding: 5 }}>
        <button onClick={() => changeCard(displayIdx + 1)}>
          Next
        </button>
        <button onClick={() => getRandomCard()}>
          Random
        </button>
        <button onClick={() => changeCard(displayIdx - 1)}>
          Previous
        </button>
      </div>
    </>
  )
}

export default Flashcards;
