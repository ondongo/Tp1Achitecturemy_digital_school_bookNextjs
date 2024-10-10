import { BookRepository } from "../repositories/BookRepository";

export class BookService {
  private bookRepository: BookRepository;

  constructor() {
    this.bookRepository = new BookRepository();
  }

  async createBook(book: any) {
    return this.bookRepository.createBook(book);
  }

  async getBookById(id: string) {
    return this.bookRepository.getBookById(id);
  }

  async searchBook({ searchText, pageSize, lastVisible }: any) {
    return this.bookRepository.searchBook({
      searchText,
      pageSize,
      lastVisible,
    });
  }

  async getBooksCount() {
    return this.bookRepository.getBooksCount();
  }

  async getFilteredBooks({
    startAfterDoc,
    endBeforeDoc,
    setPageCount,
    setLastVisibileReference,
  }: any) {
    return this.bookRepository.getFilteredBooks({
      startAfterDoc,
      endBeforeDoc,
      setPageCount,
      setLastVisibileReference,
    });
  }
}

export const bookService = new BookService();
