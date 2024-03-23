import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from '../create-coffee.dto/create-coffee.dto';

// PartialType = sets all the feild as optional and also copies the properties of the imported DTO
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) { }
