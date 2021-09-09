import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root{
    --white: #FFFFFF;
    --beige: #F3F7FA;
    --blue: #2196F3;
    --black: #4A4A4A;
    --gray: #A0B0B9;

    --size-small: 1.2rem;
    --size-medium: 1.4rem;
    --size-large: 2rem;
    --size-extra: 2.4rem;
    
    --shadow-small: 0px 2px 8px rgba(0, 0, 0, 0.1);

    --background: var(--beige);
  }

  html,
  body,
  #root {
    height: 100%;
  }

  html{
    font-size: 10px;
  }

  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open Sans;
  }
  li{
     list-style: none;
  }
  #root{
    background: var(--background);
  }
`;
