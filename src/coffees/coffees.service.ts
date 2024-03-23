/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [
        {
            id: '1',
            name: 'Shipwreck Roast',
            brand: 'Starbuck',
            flavors: ['chocolate', 'vanilla'],
        },
    ];

    findAll() {
        return this.coffees;
    }

    findOne(id: string) {
        const coffee = this.coffees.find(item => item.id === id);
        if (!coffee) {
            throw new NotFoundException(`Coffee #${id} not found`);
        } else {
            return coffee
        }
    }

    create(createCoffeeDto: any) {
        this.coffees.push(createCoffeeDto);
    }

    update(id: string, updateCoffeeDto: any) {
        console.log("🚀 ~ CoffeesService ~ update ~ updateCoffeeDto:", updateCoffeeDto)
        const existingCoffee: any = this.findOne(id);
        if (existingCoffee) {
            //do something with existing
            return
        }
        return
    }

    remove(id: string) {
        const coffeeIndex = this.coffees.findIndex(item => parseInt(item.id) === +id);
        if (coffeeIndex >= 0) {
            this.coffees.splice(coffeeIndex, 1);
        }
    }


}
