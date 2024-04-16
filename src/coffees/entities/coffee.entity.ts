/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Flavor } from "./flavor.entity/flavor.entity";

@Entity()//if we mention this property - here 'coffees' -
// the table name is set to 'coffees', otherwise it will be set to the table name of the entity -here 'coffee'.
export class Coffee {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    brand: string;

    @JoinTable()
    @ManyToMany(type => Flavor, flavor => flavor.coffees, {
        cascade: true,
    })
    flavors: Flavor[];
}
