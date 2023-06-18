import { BookApiInterface } from "../../src/interfaces/BookApi.interface";

export class FakeBookServiceApiAgent implements BookApiInterface {
  findBook(_name: string): Object[] {
    return [{ name: 'clean tdd' }]
  }
}
