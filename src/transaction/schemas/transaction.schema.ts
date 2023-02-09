import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type TransactionDocument = HydratedDocument<Transaction>;

@Schema({ timestamps: true })
export class Transaction {
  @Prop()
  title: string;

  @Prop()
  user_id: mongoose.Schema.Types.ObjectId;

  @Prop({ default: 'pending' })
  status?: 'pending' | 'answered' | 'resolved' | 'in progress';

  @Prop()
  createdAt?: Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
