import { Book } from '../../src/agents/types/Book';
import { BookApiInterface } from '../../src/interfaces/BookApi.interface';

const books: Book[] = [
  {
    title: 'clean tdd'
  }
];

export class FakeBookServiceApiAgent implements BookApiInterface {
  findBook(_title: string): Book[] {
    return books;
  }
}
