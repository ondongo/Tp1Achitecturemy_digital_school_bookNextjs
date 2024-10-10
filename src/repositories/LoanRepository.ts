// repositories/EmpruntRepository.ts
import { Emprunts } from "@/models/Emprunts";
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
} from "firebase/firestore";

export class EmpruntRepository {
  private db: any;

  constructor() {
    this.initialize();
  }

  private async initialize() {
    this.db = await FirestoreSingleton.getInstance();
  }

  async createEmprunt(emprunt: Emprunts): Promise<string> {
    const docRef = await addDoc(collection(this.db, "emprunts"), emprunt);
    return docRef.id;
  }

  async getEmpruntById(id: string): Promise<Emprunts | null> {
    const docRef = doc(this.db, "emprunts", id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists()
      ? ({ id: docSnap.id, ...docSnap.data() } as Emprunts)
      : null;
  }

  async getEmpruntsByUserId(userId: string): Promise<Emprunts[]> {
    const empruntsRef = collection(this.db, "emprunts");
    const q = query(empruntsRef, where("idUser", "==", userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() } as Emprunts)
    );
  }

  async updateEmprunt(
    id: string,
    empruntData: Partial<Emprunts>
  ): Promise<void> {
    const docRef = doc(this.db, "emprunts", id);
    await updateDoc(docRef, empruntData);
  }
}
