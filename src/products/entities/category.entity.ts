import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'categories' })
export class Category {
  @Prop()
  id: number;

  @Prop()
  name: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
