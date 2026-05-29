/* Global Imports */
import { FC } from 'react';

/* Application Level Imports */
import * as UI from '@/components';
import * as Features from '@/containers';
import * as Hooks from '@/hooks';

/* Local Imports */
import './Users.style.css';
import { useAppStore } from '@/store/app.store';


interface UsersProps { }

const Users: FC<UsersProps> = () => {

   Hooks.useDocumentTitle('Users View');

   const { appState, dispacth } = useAppStore()

   return (
      <div className="Users" data-testid="Users">
         <UI.Main>Users Content

            <UI.Button
               action={() => dispacth({ type: 'LOAD_PRODUCTS' })}
               level='primary'
            >
               Load
            </UI.Button>
            {
               appState.products.map(p => <div key={p.id}>{p.title}</div>)
            }

         </UI.Main>
      </div>
   )
};

export default Users;
