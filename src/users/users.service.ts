import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';

// export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return new this.userModel(createUserDto).save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  // async findOne(id: string): Promise<Cat> {
  //   return this.catModel.findOne({ _id: id }).exec();
  // }

  // async delete(id: string) {
  //   const deletedCat = await this.catModel
  //     .findByIdAndRemove({ _id: id })
  //     .exec();
  //   return deletedCat;
  // }

  async findOne(username: string): Promise<any> {
    // return await this.userModel.find((user) => user.username === username);
    return this.userModel.find({ username });
    // return `this is login ${username}`;
  }
}
