import { Reservations } from "@/models/Reservations";
import { FirestoreSingleton } from "../configs/design_pattern/FirestoreSingleton";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  updateDoc,
  deleteDoc
} from "firebase/firestore";

export class ReservationRepository {
  private db: any;

  constructor() {
    this.initialize();
  }

  private async initialize() {
    this.db = await FirestoreSingleton.getInstance();
  }

  async createReservation(reservation: Reservations): Promise<string> {
    const docRef = await addDoc(
      collection(this.db, "reservations"),
      reservation
    );
    return docRef.id;
  }

  async getReservationById(id: string): Promise<Reservations | null> {
    const docRef = doc(this.db, "reservations", id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists()
      ? ({ id: docSnap.id, ...docSnap.data() } as Reservations)
      : null;
  }

  async getReservationsByUserId(userId: string): Promise<Reservations[]> {
    const reservationsRef = collection(this.db, "reservations");
    const q = query(reservationsRef, where("idUser", "==", userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() } as Reservations)
    );
  }

  async updateReservation(
    id: string,
    reservationData: Partial<Reservations>
  ): Promise<void> {
    const docRef = doc(this.db, "reservations", id);
    await updateDoc(docRef, reservationData);
  }

  async deleteReservation(id: string) {
    const docRef = doc(this.db, "reservations", id);
    await deleteDoc(docRef);
  }

  async getAllReservations(): Promise<Reservations[]> {
    const reservationsRef = collection(this.db, "reservations");
    const querySnapshot = await getDocs(reservationsRef);
    return querySnapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() } as Reservations)
    );
  }
}
