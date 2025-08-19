import LoadingOrError from "../../../components/LoadingOrError";
import { ApolloError } from "@apollo/client";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import type { FlashcardI } from "../../Flashcards/Flaschards";
import FlashCard from "../../../components/Flashcard/Flashcard";

interface FolderFlashCardProps {
  cards: FlashcardI[]
  error: ApolloError | undefined
  loading: boolean
}

const FolderFlashcards = ({ cards, error, loading }: FolderFlashCardProps) => {

  if (loading || error) return <LoadingOrError loading={loading} error={error} />
  if (cards.length === 0) return <>No Cards Exist</>

  return (
    <Box>
      <Grid container spacing={2}>
        {cards.map((card, i) => (
          <Grid key={i} size={{ sm: 6, md: 4, lg:3 }}>
            <FlashCard card={card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default FolderFlashcards;