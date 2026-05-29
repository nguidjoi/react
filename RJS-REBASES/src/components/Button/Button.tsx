/* Global Imports */
import React,  { type FC, type Ref,  type RefObject } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';

/* Local Imports */
import { ButtonWrapper } from './Button.styled';
import { UIActionnable, UILevel, UISize } from '@/core/types/ui.types';
import { Disabled } from './Button.stories';


interface ButtonProps extends Partial<UISize>, UILevel, UIActionnable {
   disabled?: boolean
   children: string;
   ref?: RefObject<HTMLButtonElement>
}


const Button: FC<ButtonProps> = (props) => {

   const { disabled, children, action, level = 'primary', ref, size } = props;

   return (
      <ButtonWrapper
         data-testid="Button"
         disabled={disabled}
         level={level}
         ref={ref} size={size}
         onClick={action}>

      {/* <ButtonWrapper 
      data-testid="Button"  
      {...props} 
      onClick={action}>
      */}
      {props.children} 
      </ButtonWrapper>
   );

}

/**
 * USAGE: Button description to complete.
 * @example
 * <Button /> 
 */
const ButtonMemo = React.memo(Button, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   console.log(prevProps, nextProps)
   return false;
});
ButtonMemo.displayName = 'Button Memoized';

export default ButtonMemo;
