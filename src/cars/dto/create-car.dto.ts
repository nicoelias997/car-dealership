import { IsNumber, IsString } from "class-validator";

export class CreateCardDto {

  @IsString()
  readonly brand: string;
  
  @IsString()
  readonly model: string;

  @IsNumber()
  readonly year: number;

}


