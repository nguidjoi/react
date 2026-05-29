import styled from '@emotion/styled';

export const FooterWrapper = styled.footer`

    display: block;
    box-sizing: border-box;
    background-color: #080808;
    color: white;

    padding: 10px;

    height: 10vh;

    position: fixed;
    top: 90vh;

    &:hover{
      filter:invert() ;
    }

    @media (max-width: 420px) {
       display: none;
    }

`;
