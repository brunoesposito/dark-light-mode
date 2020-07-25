import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.background};
    overflow: hidden;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  img {
    animation: ${({ theme }) => `${theme.animation} 1.5s alternate infinite ease-in`};
  }
  p {
    font-size: 18px;
    color: ${({ theme }) => theme.text};
  }
  button {
    background-color: ${(props) =>
      props.theme.background === "#333" ? "#fff" : "#333"};
    color: ${({ theme }) => (theme.text === "#333" ? "#fff" : "#333")};
    border: 0;
    border-radius: 4px;
    padding: 5px 10px;
    outline: none;
    font-size: 15px;
  }

  @keyframes spin { 
    from { 
      transform: rotate(0deg); 
    } to { 
      transform: rotate(360deg); 
    }
  }
  @keyframes pulse { 
    from { 
      transform: scale(1);
    } to { 
      transform: scale(1.2);
    }
  }
`;