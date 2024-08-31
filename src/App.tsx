import { ThemeProvider } from "./theme/ThemeProvider";
import Main from "./screens/Main";

function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}

export default App;
