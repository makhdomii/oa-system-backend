import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './schemas/transaction.schema';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post('/add')
  async addTicket(@Body() createTransactionDto: CreateTransactionDto) {
    return await this.transactionService.create(createTransactionDto);
  }

  @Post('/reply/:id')
  async replyTicket(@Body() { description, type }, @Param('id') id: string) {
    console.log(description);
    return await this.transactionService.reply(id, description, type);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<Transaction[]> {
    return this.transactionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Transaction> {
    return this.transactionService.findOne(id);
  }

  @Get('/list')
  async list(@Body() id: string): Promise<Transaction[]> {
    return this.transactionService.findByUser(id);
  }
}
