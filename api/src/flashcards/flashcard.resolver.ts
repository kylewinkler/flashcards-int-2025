import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';
import { FlashcardsService } from './flashcards.service';

@Resolver('Flashcard')
@UseGuards(GqlAuthGuard)
export class FlashcardResolver {
  constructor(private readonly flaschardService: FlashcardsService) {}

  @Query('getFlashcards')
  getFlashcards(@CurrentUser() user: any) {
    console.log('CurrentUser in getFlashcards:', user);
    return this.flaschardService.findAll(user.id);
  }

  @Mutation('createFlashcard')
  createFlashcard(@CurrentUser() user: any, @Args('createFlashcardInput') input: any) {
    console.log(user)
    return this.flaschardService.create(user.id, input);
  }
}
