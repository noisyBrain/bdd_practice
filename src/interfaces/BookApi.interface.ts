import { Book } from '../agents/types/Book';

export interface BookApiInterface {
  findBook(name: string): Promise<Book[]> | Book[];
}
