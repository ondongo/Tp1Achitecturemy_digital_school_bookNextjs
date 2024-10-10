import { db } from '../../firebase/firestore'; 

export class FirestoreSingleton {
  private static instance: any;

  private constructor() {}

  public static getInstance() {
    if (!FirestoreSingleton.instance) {
      FirestoreSingleton.instance = db;  
    }
    return FirestoreSingleton.instance;
  }
}