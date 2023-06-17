import { BookApiInterface } from "../interfaces/BookApi.interface";

export class BookService {
  constructor(private readonly agent: BookApiInterface) {
    this.agent = agent;
  }

  find(name: string) {
    return this.agent.findBook(name)
  }
}

