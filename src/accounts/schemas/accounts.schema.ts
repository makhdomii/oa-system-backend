import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type AccountDocument = HydratedDocument<Account>;

@Schema({ timestamps: true })
export class Account {
  @Prop() protocol: string;

  @Prop() ip: string;

  @Prop() settings: string;

  @Prop() user_id: mongoose.Schema.Types.ObjectId;

  @Prop({ default: 'pending' }) status:
    | 'active'
    | 'out of date'
    | 'pending'
    | 'deleted'
    | 'deactive';

  @Prop() username: string;
  @Prop() password: string;
  @Prop() next_duo_time: Date;
  @Prop() price: string;
  @Prop() connection_type: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
