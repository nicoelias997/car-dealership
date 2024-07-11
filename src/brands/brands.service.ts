import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid} from 'uuid';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    { 
      id: uuid(), 
      name: 'Toyota' ,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime()
    },
    { 
      id: uuid(), 
      name: 'Honda' ,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime()
    },
    { 
      id: uuid(), 
      name: 'Tesla' ,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime()
    },
    { 
      id: uuid(), 
      name: 'BMW' ,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime()
    },
  ]
  create(createBrandDto: CreateBrandDto) {
    const newBrand: Brand = {
      id: uuid(),
      ...createBrandDto
    }
    this.brands.push(newBrand);
    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);
    if (!brand){
      throw new NotFoundException(`Brand with ID ${id} not found`)
    }
    return brand ? brand : null;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);
    if (!brandDB){
      throw new BadRequestException(`Brand with ID ${id} not found`)
    }
    this.brands = this.brands.map(brand => {
      if (brand.id === id) {
        brandDB = {...brandDB, ...updateBrandDto, id}
        return brandDB;
      }
      return brand;
    });
    return brandDB;
  }

  remove(id: string) {
    this.brands = this.brands.filter(brand => brand.id !== id);
  }

  fillBrandsWithSeedData ( brands: Brand[]){
    this.brands = brands;
  }
}
