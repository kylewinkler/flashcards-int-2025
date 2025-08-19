import styled from "styled-components"
import type { FlashcardI } from "../../pages/Flashcards/Flaschards";
import { useState } from "react";

const StyledCard = styled.div`
  padding: 1rem;
  border: 1px black solid;
  width: 400px;
  height: 200px;
  align-content: center;
  font-size: 2rem;
  `;

interface FlashCardProps {
  card: FlashcardI
}

const FlashCard = ({card}: FlashCardProps) => {
  const [showFront, setShowFront] = useState(true);

  return (
    <StyledCard onClick={() => setShowFront(!showFront)}>{showFront ? card.front : card.back}</StyledCard>
  )
}

export default FlashCard