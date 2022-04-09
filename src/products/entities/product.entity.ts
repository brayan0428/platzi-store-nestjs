import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  url: string;

  @Prop({ type: 'number' })
  price: number;

  @Prop({ type: 'number' })
  quantity: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
