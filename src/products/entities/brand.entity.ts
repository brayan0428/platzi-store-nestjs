import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Brand extends Document {
  @Prop()
  id: number;
  @Prop()
  name: string;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);
