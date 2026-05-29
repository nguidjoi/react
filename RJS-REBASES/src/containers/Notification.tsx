import * as UI from "@/components";
import type { Notification } from "@/core/services/notification.service";
import * as Hooks from "@/hooks";
import styled from "@emotion/styled";
import type { FC, PropsWithChildren } from "react";





const getColor = (type: Notification['type']) => {

    switch (type) {
        case "error":
            return 'crimson'
        case "info":
            return 'lightblue'
        case "success":
            return 'lightgreen'
        case "warning":
            return 'orange'
    }

}

interface NotificationCardProps extends PropsWithChildren{
    item: Notification
}

const NotificationCard: FC<NotificationCardProps> = ({ item , children }) => {

    const Card = styled.div`
        border-radius: 10px;
        padding: 10px;
        position: absolute;
        top: 10px;
        width: 50vw;
        left:25vw;
        background-color: ${getColor(item.type)};
    `

    return (
        <Card>
            <h1><code>{item.type}</code> : {item.message}</h1>
            {children}
        </Card>
    )
};


const Notification = () => {

    const { notification, clear } = Hooks.useNotification()

    return (
        <>

            {
                notification ? (
                    <NotificationCard item={notification} >
                        <UI.Button level="optional" action={clear}>Clear</UI.Button>
                    </NotificationCard>
                ) 
                : 
                <h2>Pas de notification</h2>
            }
        </>
    )
}

export default Notification;