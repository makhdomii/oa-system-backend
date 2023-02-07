import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type AccountDocument = HydratedDocument<Account>;

@Schema()
export class Account {
  @Prop() name: string;

  @Prop() available_protocols: Array<string>;

  @Prop() period: string;

  @Prop({ default: 'active' }) status: 'active' | 'deactive';
}

export const AccountSchema = SchemaFactory.createForClass(Account);
