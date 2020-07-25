import React, {useState} from 'react';
import { ThemeProvider } from "styled-components";

import ThemeConfig from "./config";
import { Container, GlobalStyle } from "./styles";

import moon from './images/moon.svg';
import sun from './images/sun.svg';

function App() {
  const [theme, setTheme] = useState({
    colors: ThemeConfig.dark,
    name: 'Dark',
    image: moon,
  });

  const controllTheme = () => {
    if (theme.colors.background === '#333') {
      return setTheme({
        colors: ThemeConfig.light,
        name: "Light",
        image: sun,
      });
    }

    setTheme({
      colors: ThemeConfig.dark,
      name: "Dark",
      image: moon,
    });
  };

  return (
    <ThemeProvider theme={theme.colors}>
      <GlobalStyle />
      <Container className="App">
        <img src={theme.image} alt={`Tema ${theme.name}`} height="70" />
        <p>Bem vindo ao tema {theme.name}</p>
        <button onClick={() => controllTheme()}>Mudar</button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
