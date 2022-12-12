import { ThemeProvider } from "styled-components";
import { Nav } from "./components/Nav";
import { Main } from "./pages/Main";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Nav />
      <Main />
    </ThemeProvider>
  );
}
