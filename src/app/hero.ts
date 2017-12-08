export class Hero {
  id: number;
  name: string;

  toString(): string {
    return `Hero: ${this.name} with id: ${this.id}`;
  }
}
