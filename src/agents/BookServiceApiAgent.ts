import axios from 'axios';

import { BookApiInterface } from '../interfaces/BookApi.interface';
import { Book } from './types/Book';

export class BookServiceApiAgent implements BookApiInterface {
  async findBook(title: string): Promise<Book[]> {
    const response = await axios.get(`https://openlibrary.org/search.json?q=${title}`);

    const books = response.data.docs.filter(
      (book: Book) => book.subject && book?.subject?.includes('Computer software')
    );

    return books;
  }
}
