"use client";
import { useBookById } from "@/hooks/books/useBookById";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Text,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import React from "react";

function Page({ params }: { params: { id: string } }) {
  const bookId = params.id;

  const { book } = useBookById(bookId);

  if (book == null) {
    <Flex h={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <Spinner />
    </Flex>;
  }
  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      <Card maxW="lg">
        <CardBody>
          <Image
            src={book?.image ?? ""}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{book?.name}</Heading>
            <Text>{book?.description}</Text>
            <Text color="blue.600" fontSize="2xl">
              {book?.auhtor}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="orange">
              Reservé à une date
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Emprunté
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Flex>
  );
}

export default Page;
