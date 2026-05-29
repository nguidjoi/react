// useNotification.ts

import { Notification, notificationService, NotificationType } from "@/core/services/notification.service";
import { useEffect, useState, useCallback } from "react";


export function useNotification() {
    
    const [notification, setNotification] = useState<Notification | null>(
        notificationService.getCurrent()
    );

    const [history, setHistory] = useState<Notification[]>(
        () => notificationService.getHistory()
    );

    useEffect(() => {
        const unsubcribe =  notificationService.subscribe((n) => {
            setNotification(n);
            setHistory(notificationService.getHistory());
        });

        return unsubcribe;
    }, []);

    const push = useCallback(
        (message: string, type: NotificationType = "info") => {
            return notificationService.push(message, type);
        },
        []
    );

    const clear = useCallback(() => {
        notificationService.clearCurrent();
    }, []);

    return {
        notification,
        history,

        push,
        clear
    };
}