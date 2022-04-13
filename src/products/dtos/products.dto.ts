import { ApiProperty, PartialType } from '@nestjs/swagger';
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
  @ApiProperty({
    description: 'Product name',
  })
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

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  brandId: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  categoryId: number;
}

export class ProductUpdate extends PartialType(ProductCreate) {}
