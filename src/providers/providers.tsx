"use client";

import { theme } from "../theme";
/* import { CacheProvider } from "@chakra-ui/next-js"; */
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { AuthProvider } from "./authProviders";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    /* <CacheProvider> */
    <ChakraProvider theme={theme}>
      <AuthProvider>{children}</AuthProvider>
    </ChakraProvider>
    /*  </CacheProvider> */
  );
}
