import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { Ticket, TicketDocument } from './schemas/ticket.schema';

// export type User = any;

@Injectable()
export class TicketsService {
  constructor(
    @InjectModel(Ticket.name) private readonly userModel: Model<TicketDocument>,
  ) {}

  async create(createUserDto: CreateTicketDto): Promise<Ticket> {
    return new this.userModel(createUserDto).save();
  }

  async findAll(): Promise<Ticket[]> {
    return this.userModel.find().exec();
  }

  async findOne(username: string): Promise<any> {
    return this.userModel.find({ username });
  }
}
