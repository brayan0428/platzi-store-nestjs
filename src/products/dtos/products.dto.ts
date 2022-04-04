import { PartialType } from '@nestjs/mapped-types';
import {
  IsNumber,
  IsString,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';

export class ProductCreate {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsUrl()
  @IsNotEmpty()
  url: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsNumber()
  @IsPositive()
  quantity: number;
}

export class ProductUpdate extends PartialType(ProductCreate) {}
