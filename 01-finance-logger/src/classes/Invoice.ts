import { HasFormatter } from '../interfaces/HasFormatter.js';

// class
export class Invoice implements HasFormatter {
  //----> first way
  // readonly client: string;
  // private details: string;
  // public amount: number;

  // constructor(c: string, d: string, a: number) {
  //   this.client = c;
  //   this.details = d;
  //   this.amount = a;
  // }

  //----> second way (only works if we have access modifier in front)
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes Rs. ${this.amount} for ${this.details}`;
  }
}
