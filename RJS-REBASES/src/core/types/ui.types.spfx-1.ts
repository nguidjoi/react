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


class X extends React.Component {


   state = {
      loading: true,
      error: undefined,
      options: undefined
   }

   protected async loadOptions() {
      this.mutateState( {loading:true} );


      const options = await (this.props as any).loadOptions().catch((error: any): void => {
                                                      this.mutateState( { loading:false, error})
                                              });

      this.mutateState( { loading:false, options});

   }

   mutateState(mutation:any){
      this.setState( state => ({...state, ...mutation}));
   }

}
