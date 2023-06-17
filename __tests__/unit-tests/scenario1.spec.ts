import { BookService } from '../../src/services/book.service';
import { FakeBookServiceApiAgent } from '../../src/agents/FakeBookServiceApiAgent';

test('book service should be defined', () => {
  const bookService = new BookService(new FakeBookServiceApiAgent());
  expect(bookService).toBeInstanceOf(BookService);
})

test('should find a book', () => {
  const bookService = new BookService(new FakeBookServiceApiAgent());
  const book = bookService.findBook('tdd');
  expect(book).toEqual([{ name: 'clean tdd' }]);
})
