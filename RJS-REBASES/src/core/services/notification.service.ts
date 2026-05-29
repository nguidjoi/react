

// NotificationService.ts

import { ENDPOINTS } from "../types/crud-service.type";
import { CrudAbstract } from "./crud.abstract";

export type NotificationType = "info" | "success" | "warning" | "error";

export interface Notification {
  id: string;
  message: string;
  type: NotificationType;
  createdAt: Date;
}

type Subscriber = (notification: Notification | null) => void;

class NotificationService extends CrudAbstract<Notification> {

  API: ENDPOINTS = '/api/notifications'

  private currentNotification: Notification | null = null;
  private history: Notification[] = [];
  private subscribers: Set<Subscriber> = new Set();

  /**
   * S'abonner aux changements de notification
   * Retourne une fonction unsubscribe
   */
  subscribe(callback: Subscriber): () => void {
    this.subscribers.add(callback);

    // Envoi immédiat de la notif courante
    callback(this.currentNotification);

    return () => {
      this.subscribers.delete(callback);
    };
  }

  /**
   * Notifie tous les subscribers
   */
  private notifySubscribers() {
    this.subscribers.forEach((callback) => {
      callback(this.currentNotification);
    });
  }

  /**
   * Ajouter une notification
   */
  push(
    message: string,
    type: NotificationType = "info"
  ): Notification {
    const notification: Notification = {
      id: crypto.randomUUID(),
      message,
      type,
      createdAt: new Date(),
    };



    this.currentNotification = notification;
    this.history.unshift(notification);

    this.notifySubscribers();

    // this.create(notification)

    return notification;
  }

  /**
   * Supprimer la notification courante
   */
  clearCurrent() {
    this.currentNotification = null;
    this.notifySubscribers();
  }

  /**
   * Retourne la notification active
   */
  getCurrent(): Notification | null {
    return this.currentNotification;
  }

  /**
   * Retourne tout l'historique
   */
  getHistory(): Notification[] {
    return [...this.history];
  }

  /**
   * Supprime l'historique
   */
  clearHistory() {
    this.history = [];
  }

  /**
   * Supprime une notification de l'historique
   */
  removeFromHistory(id: string) {
    this.history = this.history.filter((n) => n.id !== id);
  }
}

// Singleton optionnel
export const notificationService = new NotificationService();