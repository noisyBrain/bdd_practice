import { BookService } from '../../src/services/book.service';
import { FakeBookServiceApiAgent } from '../../src/agents/FakeBookServiceApiAgent';

test('book service should be defined', () => {
  const bookService = new BookFactory().build()
  expect(bookService).toBeInstanceOf(BookService);
})

test('should find a book', () => {
  const bookService = new BookFactory().build();
  const book = bookService.findBook('tdd');
  expect(book).toEqual([{ name: 'clean tdd' }]);
})
