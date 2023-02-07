import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { Ticket } from './schemas/ticket.schema';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post('/add')
  async addTicket(@Body() createTicketDto: CreateTicketDto) {
    return await this.ticketsService.create(createTicketDto);
  }

  @Post('/reply/:id')
  async replyTicket(@Body() { description, type }, @Param('id') id: string) {
    console.log(description);
    return await this.ticketsService.reply(id, description, type);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<Ticket[]> {
    return this.ticketsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Ticket> {
    return this.ticketsService.findOne(id);
  }

  @Get('/list')
  async list(@Body() id: string): Promise<Ticket[]> {
    return this.ticketsService.findByUser(id);
  }
}
