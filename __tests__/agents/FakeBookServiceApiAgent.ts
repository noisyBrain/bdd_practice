import { Book } from '../../src/agents/types/Book';
import { BookApiInterface } from '../../src/interfaces/BookApi.interface';

const books: Book[] = [
  {
    title: 'clean tdd'
  }
];

// TODO: import book from constants, but first should define a DTO

export class FakeBookServiceApiAgent implements BookApiInterface {
  findBook(_title: string): Book[] {
    return books;
  }
}
