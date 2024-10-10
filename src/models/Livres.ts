import { StatutLivre } from "@/types";

export class Livres {
  constructor(
    public id: string,
    public name: string,
    public image: string,
    public author: string,
    public description: string,
    public category: string,
    public statut: StatutLivre,
    public dateofReservation?: Date,
    public dateofValidation?: Date
  ) {}

  updateStatus(newStatus: StatutLivre) {
    this.statut = newStatus;
  }
}
