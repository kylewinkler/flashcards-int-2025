import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';
import * as bcrypt from 'bcrypt';
import { generateToken } from 'src/auth/jwt';
import { AuthResponse, CreateUserInput, LoginInput } from 'src/graphql';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async create(createUserInput: CreateUserInput): Promise<User> {
    const user = new this.userModel(createUserInput);
    return user.save();
  }

  async login(loginInput: LoginInput): Promise<AuthResponse> {
    try {
      const user: User | null = await this.findByEmail(loginInput.email);
      if (!user) {
        return { token: null, error: 'Incorrect email or password' };
      }
  
      const match: boolean = await bcrypt.compare(
        loginInput.password,
        user.password,
      );
  
      if (!match) {
        return { token: null, error: 'Incorrect email or password' };
      }
  
      const token = generateToken(user);
      return { token, error: null };
  
    } catch (e) {
      console.error(e);
      return { token: null, error: 'Failed to login' };
    }
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }
}