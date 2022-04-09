import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsNumber,
  IsString,
  IsUrl,
  IsNotEmpty,
  IsPositive,
  Min,
  IsOptional,
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
}

export class ProductUpdate extends PartialType(ProductCreate) {}

export class FilterProduct {
  @IsOptional()
  @IsPositive()
  limit: number;

  @IsOptional()
  @Min(0)
  offset: number;
}
