import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateConfigDto } from './dto/create-config.dto';
import { Config, ConfigDocument } from './schemas/config.schema';

// export type User = any;

@Injectable()
export class ConfigService {
  constructor(
    @InjectModel(Config.name)
    private readonly configModel: Model<ConfigDocument>,
  ) {}

  async create(createConfigDto: CreateConfigDto): Promise<Config> {
    return new this.configModel(createConfigDto).save();
  }
}
