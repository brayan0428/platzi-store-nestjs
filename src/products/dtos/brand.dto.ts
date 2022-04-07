import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class BrandCreate {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class BrandUpdate extends PartialType(BrandCreate) {}
