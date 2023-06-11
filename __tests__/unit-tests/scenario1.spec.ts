import { BookService } from '../../src/services/book.service';

test('book service should be defined', () => {
  const bookService = new BookService();
  expect(bookService).toBeInstanceOf(BookService)
})

test('should find a book', () => {
  const bookService = new BookService();
  const book = bookService.find();
  expect(book).toEqual([{ name: 'clean tdd' }])
})
