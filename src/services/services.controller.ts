import { Body, Controller, Post } from '@nestjs/common';
import { AccountService } from './services.service';
import { CreateAccountDto } from './dto/create-services.dto';

@Controller('tickets')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post('/add')
  async add_ticket(@Body() createTicketDto: CreateAccountDto) {
    return await this.accountService.create(createTicketDto);
  }
}
