import { BookService } from '../../src/services/book.service';
import { BookFactory } from '../factory/BookFactory';
import { BookServiceApiAgent } from '../../src/agents/BookServiceApiAgent';

test('book service should be defined', () => {
  const bookService = new BookFactory().build()
  expect(bookService).toBeInstanceOf(BookService);
})

test('should find a book', () => {
  const bookService = new BookFactory().build();
  const book = bookService.find('tdd');
  expect(book).toEqual([{ name: 'clean tdd' }]);
})

test('BookFactory should receive an agent as parameter or implement a fake agent by default', () => {
  const bookService = new BookFactory().build();
  expect(bookService).toBeInstanceOf(BookService);
})

test('BookService should return a a list of books', () => {
  const bookService = new BookFactory(new BookServiceApiAgent()).build();
  const books = bookService.find('tdd');
  expect(books.length).toBeGreaterThan(0)
})
