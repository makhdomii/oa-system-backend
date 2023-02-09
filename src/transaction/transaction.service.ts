import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction, TransactionDocument } from './schemas/transaction.schema';

@Injectable()
export class TransactionService {
  constructor(
    @InjectModel(Transaction.name)
    private readonly transactionModel: Model<TransactionDocument>,
  ) {}

  async create(createUserDto: CreateTransactionDto): Promise<Transaction> {
    return new this.transactionModel(createUserDto).save();
  }

  async reply(
    id: string,
    description: string,
    type: string,
  ): Promise<Transaction> {
    return await this.transactionModel.findOneAndUpdate(
      { _id: id },
      {
        $push: {
          description: { content: description, type, createdAt: Date.now() },
        },
        status: type === 'answer' ? 'answered' : 'pending',
      },
      { new: true, safe: true, upsert: true },
    );
  }

  async findAll(): Promise<Transaction[]> {
    return this.transactionModel.find().exec();
  }

  async findByUser(id: string): Promise<Transaction[]> {
    return this.transactionModel.find({ _id: id });
  }

  async findOne(id: string): Promise<any> {
    return this.transactionModel.findOne({ _id: id });
  }
}
