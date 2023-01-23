import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from './schemas/accounts.schema';
import { AccountService } from './accounts.service';
import { AccountController } from './accounts.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
  ],
  providers: [AccountService],
  controllers: [AccountController],
  exports: [AccountService],
})
export class UsersModule {}
