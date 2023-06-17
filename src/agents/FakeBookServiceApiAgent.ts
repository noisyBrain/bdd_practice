import { BookApiInterface } from "../interfaces/BookApi.interface";

export class FakeBookServiceApiAgent implements BookApiInterface {
  findBook() {
    return [{ name: 'clean tdd' }]
  }
}
