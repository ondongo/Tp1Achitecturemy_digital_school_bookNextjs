/* 
import { useEffect, useState, useCallback } from "react";

import { bookService } from "../../services/BookService";


import { QueryDocumentSnapshot, DocumentData } from "firebase/firestore";

export const useBooks = (searchText: string, currentPage: number) => {
  const [books, setBooks] = useState<any[]>([]);
  const [lastVisibleReference, setLastVisibleReference] = useState<QueryDocumentSnapshot<DocumentData> | null>(null);
  const [pageCount, setPageCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchInitialUsers = useCallback(async () => {
    setLoading(true);
    try {
      const data = await bookServicegetbooksLimit();
      if (data) {
        const { docs, lastVisible } = data;
        setBooks(docs);
        setLastVisibleReference(lastVisible);
      } else {
        setBooks([]);
      }

      const count = await bookService.getBooksCount();
      setPageCount(Math.ceil(count / 50));
    } catch (error) {
      console.error("Error fetching initial users:", error);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Effet pour initialiser les utilisateurs au premier rendu
  useEffect(() => {
    fetchInitialUsers();
  }, [fetchInitialUsers]);

  // Fonction pour rechercher les utilisateurs par titre
  const searchUsersByTitle = useCallback(async (searchText: string) => {
    setLoading(true);
    try {
      const searchResult = await bookService.searchBook({ searchText, pageSize: 50, lastVisible: null });
      if (searchResult) {
        const { books, lastVisible } = searchResult;
        setBooks(books);
        setLastVisibleReference(lastVisible);
      } else {
        setBooks([]);
      }
    } catch (error) {
      console.error("Error searching users by title:", error);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fonction pour obtenir des utilisateurs paginés
  const fetchPaginatedUsers = useCallback(async (direction: "before" | "after") => {
    try {
      const paginatedData = await bookService.getFilteredBooks({
        startAfterDoc: direction === "after" ? lastVisibleReference : null,
        endBeforeDoc: direction === "before" ? lastVisibleReference : null,
      });
      if (paginatedData) {
        const { docs, lastVisible } = paginatedData;
        setBooks(docs);
        setLastVisibleReference(lastVisible);
      }
    } catch (error) {
      console.error("Error fetching paginated users:", error);
    }
  }, [lastVisibleReference]);

  return {
    books,
    pageCount,
    loading,
    searchUsersByTitle,
    fetchPaginatedUsers,
  };
};
 */