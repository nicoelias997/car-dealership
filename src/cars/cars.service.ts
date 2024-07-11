import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCardDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
      year: 2023
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
      year: 2024
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee',
      year: 2021
    }
  ];

  findAll() {
    return this.cars;
  }
  // findById(id: number) {
  //   const car = this.cars.find(car => car.id === id);
  //   if (!car){
  //     throw new NotFoundException(`Car with ID ${id} not found`)
  //   }
  //   return car ? car : null;
  // }
  findByUUID(id: string) {
    const car = this.cars.find(car => car.id === id);
    if (!car){
      throw new NotFoundException(`Car with ID ${id} not found`)
    }
    return car ? car : null;
  }
  createCar (createCardDto: CreateCardDto){
    const newCar: Car = {
      id: uuid(),
      ...createCardDto
    };
    this.cars.push(newCar);
    return newCar;
  }
  updateCar (updateCarDto: UpdateCarDto, id: string){
    let carDB = this.findByUUID(id);

    if( updateCarDto.id && updateCarDto.id !== id){
        throw new BadRequestException(`Car with ID ${id} not found`)
    }

    this.cars = this.cars.map( car => {
      if (car.id === id) {
        carDB = {...carDB, ...updateCarDto, id};
        return carDB;
      }
      return car;
    })
    return carDB;
  }

  deleteCar (id: string){
    const carDB = this.findByUUID(id);
    if (!carDB){
      throw new NotFoundException(`Car with ID ${id} not found`);
    } 
    this.cars = this.cars.filter(car => car.id !== id);
    return `${carDB} eliminado!`
  }

  fillCarsWithSeedData ( cars: Car[]){
    this.cars = cars;
  }
}
