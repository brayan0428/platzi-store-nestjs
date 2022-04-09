import { PartialType, OmitType } from '@nestjs/swagger';
import { IsArray, IsDate, IsMongoId, IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsDate()
  date: Date;

  @IsNotEmpty()
  @IsMongoId()
  user: string;

  @IsNotEmpty()
  @IsArray()
  products: string[];
}

export class UpdateOrderDto extends PartialType(
  OmitType(CreateOrderDto, ['products']),
) {}

export class AddProductOrderDto {
  @IsNotEmpty()
  @IsArray()
  products: string[];
}
