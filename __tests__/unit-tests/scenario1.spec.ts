import { BookService } from '../../src/services/book.service';
import { BookFactory } from '../factory/BookFactory';
import { BookApiAgent } from '../../src/agents/BookApiAgent';

import { book } from '../../constants';

test('book service should be defined', () => {
  const bookService = new BookFactory().build();

  expect(bookService).toBeInstanceOf(BookService);
});

test('should find a book', () => {
  const bookService = new BookFactory().build();
  const foundBook = bookService.find('tdd');

  expect(foundBook).toEqual([{ title: 'clean tdd' }]);
});

test('BookFactory should receive an agent as parameter or implement a fake agent by default', () => {
  const bookService = new BookFactory().build();

  expect(bookService).toBeInstanceOf(BookService);
});

test('BookApiAgent should return a list of books', async () => {
  const bookService = new BookFactory(new BookApiAgent()).build();
  const books = await bookService.find('tdd');

  expect(books.length).toBeGreaterThan(0);
});

test('BookApiAgent should return true if tags exists', () => {
  const agent = new BookApiAgent();
  const result = agent.areValidTags([
    'Computer programming',
    'computer program language',
    'Computer software'
  ]);

  expect(result).toBe(true);
});

test('hasValidTopics should return boolean', () => {
  const agent = new BookApiAgent();

  expect(agent.hasValidTopics(book)).toBe(true);
});
