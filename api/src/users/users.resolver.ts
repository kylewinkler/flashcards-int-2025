import {
  Resolver,
  Query,
  Mutation,
  Args,
  InputType,
  Field,
} from '@nestjs/graphql';
import { UsersService } from './users.service';

@InputType()
class CreateUserInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  password: string;
}

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query('getUsers')
  async getUsers() {
    return this.usersService.findAll();
  }

  @Mutation('createUser')
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<string> {
    await this.usersService.create(createUserInput);
    return 'SUCCESS';
  }
}
