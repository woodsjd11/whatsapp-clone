import React from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function ToggleTheme() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="toggle theme"
      icon={
        colorMode === "light" ? <MoonIcon color="blue.800"/> : <SunIcon color="orange.200" />
      }
      onClick={toggleColorMode}
    />
  );
}
