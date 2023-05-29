import { Brand } from "src/brands/entities/brand.entity";
import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [

    {
        id: uuid(),
        name: 'Volvo',        
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Mazda',        
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Caldina',        
        createdAt: new Date().getTime(),
    },
    
]