import axios from 'axios';

import { BookApiInterface } from '../interfaces/BookApi.interface';
import { Book } from './types/Book';

export class BookApiAgent implements BookApiInterface {
  async findBook(title: string): Promise<Book[]> {
    const response = await axios.get(`https://openlibrary.org/search.json?q=${title}`);
    const foundBooks = response.data?.docs?.filter((book: Book) => this.hasValidTopics(book));

    return foundBooks;
  }

  areValidTags(tagsList: string[]): boolean {
    const validTags = [
      'Computer program language',
      'Development',
      'Testing',
      'Computer software',
      'Computer software, development'
    ];

    return validTags.some((validTag: string) => tagsList.some((tag: string) => tag === validTag));
  }

  hasValidTopics(book: any /* should receive a DTO */): boolean {
    return book.subject && this.areValidTags(book.subject);
  }
}
