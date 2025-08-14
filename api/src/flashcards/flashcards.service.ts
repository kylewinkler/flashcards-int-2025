// flashcards.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Flashcard } from './flashcard.schema';

@Injectable()
export class FlashcardsService {
  constructor(
    @InjectModel(Flashcard.name) private flashcardModel: Model<Flashcard>,
  ) {}

  async findAll(userId: string) {
    console.log(userId)
    return await this.flashcardModel.find({ userId });
  }

  async create(userId: string, input: { front: string; back: string }) {
    const newFlashcard = new this.flashcardModel({
      ...input,
      userId,
    });
    await newFlashcard.save();
    return 'Flashcard created';
  }
}
