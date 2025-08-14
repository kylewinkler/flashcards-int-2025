import {
  Resolver,
  Query,
  Mutation,
  Args,
  InputType,
  Field,
} from '@nestjs/graphql';
import { UsersService } from './users.service';
import { AuthResponse, LoginInput } from 'src/graphql';
import * as bcrypt from 'bcrypt';

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
  constructor(private readonly userService: UsersService) {}

  @Query('getUsers')
  async getUsers() {
    return this.userService.findAll();
  }

  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<String> {
    await this.userService.create(createUserInput);
    return 'success';
  }

  @Mutation('login')
  async login(
    @Args('loginInput') loginInput: LoginInput,
  ): Promise<AuthResponse> {
    const res = await this.userService.login(loginInput);
    return res;
  }
}
