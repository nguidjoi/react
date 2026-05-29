import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`

    display: block;
    background-color: black;
    color: white;

    padding: 10px;

    height: 5vh;

    transition: filter 0.6s ease; 
    will-change:filter;

    &:hover{
      filter:invert(.85) ;
      /* background-color:white ;
      color:black ; */
    }
`;
