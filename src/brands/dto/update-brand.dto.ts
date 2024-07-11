import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';
import { IsDate, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {
  @IsUUID()
  @IsString()
  @IsOptional()
  readonly id?: string;

  @IsNumber()
  @IsOptional()
  // @IsDate()
  readonly updatedAt: number;
}
