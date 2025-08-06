import { Controller, Get } from '@nestjs/common';
import { FlashcardsService } from './flashcards.service';

@Controller('flashcards')
export class FlashcardsController {
  constructor(private readonly flashcardsService: FlashcardsService) {}

  @Get()
  findAll() {
    return this.flashcardsService.findAll();
  }
}
