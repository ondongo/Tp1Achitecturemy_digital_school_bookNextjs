export class Reservations {
    constructor(
      public id: string,
      public idLivre: string,
      public idUser: string,
      public dateReservation: Date,
      public dateValidation?: Date
    ) {}
  
    validateReservation(validationDate: Date) {
      this.dateValidation = validationDate;
    }
  }