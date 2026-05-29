/* Global Imports */
import React, { FC } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';

/* Local Imports */
import { HeaderWrapper } from './Header.styled';


interface HeaderProps {
   children: string;
   bg?: 'black' | 'gray' | 'blue'
}


const Header: FC<HeaderProps> = ({ children, bg }) => {

   return (
      <HeaderWrapper data-testid="Header">
         {children}
      </HeaderWrapper>
   );

}

/**
 * USAGE: Header description to complete.
 * @example
 * <Header /> 
 */
const HeaderMemo = React.memo(Header, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   // console.log(prevProps, nextProps)
   return false;
});
HeaderMemo.displayName = 'Header Memoized';

export default HeaderMemo;
