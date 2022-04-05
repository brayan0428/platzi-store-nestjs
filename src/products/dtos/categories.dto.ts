import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';

export class CategoryCreate {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class CategoryUpdate extends PartialType(CategoryCreate) {}
