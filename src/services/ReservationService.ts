// services/ReservationService.ts
import { ReservationRepository } from "@/repositories/ReservationRepository";
import { Reservations } from "@/models/Reservations";

export class ReservationService {
  private repository: ReservationRepository;

  constructor() {
    this.repository = new ReservationRepository();
  }

  async createReservation(reservationData: Reservations): Promise<string> {
    return await this.repository.createReservation(reservationData);
  }

  async getReservationById(id: string): Promise<Reservations | null> {
    return await this.repository.getReservationById(id);
  }

  async getReservationsByUserId(userId: string): Promise<Reservations[]> {
    return await this.repository.getReservationsByUserId(userId);
  }

  async updateReservation(id: string, reservationData: Partial<Reservations>): Promise<void> {
    await this.repository.updateReservation(id, reservationData);
  }

  async deleteReservation(id: string): Promise<void> {
    await this.repository.deleteReservation(id);
  }

  async getAllReservations(): Promise<Reservations[]> {
    return await this.repository.getAllReservations();
  }
}
