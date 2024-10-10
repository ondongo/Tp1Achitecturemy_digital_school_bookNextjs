import { useState } from "react";
import { Emprunts } from "@/models/Emprunts";
import { EmpruntService } from "@/services/LoanService";

export const useEmprunt = () => {
  const empruntService = new EmpruntService();
  const [emprunt, setEmprunt] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createEmprunt = async (empruntData: Emprunts) => {
    setLoading(true);
    try {
      const empruntId = await empruntService.createEmprunt(empruntData);
      setEmprunt({ ...empruntData, id: empruntId });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchEmpruntById = async (id: string) => {
    setLoading(true);
    try {
      const fetchedEmprunt = await empruntService.getEmpruntById(id);
      setEmprunt(fetchedEmprunt);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchEmpruntsByUserId = async (userId: string) => {
    setLoading(true);
    try {
      const fetchedEmprunts = await empruntService.getEmpruntsByUserId(userId);
      setEmprunt(fetchedEmprunts);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateEmprunt = async (id: string, empruntData: Partial<Emprunts>) => {
    setLoading(true);
    try {
      await empruntService.updateEmprunt(id, empruntData);
      setEmprunt((prevEmprunt: any) =>
        prevEmprunt ? { ...prevEmprunt, ...empruntData } : null
      );
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    emprunt,
    loading,
    error,
    createEmprunt,
    fetchEmpruntById,
    fetchEmpruntsByUserId,
    updateEmprunt,
  };
};
