import { BookService } from '../../src/services/book.service';
import { BookApiInterface } from '../../src/interfaces/BookApi.interface';
import { FakeBookServiceApiAgent } from '../agents/FakeBookServiceApiAgent';

export class BookFactory {
  constructor(private agent: BookApiInterface = new FakeBookServiceApiAgent()) {}

  build() {
    return new BookService(this.agent);
  }
}
