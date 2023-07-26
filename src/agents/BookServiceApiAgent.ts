import axios from 'axios';

import { BookApiInterface } from '../interfaces/BookApi.interface';
import { Book } from './types/Book';

export class BookServiceApiAgent implements BookApiInterface {
  findBook(_name: string): Object[] {
    return [{ name: 'clean tdd 1' }]
  }
}
