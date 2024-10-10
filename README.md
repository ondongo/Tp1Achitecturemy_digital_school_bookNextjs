# Bibliothèque Management System

## Table des matières

- [Description](#description)
- [Technologies](#technologies)
- [Architecture](#architecture)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Fonctionnalités](#fonctionnalités)
- [Contribuer](#contribuer)

## Description

Ce projet est une application de gestion de bibliothèque qui permet aux utilisateurs de rechercher, emprunter et gérer des livres. L'application utilise Firebase pour la gestion des données et Algolia pour améliorer les performances de recherche.

## Technologies

- **Frontend**: React, Chakra UI
- **Backend**: Firebase (Firestore)
- **Recherche**: Algolia
- **Styles**: CSS-in-JS avec Chakra UI
- **Design Patterns**: Singleton pour Firestore
- **Tests**: [ajouter les outils de test si applicable]

## Architecture

L'architecture de l'application suit le modèle suivant :

- **Modèles**:

  - `Livres`: Gère les informations des livres.
  - `Emprunts`: Gère les informations des emprunts de livres par les utilisateurs.
  - `Réservations`: Gère les informations des réservations de livres.
- **Services**:

  - `BookService`: Interagit avec Firestore pour la gestion des livres.
  - `ReservationService`: Gère les réservations et les emprunts.
  - `UserService`: Gère les informations des utilisateurs.
- **Répositories**:

  - `BookRepository`: Fournit des méthodes pour interagir avec la collection de livres dans Firestore.
  - `ReservationRepository`: Fournit des méthodes pour interagir avec les réservations et emprunts.
  - `UserRepository`: Fournit des méthodes pour interagir avec les utilisateurs.
- **Hooks**:

  - `useBooks`: Pour la gestion des livres et leur recherche.
  - `useReservations`: Pour la gestion des réservations et emprunts.
  - `useUsers`: Pour la gestion des utilisateurs.

## Installation

Pour installer ce projet, suivez ces étapes :

1. Clonez le repository :
   ```bash
   git clone https://github.com/votre-repo/bibliotheque-management-system.git
   ```
