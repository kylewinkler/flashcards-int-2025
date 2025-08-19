import {
  Resolver,
  Query,
  Mutation,
  Args,
} from '@nestjs/graphql';
import { UsersService } from './users.service';
import { AuthResponse, CreateUserInput, LoginInput } from 'src/graphql';

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
