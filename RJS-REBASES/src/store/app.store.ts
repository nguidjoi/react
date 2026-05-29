import { ProductDTO } from "@/core/dto/product.dto";
import { Notification } from "@/core/services/notification.service";
import { productApi } from "@/core/services/product.crud";
import { configureStore, Reducer, Tuple } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";


interface AppState {
    notication: Notification | null,
    products: ProductDTO[],
    loading: boolean
}

type Action = {
    type: 'UPDATE_NOTIFICATION',
    payload: Notification | null
} | {
    type: 'LOAD_PRODUCTS',
    payload?: null
} | {
    type: 'UPDATE_PRODUCTS',
    payload: ProductDTO[]
}

const reducer:Reducer<AppState ,Action> = (stock, commande) => {
    switch (commande.type) {
        case "UPDATE_NOTIFICATION":
            return { ...stock, notication: commande.payload } ;
        case "LOAD_PRODUCTS":
            return { ...stock, loading: true };
        case "UPDATE_PRODUCTS":
            return { ...stock, loading: false , products: commande.payload  };
        default:
            return stock;
    }
} 

const manager = (store) => (next) => (action: Action) => {

    if(action.type === "LOAD_PRODUCTS" ){
        productApi.read().then( data => store.dispatch({type:'UPDATE_PRODUCTS', payload:data}))
    }
    next(action)
}

const store =  configureStore({
    reducer,
    middleware:  (getDefaultMiddleware):any => getDefaultMiddleware().concat(manager),
    preloadedState : {
        loading:false,
        notication:null,
        products:[]
    }
})

export const useAppStore = () => {
    const [appState, setAppState] = useState( store.getState() )
    useEffect( () => store.subscribe( () => setAppState( store.getState() ) ) ,[])

    return { appState, dispacth:store.dispatch}
}