import { BookService } from '../../src/services/book.service';
import { BookApiInterface } from '../../src/interfaces/BookApi.interface';
import { FakeBookServiceApiAgent } from '../agents/FakeBookServiceApiAgent';

export class BookFactory {
  constructor(private readonly _agent: BookApiInterface = new FakeBookServiceApiAgent()) {}

  build() {
    return new BookService(this._agent);
  }
}
