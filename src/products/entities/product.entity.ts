import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Brand } from './brand.entity';
import { Category } from './category.entity';

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

  @Prop({ type: Types.ObjectId, ref: Brand.name })
  brand: Brand | Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: Category.name })
  category: Category | Types.ObjectId;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
