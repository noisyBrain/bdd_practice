import { BookService } from '../../src/services/book.service';
import { BookFactory } from '../factory/BookFactory';

test('book service should be defined', () => {
  const bookService = new BookFactory().build()
  expect(bookService).toBeInstanceOf(BookService);
})

test('should find a book', () => {
  const bookService = new BookFactory().build();
  const book = bookService.find('tdd');
  expect(book).toEqual([{ name: 'clean tdd' }]);
})
