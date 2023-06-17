import { BookApiInterface } from "../interfaces/BookApi.interface";

export class BookServiceApiAgent implements BookApiInterface {
  findBook(_name: string): Object[] {
    return [{ name: 'clean tdd 1' }]
  }
}
