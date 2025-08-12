import { Resolver, Query } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';

@Resolver('Flashcard')
export class FlashcardResolver {
  @Query('getFlashcards')
  @UseGuards(GqlAuthGuard)
  getFlashcards(@CurrentUser() user: any) {
    console.log('Authenticated user:', user);
    
    return [
      { id: 1, front: 'Movie', back: 'Pelicula' },
      { id: 2, front: 'To Learn', back: 'Aprender' },
      { id: 3, front: 'Bathroom', back: 'Baño' },
      { id: 4, front: 'Library', back: 'Biblioteca' },
      { id: 5, front: 'Book', back: 'Libro' },
      { id: 6, front: 'School', back: 'Escuela' },
      { id: 7, front: 'Teacher', back: 'Maestro' },
      { id: 8, front: 'Student', back: 'Estudiante' },
      { id: 9, front: 'Food', back: 'Comida' },
      { id: 10, front: 'Water', back: 'Agua' },
      { id: 11, front: 'Friend', back: 'Amigo' },
      { id: 12, front: 'Family', back: 'Familia' },
      { id: 13, front: 'House', back: 'Casa' },
      { id: 14, front: 'Car', back: 'Coche' },
    ];
  }
}
