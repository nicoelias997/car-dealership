import { Controller, Get, Post, Param, Body, Patch, Delete, ParseUUIDPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCardDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(
    private readonly carsService: CarsService
  ) {}

  @Get()
  getAllcars() {
    return this.carsService.findAll();
  }

  // @Get(':id')
  // getCardById(@Param('id', ParseIntPipe) id: number) {
  //   // Te convierte NaN siempre, pero hay que haver validaciones.
  //   return this.carsService.findById(id); 
  //   // return this.carsService.findById(Number(id));
  // }

  @Get(':id')
  getCardById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findByUUID((id));
  }

  // DTO
  @Post()
  createCar(@Body() createCardDto: CreateCardDto) {
    return this.carsService.createCar(createCardDto);
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto) {

    return this.carsService.updateCar(updateCarDto, id);
  }

  @Delete(':id')
  deleteCar(
    @Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.deleteCar(id);
  }
}
