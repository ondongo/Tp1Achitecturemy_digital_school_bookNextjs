export interface Users {
  uid: string;
  email: string;
  display_name: string;
  type: string;
  listBook: Array<Livres>;
}

export interface Emprunts {
  id: string;
  idLivre: string;
  idUser: string;
  dateEmprunt: Date;
  dateRetourPrevue: Date;
  dateRetour: Date;
}

export interface Livres {
  id: string;
  name: string;
  image: string;
  author: string;
  statut: string;
  dateofReservation: Date;
  DateofValidation: Date;
}

export interface Reservation {
  id: string;
}

export interface History {
  id: string;
}

export enum StatutLivre {
  Disponible = "disponilble",
  Emprunté = "emprunté",
  Reservé = "reservé",
}

export enum StatutEmprunt {
  Attente = "en attente",
  Disponible = "disponible pour emprunt",
}
