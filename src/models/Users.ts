import { Livres } from "../types";

export class Users {
  constructor(
    public uid: string,
    public email: string,
    public displayName: string,
    public type: string,
    public listBook: Livres[] = []
  ) {}

  addBook(livre: Livres) {
    this.listBook.push(livre);
  }

  removeBook(livreId: string) {
    this.listBook = this.listBook.filter((book) => book.id !== livreId);
  }
}
