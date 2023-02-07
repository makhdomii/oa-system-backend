import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAccountDto } from './dto/create-services.dto';
import { Account, AccountDocument } from './schemas/services.schema';

// export type User = any;

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name)
    private readonly userModel: Model<AccountDocument>,
  ) {}

  async create(createUserDto: CreateAccountDto): Promise<Account> {
    return new this.userModel(createUserDto).save();
  }
}
