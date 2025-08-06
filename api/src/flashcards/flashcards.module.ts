import { Module } from '@nestjs/common';
import { FlashcardResolver } from './flashcard.resolver';

@Module({
  providers: [FlashcardResolver],
})
export class FlashcardsModule {}
