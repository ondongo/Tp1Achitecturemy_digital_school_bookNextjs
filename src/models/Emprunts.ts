export class Emprunts {
    constructor(
      public id: string,
      public idLivre: string,
      public idUser: string,
      public dateEmprunt: Date,
      public dateRetourPrevue: Date,
      public dateRetour?: Date
    ) {}
  
    markAsReturned(returnDate: Date) {
      this.dateRetour = returnDate;
    }
  }