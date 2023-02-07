import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { Ticket, TicketDocument } from './schemas/ticket.schema';

@Injectable()
export class TicketsService {
  constructor(
    @InjectModel(Ticket.name)
    private readonly ticketModel: Model<TicketDocument>,
  ) {}

  async create(createUserDto: CreateTicketDto): Promise<Ticket> {
    return new this.ticketModel(createUserDto).save();
  }

  async reply(id: string, description: string, type: string): Promise<Ticket> {
    return await this.ticketModel.findOneAndUpdate(
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

  async findAll(): Promise<Ticket[]> {
    return this.ticketModel.find().exec();
  }

  async findByUser(id: string): Promise<Ticket[]> {
    return this.ticketModel.find({ _id: id });
  }

  async findOne(id: string): Promise<any> {
    return this.ticketModel.findOne({ _id: id });
  }
}
