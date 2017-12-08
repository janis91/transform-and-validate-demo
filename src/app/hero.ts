import { IsNumber, IsNotEmpty, IsString } from 'class-validator';

export class Hero {
  @IsNotEmpty()
  @IsNumber()
  id: number;
  @IsNotEmpty()
  @IsString()
  name: string;

  toString(): string {
    return `Hero: ${this.name} with id: ${this.id}`;
  }
}
