import { Emprunts } from "@/models/Emprunts";
import { EmpruntRepository } from "@/repositories/LoanRepository";

export class EmpruntService {
  private empruntRepository: EmpruntRepository;

  constructor() {
    this.empruntRepository = new EmpruntRepository();
  }

  async createEmprunt(emprunt: Emprunts): Promise<string> {
    return this.empruntRepository.createEmprunt(emprunt);
  }

  async getEmpruntById(id: string): Promise<Emprunts | null> {
    return this.empruntRepository.getEmpruntById(id);
  }

  async getEmpruntsByUserId(userId: string): Promise<Emprunts[]> {
    return this.empruntRepository.getEmpruntsByUserId(userId);
  }

  async updateEmprunt(
    id: string,
    empruntData: Partial<Emprunts>
  ): Promise<void> {
    return this.empruntRepository.updateEmprunt(id, empruntData);
  }
}
