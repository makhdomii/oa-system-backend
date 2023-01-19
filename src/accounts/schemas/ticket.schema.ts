import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

class Description {
  @Prop()
  content: string;
  // type:
}

export type TicketDocument = HydratedDocument<Ticket>;

@Schema()
export class Ticket {
  @Prop()
  title: string;

  @Prop()
  description: Array<{
    content: string;
    type: 'question' | 'answer';
    time: string;
  }>;

  @Prop()
  user_id: mongoose.Schema.Types.ObjectId;

  @Prop({ default: 'pending' })
  status: 'pending' | 'answered' | 'resolved' | 'in progress';
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
