import React from "react";

export interface UILevel {
   level: 'primary' | 'optional' | 'critical';
}

export interface UISize {
   size: 'small' | 'medium' | 'large';
}

export interface UIActionnable {
   action: () => void;
}


interface State{
      loading: boolean,
      error: any | undefined,
      options: any[] | undefined
}


class X extends React.Component {


   state = {
      loading: true,
      error: undefined,
      options: undefined
   }

   protected async loadOptions() {
      this.setState( state => ({...state, loading:true}));


      const options = await (this.props as any).loadOptions().catch((error: any): void => this.setState( state => ({...state, loading:false, error})));

      this.setState( state => ({...state, loading:false, options}));

   }

   mutateState(mutation:Partial<State>){
      this.setState( state => ({...state, ...mutation}));
   }

}

