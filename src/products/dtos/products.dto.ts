import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsNumber,
  IsString,
  IsUrl,
  IsNotEmpty,
  IsPositive,
  Min,
  IsOptional,
  ValidateIf,
  IsMongoId,
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
  @IsMongoId()
  brand: string;
}

export class ProductUpdate extends PartialType(ProductCreate) {}

export class FilterProduct {
  @IsOptional()
  @IsPositive()
  limit: number;

  @IsOptional()
  @Min(0)
  offset: number;

  @IsOptional()
  @Min(0)
  minPrice: number;

  @ValidateIf((params) => params.minPrice)
  @Min(0)
  maxPrice: number;
}
