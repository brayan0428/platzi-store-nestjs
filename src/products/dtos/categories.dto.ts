import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CategoryCreate {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class CategoryUpdate extends PartialType(CategoryCreate) {}
