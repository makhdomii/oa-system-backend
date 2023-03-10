import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type OrdersDocument = HydratedDocument<Orders>;

@Schema()
export class Orders {
  @Prop() price: string;

  @Prop() configs: mongoose.Schema.Types.ObjectId;

  @Prop() user_id: mongoose.Schema.Types.ObjectId;

  @Prop() next_due_time: Date;

  @Prop({ default: 'unpaid' }) status:
    | 'active'
    | 'deactive'
    | 'pending'
    | 'unpaid'
    | 'rejected';
}

export const OrdersSchema = SchemaFactory.createForClass(Orders);
