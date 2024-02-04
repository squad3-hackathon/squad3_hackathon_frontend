import React, { useState, useEffect } from "react";
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

import Navbar from "./Navbar";
import styles from "./CardsModal.module.css"; 
import AddProjetoUser from "./AddProjetoUser";

const BottomModalAddProject = () => {
    const [userProject, setUserProject] = useState([]);
    const [activeProject, setActiveProject] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const { isOpen: isModalOpen, onOpen, onClose } = useDisclosure();

    const handleButtonClick = () => {
        onOpen();
    };

    const handleModalClose = () => {
        onClose();
    };

    const openModal = (project) => {
        setActiveProject(project);
        setIsOpen(true);
    };

    return (
        <>
            <Button onClick={handleButtonClick}
            borderRadius="4px"
            bg="rgba(0, 0, 0, 0.12)"
            width="200px"
            _hover={{ bg: "rgba(0, 0, 0, 0.2)" }}
            color="rgba(0, 0, 0, 0.38)"
            fontFamily="Roboto"
            fontSize={17}
            left={"21.5rem"}
            top={"5.4rem"}
            
            >ADICIONAR PROJETO</Button>

            <Modal isOpen={isModalOpen} onClose={handleModalClose} bgSize="100px">
                <ModalOverlay />
                <ModalContent width="890px" height="510px" maxW="100%">
                    <ModalHeader
                        color="#515255"
                        fontFamily="Roboto"
                        fontSize="24px"
                        fontStyle="normal"
                        fontWeight="400"
                        lineHeight="24px"
                        ml={"0.4rem"}
                    >
                        Adicionar Projeto
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text ml={"0.4rem"}>
                            Selecione o conteúdo que você deseja fazer upload
                        </Text>
                        <AddProjetoUser />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default BottomModalAddProject;
