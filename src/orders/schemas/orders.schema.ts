import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type OrdersDocument = HydratedDocument<Orders>;

@Schema()
export class Orders {
  @Prop() name: string;

  @Prop() available_protocols: Array<string>;

  @Prop() period: string;

  @Prop({ default: 'active' }) status: 'active' | 'deactive';
}

export const OrdersSchema = SchemaFactory.createForClass(Orders);
