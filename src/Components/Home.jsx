import React, { useState } from "react";
import {
  ChakraProvider,
  Flex,
  Box,
  Image,
  Link,
  Wrap,
  WrapItem,
  Avatar,
  Input,
  FormControl,
  FormLabel,
  Text,
  Button,
  Card,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";
import LogoOrange from "../assets/logo_orange.png";
import FotoPerfil from "../assets/foto_perfil.png";
import Bellcon from "../assets/img_bellcon.svg";
import UploadProject from '../assets/upload_project.svg';

const Home = () => {
  const [isAddProjectModalOpen, setAddProjectModalOpen] = useState(false);
  const [isUploadProjectModalOpen, setUploadProjectModalOpen] = useState(false);

  const openAddProjectModal = () => {
    setAddProjectModalOpen(true);
  };

  const closeAddProjectModal = () => {
    setAddProjectModalOpen(false);
  };

  const openUploadProjectModal = () => {
    setUploadProjectModalOpen(true);
  };

  const closeUploadProjectModal = () => {
    setUploadProjectModalOpen(false);
  };

  return (
    <ChakraProvider>
      <Flex p={4} bg="#113" color="white">
        <Flex ml={30} align="center">
          <Box mr={100}>
            <Image src={LogoOrange} alt="Logo" />
          </Box>
          <Flex align="center">
            <Link href="#" color="#FCFDFF" mx={3} fontSize={20} fontFamily="Roboto">
              Meus projetos
            </Link>
            <Link href="#" color="white" mx={3} fontSize={20} fontFamily="Roboto">
              Descobrir
            </Link>
          </Flex>
          <Wrap ml={880} spacing="20px" justify="flex-end" align="center">
            <WrapItem>
              <Avatar name='Camila Soares' src={FotoPerfil} />
            </WrapItem>
          </Wrap>
        </Flex>
        <Image ml={7} src={Bellcon} alt="Bellcon" />
        <FormControl
          position="absolute"
          top="300px"
          left="60px"
          color="#0B0C0D"
          fontSize="20px"
          fontFamily="Roboto"
          opacity="0.6"
        >
          <FormLabel>Meus projetos</FormLabel>
          <Input type='text' width="637px" height={"50px"} placeholder="Buscar tags" fontSize="16px" />
        </FormControl>
        <Wrap
          position="absolute"
          top="165px"
          left="620px"
          align="center"
        >
          <WrapItem >
            <Avatar name='Camila Soares' src={FotoPerfil} boxSize={100} />
          </WrapItem>
        </Wrap>
      </Flex>

      <Text
        position="absolute"
        top="160px"
        left="760px"
        fontFamily="Roboto"
        fontSize="24px"
      >
        Camila Soares
      </Text>

      <Text
        position="absolute"
        top="200px"
        left="762px"
        fontFamily="Roboto"
        fontSize="16px"
        opacity={0.5}
      >
        Brasil
      </Text>

      <Button
        position="absolute"
        top="245px"
        left="762px"
        borderRadius="4px"
        bg="rgba(0, 0, 0, 0.12)"
        height="40px"
        _hover={{ bg: "rgba(0, 0, 0, 0.2)" }}
        onClick={openAddProjectModal}
      >
        <Link
          href="#"
          color="rgba(0, 0, 0, 0.38)"
          mx={3}
          fontSize={17}
          fontFamily="Roboto"
          _hover={{ textDecoration: "none" }}
        >
          ADICIONAR PROJETO
        </Link>
      </Button>

      <Link>
        <Card
          position="absolute"
          top="400px"
          left="60px"
          width="389px"
          height="258px"
          borderRadius="4px"
          bg="#E6E9F2"
          cursor="pointer"
          onClick={openUploadProjectModal}
          _hover={{ bg: "#C2C4CC" }}
        >
          <Flex
            direction="column"
            justify="center"
            align="center"
            height="100%"
          >
            <Image src={UploadProject} alt="UploadProject" mb={5} />
            <Text
              color="#303133"
              fontFamily="Roboto"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="16px"
              letterSpacing="0.5px"
              opacity="0.5"
            >
              Adicione seu primeiro projeto
            </Text>
            <Flex>
              <Text
                color="#303133"
                fontFamily="Roboto"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="16px"
                letterSpacing="0.5px"
                opacity="0.5"
                textAlign="right"
                marginTop="22px"
              >
                Compartilhe seu talento com milhares de pessoas
              </Text>
            </Flex>
          </Flex>
        </Card>
      </Link>





      {/* Modal para upload de arquivinhos no botão "Adicionar Arquivos" perto do perfil*/}
      <Modal 
      isOpen={isAddProjectModalOpen} 
      onClose={closeAddProjectModal}>
        <ModalOverlay />
        <ModalContent top={10} width="890px" height="510px" maxW="100%">
          <ModalHeader
          color="#515255"
          fontFamily= "Roboto"
          fontSize= "24px"
          fontStyle= "normal"
          fontWeight= "400"
          lineHeight= "24px"
          >Adicionar Projeto</ModalHeader>
          <ModalBody width="100%">
            <Text mt={-2}>
              Selecione o conteúdo que você deseja fazer upload
              <Card
              display={"flex"}
              bg="#E6E9F2"
              width= {"389px"}
              height= {"304px"}
              justifyContent= {"center"}
              alignItems= {"center"}
              padding={"91px 59px 91px 60px"}
              mt={3}
              >
                <Image src={UploadProject} alt="UploadProject" />
                <Text 
                mt={2}
                color="#303133"
                fontFamily= "Roboto"
                fontSize= "14px"
                fontStyle= "normal"
                opacity={"0.6"}
                >Compartilhe seu talento com milhares de pessoas</Text>
              </Card>
              </Text>
              <Text mt={5}>Visualizar publicação</Text>
              <Flex justify="space-between" display={"flex"} mt={4}>
                <Button 
                  colorScheme="teal" 
                  onClick={closeAddProjectModal}
                  bg="#F52"
                  borderRadius="4px"
                  padding="8px 27px"
                  boxShadow="0px 3px 1px -2px rgba(0, 0, 0, 0.20), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)"
                  fontSize={"15px"}                
                  fontFamily="Roboto"
                  fontStyle={"normal"}
                  lineHeight={"20px"}
                  _hover={{ bg: "#CC4400" }}
                >
                  SALVAR
                </Button>

                <Button  
                  onClick={closeAddProjectModal}
                  color="rgba(0, 0, 0, 0.38)"
                  background="rgba(0, 0, 0, 0.12)"
                  borderRadius="4px"
                  padding="8px 22px"
                  boxShadow="0px 3px 1px -2px rgba(0, 0, 0, 0.20), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)"
                  right={590}
                  fontSize={"15px"}
                  fontFamily="Roboto"
                  fontStyle={"normal"}
                  lineHeight={"20px"}
                  _hover={{ bg: "#C2C4CC" }}
                >
                  CANCELAR
                </Button>
              </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* Modal para upload de arquivinhos no Card*/}  
      <Modal 
      isOpen={isUploadProjectModalOpen} 
      onClose={closeUploadProjectModal}>
        <ModalOverlay />
        <ModalContent top={10} width="890px" height="510px" maxW="100%">
          <ModalHeader
          color="#515255"
          fontFamily= "Roboto"
          fontSize= "24px"
          fontStyle= "normal"
          fontWeight= "400"
          lineHeight= "24px"
          >Adicionar Projeto</ModalHeader>
          <ModalBody width="100%">
            <Text mt={-2}>
              Selecione o conteúdo que você deseja fazer upload
              <Card
              display={"flex"}
              bg="#E6E9F2"
              width= {"389px"}
              height= {"304px"}
              justifyContent= {"center"}
              alignItems= {"center"}
              padding={"91px 59px 91px 60px"}
              mt={3}
              >
                <Image src={UploadProject} alt="UploadProject" />
                <Text 
                mt={2}
                color="#303133"
                fontFamily= "Roboto"
                fontSize= "14px"
                fontStyle= "normal"
                opacity={"0.6"}
                >Compartilhe seu talento com milhares de pessoas</Text>
              </Card>
              </Text>
              <Text mt={5}>Visualizar publicação</Text>
              <Flex justify="space-between" display={"flex"} mt={4}>
                <Button 
                  colorScheme="teal" 
                  onClick={closeUploadProjectModal}
                  bg="#F52"
                  borderRadius="4px"
                  padding="8px 27px"
                  boxShadow="0px 3px 1px -2px rgba(0, 0, 0, 0.20), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)"
                  fontSize={"15px"}                
                  fontFamily="Roboto"
                  fontStyle={"normal"}
                  lineHeight={"20px"}
                  _hover={{ bg: "#CC4400" }}
                >
                  SALVAR
                </Button>

                <Button  
                  onClick={closeUploadProjectModal}
                  color="rgba(0, 0, 0, 0.38)"
                  background="rgba(0, 0, 0, 0.12)"
                  borderRadius="4px"
                  padding="8px 22px"
                  boxShadow="0px 3px 1px -2px rgba(0, 0, 0, 0.20), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)"
                  right={590}
                  fontSize={"15px"}
                  fontFamily="Roboto"
                  fontStyle={"normal"}
                  lineHeight={"20px"}
                  _hover={{ bg: "#C2C4CC" }}
                >
                  CANCELAR
                </Button>
              </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};






export default Home;
