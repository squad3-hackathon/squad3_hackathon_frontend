import {
  Box,
  Grid,
  Text,
  Modal,
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
  Flex,
} from "@chakra-ui/react";
import React from "react";
import Data from "../Data";
import styles from "./CardsButton.module.css";

const CardsModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <section>
        <Grid
          ml="2rem"
          mr="2rem"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
          gap={8}
        >
          {Data.map((item, index) => (
            <GridItem key={index} colSpan={1} borderRadius="4px">
              <Button
                onClick={() => onOpen(index)}
                p={0}
                className={styles.cardButton}
              >
                <Flex className={styles.cardButton}>
                  <Image
                    src={` ${"/src/assets/"}` + item.ImgCard + `${".png"}`}
                    w="100%"
                    h="90%"
                    alt=" Imagem card"
                  />

                  <Box w="150px" h="10" display="flex" alignItems="center">
                    <Image
                      src={` ${"/src/assets/"}` + item.UserImg + `${".svg"}`}
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

        {Data.map((element, index) => (
          <Modal key={index} isOpen={isOpen} onClose={isOpen}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <Flex justifyContent="center" width="100%">
                  <Box>
                    <Image
                      src={` ${"/src/assets/"}` + element.UserImg + `${".svg"}`}
                      w="24px"
                      h="24px"
                      borderRadius={100}
                      mr={2}
                      alt="Usuário Imagem"
                    />
                  </Box>
                  <Box> titulo</Box>
                  <Box>tags</Box>
                </Flex>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>tesste</ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        ))}
      </section>
    </>
  );
};

export default CardsModal;
