import { useState } from "react";
import { ReservationService } from "@/services/ReservationService";
import { Reservations } from "@/models/Reservations";

export const useReservation = () => {
  const reservationService = new ReservationService();
  const [reservation, setReservation] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createReservation = async (reservationData: Reservations) => {
    setLoading(true);
    try {
      const reservationId = await reservationService.createReservation(
        reservationData
      );
      setReservation({ ...reservationData, id: reservationId });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchReservationById = async (id: string) => {
    setLoading(true);
    try {
      const fetchedReservation = await reservationService.getReservationById(
        id
      );
      setReservation(fetchedReservation);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchReservationsByUserId = async (userId: string) => {
    setLoading(true);
    try {
      const fetchedReservations =
        await reservationService.getReservationsByUserId(userId);
      setReservation(fetchedReservations);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateReservation = async (
    id: string,
    reservationData: Partial<Reservations>
  ) => {
    setLoading(true);
    try {
      await reservationService.updateReservation(id, reservationData);
      setReservation((prevReservation: any) =>
        prevReservation ? { ...prevReservation, ...reservationData } : null
      );
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    reservation,
    loading,
    error,
    createReservation,
    fetchReservationById,
    fetchReservationsByUserId,
    updateReservation,
  };
};
