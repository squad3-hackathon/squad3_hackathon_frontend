import {
  Box,
  Link,
  Grid,
  Text,
  Modal,
  Flex,
  Hide,
  Show,
  Image,
  Button,
  GridItem,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalCloseButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Data from "../Data";
import styles from "./CardsModal.module.css";

const CardsModal = () => {
  /*Open and Close Modal */
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeItem, setActiveItem] = useState(null);

  const openModal = (item) => {
    setActiveItem(item);
    onOpen();
  };

  return (
    <section>
      <Grid
        ml="2rem"
        mr="2rem"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        gap={8}
      >
        {Data.map((item, index) => (
          <GridItem key={index} colSpan={1} borderRadius="4px">
            <Button
              onClick={() => openModal(item)}
              p={0}
              className={styles.cardButton}
            >
              <Flex className={styles.cardButton}>
                <Image
                  src={`/src/assets/${item.ImgCard}.png`}
                  w="100%"
                  h="90%"
                  alt="Imagem card"
                />

                <Box w="150px" h="10" display="flex" alignItems="center">
                  <Image
                    src={`/src/assets/${item.UserImg}.svg`}
                    w="24px"
                    h="24px"
                    borderRadius={100}
                    mr={2}
                    alt="Usuário Imagem"
                  />
                  <Text color="#515255">{`${item.UserName} • ${item.Date}`}</Text>
                </Box>
              </Flex>
            </Button>
          </GridItem>
        ))}
      </Grid>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          maxW="1042px"
          p={{ base: "4rem 1rem", md: "3rem 6.5rem" }}
        >
          <ModalHeader p="35px">
            <Flex
              justifyContent={{ base: "center", md: "space-between" }}
              alignItems="center"
            >
              <Hide below="md">
                <Flex>
                  <Image
                    src={`/src/assets/${activeItem?.UserImg}.svg`}
                    w="40px"
                    h="40px"
                    borderRadius={100}
                    mr={2}
                    alt="Usuário Imagem"
                  />

                  <Box>
                    <Text fontSize="16px" color="#303133">
                      {activeItem?.UserName}
                    </Text>
                    <Text fontSize="16px" color="#515255">
                      {activeItem?.Date}
                    </Text>
                  </Box>
                </Flex>
              </Hide>
              <Text fontSize="24px">{activeItem?.TituloProjeto}</Text>
              <Hide below="md">
                <Flex>
                  <Text
                    bg="#00000014"
                    borderRadius="100px"
                    fontSize="13px"
                    p="4px"
                    mr=".5rem"
                  >
                    {activeItem?.Tag1}
                  </Text>
                  <Text
                    bg="#00000014"
                    borderRadius="100px"
                    fontSize="13px"
                    p="4px"
                  >
                    {activeItem?.Tag2}
                  </Text>
                </Flex>
              </Hide>
            </Flex>
          </ModalHeader>
          <ModalCloseButton borderRadius="100px" />
          <ModalBody>
            <Image w="100%" src={`/src/assets/${activeItem?.ImgCard}.png`} />
            <Show below="md">
              <Box
                w="100%"
                h="10"
                display="flex"
                alignItems="center"
                mt=".5rem"
              >
                <Image
                  src={`/src/assets/${activeItem?.UserImg}.svg`}
                  w="24px"
                  h="24px"
                  borderRadius={100}
                  mr={2}
                  alt="Usuário Imagem"
                />
                <Text
                  color="#515255"
                  mr="37%"
                >{`${activeItem?.UserName} • ${activeItem?.Date}`}</Text>
                <Text
                  bg="#00000014"
                  borderRadius="100px"
                  fontSize="13px"
                  p="4px"
                  mr=".5rem"
                >
                  {activeItem?.Tag1}
                </Text>
                <Text
                  bg="#00000014"
                  borderRadius="100px"
                  fontSize="13px"
                  p="4px"
                >
                  {activeItem?.Tag2}
                </Text>
              </Box>
            </Show>
          </ModalBody>
          <ModalFooter>
            <Flex
              flexDirection="column"
              w="100%"
              mt={{ base: ".25rem", md: "3rem" }}
            >
              <Text>{activeItem?.ImgCardDescription}</Text>
              <Flex flexDirection="column" mt="2rem">
                <Text fontWeight="500">Download</Text>
                <Link color="#608AE1">{activeItem?.ModalLink}</Link>
              </Flex>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </section>
  );
};

export default CardsModal;
