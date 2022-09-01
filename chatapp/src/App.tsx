import { ChakraProvider } from "@chakra-ui/react";
import ToggleTheme from "./components/ToggleTheme";

function App() {
  return (
    <ChakraProvider>
      <ToggleTheme />
    </ChakraProvider>
  );
}

export default App;
