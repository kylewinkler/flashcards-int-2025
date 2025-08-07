import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';
import * as bcrypt from 'bcrypt';
import { generateToken } from 'src/auth/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(createUserInput: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }): Promise<User> {
    const {password, ...rest} = createUserInput;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new this.userModel({...rest, password: hashedPassword});
    return user.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async login(input: { email: string; password: string }): Promise<string> {
    const user = await this.findByEmail(input.email);
  
    if (!user) {
      throw new Error('User not found');
    }
  
    const isPasswordMatch = await bcrypt.compare(input.password, user.password);
    if (!isPasswordMatch) {
      throw new Error('Invalid credentials');
    }
  
    const token = generateToken({ userId: user.id });
  
    return token;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }
}