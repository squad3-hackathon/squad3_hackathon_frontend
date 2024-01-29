import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Wrap,
  WrapItem,
  Avatar,
  Text,
  Button,
  Link,
  Card,
  Flex,
  Image,
  useToast,
} from "@chakra-ui/react";
import UploadProject from "../../assets/upload_project.svg";
import FotoPerfil from "../../assets/foto_perfil.png";
import HomeModal from "./HomeModal";

const HomeBody = () => {
    const [isAddProjectModalOpen, setAddProjectModalOpen] = useState(false);
  const [isUploadProjectModalOpen, setUploadProjectModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null); // Estado para armazenar o arquivo selecionado
  const toast = useToast(); // Configurar toast para exibir mensagens

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

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSaveProject = () => {
    // Lógica para salvar o projeto com o arquivo selecionado
    // Aqui você pode enviar o arquivo para o seu servidor, por exemplo

    // Exibir mensagem de sucesso
    toast({
      title: "Projeto Adicionado com Sucesso!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    // Fechar o modal e limpar o estado do arquivo selecionado
    closeAddProjectModal();
    setSelectedFile(null);
  };

    return (
    <>
     <FormControl
          position="absolute"
          top="300px"
          left="60px"
          color="#0B0C0D"
          fontSize="20px"
          fontFamily="Roboto"
          opacity="0.6"
        >
          {/* Corpo */}
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
      <HomeModal />
      
    </>
  );
};

export default HomeBody;
