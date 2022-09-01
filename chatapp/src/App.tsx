import { ChakraProvider } from "@chakra-ui/react";
import ToggleTheme from "./components/ToggleTheme";
import Views from "./components/views";

function App() {
  return (
    <ChakraProvider>
      <ToggleTheme />
      <Views />
    </ChakraProvider>
  );
}

export default App;
