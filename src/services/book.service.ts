import { BookApiInterface } from "../interfaces/BookApi.interface";

export class BookService {
  constructor(private agent: BookApiInterface) {
    this.agent = agent;
  }

  findBook(name: string) {
    return this.agent.findBook(name)
  }
}

