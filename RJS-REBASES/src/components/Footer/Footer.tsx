/* Global Imports */
import React, { FC } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';

/* Local Imports */
import { FooterWrapper } from './Footer.styled';


interface FooterProps { }


const Footer: FC<FooterProps> = () => {

   // Hooks.useGloblaEvent('click',()=> console.log('click event'));

   return(
   <FooterWrapper data-testid="Footer">
      <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum temporibus eaque amet sequi nobis? Commodi, doloribus. Animi consectetur mollitia natus quas, iusto tempore nisi voluptatem. Dolore temporibus illo incidunt autem?
      </p>
   </FooterWrapper>
   );

}

/**
 * USAGE: Footer description to complete.
 * @example
 * <Footer /> 
 */
const FooterMemo = React.memo(Footer, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   console.log(prevProps, nextProps)
   return true;
});
FooterMemo.displayName = 'Footer Memoized';

export default FooterMemo;
