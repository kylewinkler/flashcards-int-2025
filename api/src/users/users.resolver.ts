import {
  Resolver,
  Query,
  Mutation,
  Args,
  InputType,
  Field,
} from '@nestjs/graphql';

@InputType()
class CreateUserInput {
  @Field()
  firstName: string;

  @Field()
  email: string;

  @Field()
  lastName: string;
}

@Resolver('User')
export class UsersResolver {
  @Query('getUsers')
  getUsers() {
    return [
      {
        id: 1,
        firstName: 'Joe',
        lastName: 'Smith',
        email: 'joesmith@gmail.com',
      },
    ];
  }

  @Mutation('createUser')
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    console.log(createUserInput);
    return 'SUCCESS';
  }
}
