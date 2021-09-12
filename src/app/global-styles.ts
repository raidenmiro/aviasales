import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root{
    --white: hsl(0, 0%, 100%);
    --beige: hsl(206, 41%, 97%);
    --blue: hsl(207, 90%, 54%);
    --black: hsl(0, 0%, 29%);
    --gray: hsl(202, 15%, 68%);

    --size-small: 1.2rem;
    --size-medium: 1.4rem;
    --size-large: 2rem;
    --size-extra: 2.4rem;
    
    --shadow-small: 0px 2px 8px rgba(0, 0, 0, 0.1);
    --shadow-medium: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    
    --background: var(--beige);
  }

  #root {
    min-height: 100vh;
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
