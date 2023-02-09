import { Body, Controller, Post } from '@nestjs/common';
import { ConfigService } from './config.service';
import { CreateConfigDto } from './dto/create-config.dto';

@Controller('config')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Post('/add')
  async add_ticket(@Body() createConfigDto: CreateConfigDto) {
    return await this.configService.create(createConfigDto);
  }
}
