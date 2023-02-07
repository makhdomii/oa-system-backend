import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
@Schema({ timestamps: true, _id: false })
class Description {
  @Prop()
  content: string;
  @Prop({ default: 'question' })
  type: 'question' | 'answer';
  @Prop()
  createdAt: Date;
}
export const DescriptionSchema = SchemaFactory.createForClass(Description);
export type TicketDocument = HydratedDocument<Ticket>;

@Schema({ timestamps: true })
export class Ticket {
  @Prop()
  title: string;

  @Prop([{ type: DescriptionSchema }])
  description: Description[];

  @Prop()
  user_id: mongoose.Schema.Types.ObjectId;

  @Prop({ default: 'pending' })
  status?: 'pending' | 'answered' | 'resolved' | 'in progress';

  @Prop()
  createdAt?: Date;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
