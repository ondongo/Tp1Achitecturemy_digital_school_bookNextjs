import { Button, Flex, Link } from "@chakra-ui/react";
import React from "react";

function NavBar() {
  return (
    <Flex gap={4} justifyContent={"flex-end"} p={10}>
      <Button
        colorScheme="green"
        aria-label="Search database"
        height={"50px"}
        rounded={"full"}
      >
        {" "}
        connexion{" "}
      </Button>

      <Button
        colorScheme="green"
        aria-label="Search database"
        height={"50px"}
        rounded={"full"}
      >
        {" "}
        Inscription{" "}
      </Button>
    </Flex>
  );
}

export default NavBar;
