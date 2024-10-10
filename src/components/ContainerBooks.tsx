import { useSearchContext } from "@/providers/searchProviders";
import {
  Flex,
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
  Image,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { SearchBox, RefinementList } from "react-instantsearch";

function ContainerBooks() {
  const { books, triggerSearch } = useSearchContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();
  return (
    <Flex justifyContent={"center"} w={"100%"} overflow={"hidden"}>
      <Flex
        maxW={["100%", null, "900px"]}
        minW={["100%", null, "900px"]}
        alignItems={"center"}
        direction={"column"}
        py={4}
      >
        <Flex
          h={"auto"}
          alignItems={"center"}
          background={"brand.white"}
          borderRadius={"md"}
          direction={["column", null, "row"]}
          color={"brand.midgray"}
          borderTop={"5px solid #BDE3F8"}
          justifyContent={"space-between"}
          p={6}
          w={"100%"}
          gap={"10px"}
        >
          <SearchBox placeholder="" className="searchbox" />
        </Flex>

        <Box overflowX="auto" w="100%">
          <Table variant="striped" colorScheme="blue" mb={4}>
            <Thead>
              <Tr>
                <Th>Image</Th>
                {/* <Th>Id</Th> */}
                <Th>Nom</Th>
                <Th>Statut</Th>
                <Th>Action </Th>
              </Tr>
            </Thead>
            <Tbody>
              {books &&
                books?.map((result: any, index: any) => (
                  <Tr key={index}>
                    <Td>
                      {" "}
                      <Image
                        objectFit="cover"
                        maxW={{ base: "100%", sm: "150px" }}
                        src={result.image ?? ""}
                        alt="Caffe Latte"
                      />
                    </Td>
                    {/*  <Td>{result.id ?? ""}</Td> */}
                    <Td>{result.name ?? ""}</Td>
                    <Td color={result.statut == "Disponible" ? "green" : "red"}>
                      {" "}
                      {result.statut ?? ""}
                    </Td>

                    <Td>
                      <Flex gap={"10px"}>
                        <Button
                          colorScheme="green"
                          aria-label="Search database"
                          height={"50px"}
                          rounded={"full"}
                          onClick={() => router.push(`/${result.id}`)}
                        >
                          Voir
                        </Button>

                        <Button
                          colorScheme="blue"
                          aria-label="Search database"
                          height={"50px"}
                          rounded={"full"}
                          onClick={onOpen}
                        >
                          Emprunté
                        </Button>
                      </Flex>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={"red"}>Attention</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Merci de vous connecté pour réaliser cette action
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose} rounded="full">
              Fermer
            </Button>
            <Button
              variant="ghost"
              colorScheme="blue"
              rounded="full"
              onClick={() => router.push("/auth/login")}
            >
              Se connecter{" "}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default ContainerBooks;
