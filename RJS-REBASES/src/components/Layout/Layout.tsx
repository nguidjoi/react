/* Global Imports */
import React, { FC, PropsWithChildren } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';

/* Local Imports */
import { LayoutWrapper } from './Layout.styled';
import { Outlet } from 'react-router';

interface LayoutProps{ }

const Layout: FC<LayoutProps> = () => {

   // Hooks.useGloblaEvent('click',()=> console.log('click event'));

   return(
   <LayoutWrapper data-testid="Layout">
      Layout Component
      <Outlet/> 
   </LayoutWrapper>
   );

}

/**
 * USAGE: Layout description to complete.
 * @example
 * <Layout /> 
 */
const LayoutMemo = React.memo(Layout, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   console.log(prevProps, nextProps)
   return false;
});
LayoutMemo.displayName = 'Layout Memoized';

export default LayoutMemo;
