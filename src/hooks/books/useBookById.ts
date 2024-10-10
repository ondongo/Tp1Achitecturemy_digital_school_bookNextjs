import { useEffect, useState } from "react";
import { bookService } from "../../services/BookService";

export const useBookById = (id: string) => {
  const [book, setBook] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true);
      const fetchedBook = await bookService.getBookById(id);
      setBook(fetchedBook);
      setLoading(false);
    };

    if (id) {
      fetchBook();
    }
  }, [id]);

  return { book, loading };
};
