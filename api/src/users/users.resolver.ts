import {
  Resolver,
  Query,
  Mutation,
  Args,
  InputType,
  Field,
} from '@nestjs/graphql';
import { UsersService } from './users.service';
import { LoginInput } from 'src/graphql';
import * as bcrypt from 'bcrypt';
import { generateToken } from 'src/auth/jwt';

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

  @Mutation('login')
  async login(@Args('loginInput') loginInput: LoginInput): Promise<string> {
    const user = await this.usersService.findByEmail(loginInput.email);
  
    if (!user) {
      throw new Error('User not found');
    }
  
    const isPasswordMatch = await bcrypt.compare(loginInput.password, user.password);
    if (!isPasswordMatch) {
      throw new Error('Invalid credentials');
    }
  
    const token = generateToken({ userId: user.id });
  
    return token;
  }
}
