import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from "uuid";

export const CARS_SEED: Car[] = [
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
