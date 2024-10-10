import { Livres } from "@/models/Livres";
import { FirestoreSingleton } from "../configs/design_pattern/FirestoreSingleton";

import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  addDoc,
  doc,
  startAfter,
  endBefore,
  getCountFromServer,
  DocumentData,
  QueryDocumentSnapshot,
  limit,
} from "firebase/firestore";
import { SetStateAction } from "react";

export class BookRepository {
  private db: any;

  constructor() {
    this.initialize();
  }

  private async initialize() {
    this.db = await FirestoreSingleton.getInstance();
  }

  //01
  async createBook(book: any) {
    const docRef = await addDoc(collection(this.db, "books"), book);
    return docRef.id;
  }

  //02
  async getBookById(id: string): Promise<Livres | null> {
    try {
      const docRef = doc(this.db, "books", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        return { id: docSnap.id, ...data } as Livres;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error fetching book:", error);
      return null;
    }
  }

  //03
  async searchBook({ searchText, pageSize, lastVisible }: any) {
    const usersRef = collection(this.db, "books");
    let q = query(
      usersRef,
      where("name", ">=", searchText),
      where("name", "<=", searchText + "\uf8ff")
    );

    if (lastVisible) {
      q = query(q, startAfter(lastVisible));
    }

    const querySnapshot = await getDocs(q);
    const books: any[] = [];
    querySnapshot.forEach((doc: any) => {
      books.push({ ...doc.data(), id: doc.id });
    });

    const newLastVisible =
      querySnapshot.docs[querySnapshot.docs.length - 1] || null;
    return { books, lastVisible: newLastVisible };
  }

  //04
  async getBooksCount() {
    const collectionReference = collection(this.db, "books");
    const snapshot = await getCountFromServer(query(collectionReference));
    return snapshot.data().count;
  }

  //05
  async getFilteredBooks({
    startAfterDoc,
    endBeforeDoc,
    setPageCount,
    setLastVisibileReference,
  }: {
    startAfterDoc?: QueryDocumentSnapshot<DocumentData> | null;
    endBeforeDoc?: QueryDocumentSnapshot<DocumentData> | null;
    setPageCount: React.Dispatch<SetStateAction<number>>;
    setLastVisibileReference: React.Dispatch<QueryDocumentSnapshot<
      DocumentData,
      DocumentData
    > | null>;
  }) {
    const booksCollectionRef = collection(this.db, "books");
    let booksQuery = query(booksCollectionRef);
    const countSnapshot = await getCountFromServer(booksQuery);

    if (startAfterDoc && !endBeforeDoc) {
      booksQuery = query(booksQuery, startAfter(startAfterDoc));
    }
    if (endBeforeDoc && !startAfterDoc) {
      booksQuery = query(booksQuery, endBefore(endBeforeDoc));
    }

    booksQuery = query(booksQuery, limit(50));

    const snapshot = await getDocs(booksQuery);

    const count = countSnapshot.data().count;
    const lastVisible = snapshot.docs[snapshot.docs.length - 1];
    const firstVisible = snapshot.docs.at(0);
    const pageCount = Math.ceil(count / 50);

    const docs = snapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));

    setPageCount(pageCount);
    setLastVisibileReference(lastVisible);

    return { docs, lastVisible, count, firstVisible, pageCount };
  }
  catch(error: any) {
    console.error("Error getting filtered books:", error);
    throw new Error("Error getting filtered books");
  }
}
