import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateBrandDto {

  @IsString()
  @IsOptional()
  readonly name: string;
  
  @IsNumber()
  @IsOptional()
  // @IsDate()
  readonly createdAt: number;

  @IsNumber()
  @IsOptional()
  // @IsDate()
  readonly updatedAt: number;

}
