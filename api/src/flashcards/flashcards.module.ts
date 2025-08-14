import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Flashcard, FlashcardSchema } from './flashcard.schema';
import { FlashcardsService } from './flashcards.service';
import { FlashcardResolver } from './flashcard.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Flashcard.name, schema: FlashcardSchema },
    ]),
  ],
  providers: [FlashcardsService, FlashcardResolver],
})
export class FlashcardsModule {}
