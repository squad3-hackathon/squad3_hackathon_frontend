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
  const [imagemEnviada, setImagemEnviada] = useState(null);
  const [mostrarImagemNoCard, setMostrarImagemNoCard] = useState(false);
  const [tituloProjeto, setTituloProjeto] = useState('');
  const [tagsProjeto, setTagsProjeto] = useState('');
  const [linkProjeto, setLinkProjeto] = useState('');
  const [descricaoProjeto, setDescricaoProjeto] = useState('');
  const [inputsInvalidos, setInputsInvalidos] = useState({
    tituloProjeto: false,
    tagsProjeto: false,
    linkProjeto: false,
    descricaoProjeto: false,
  });

  const toast = useToast();

  const openAddProjectModal = () => {
    setAddProjectModalOpen(true);
  };

  const closeAddProjectModal = () => {
    setAddProjectModalOpen(false);
    setUploadProjectModalOpen(false);
  };

  const openUploadProjectModal = () => {
    setUploadProjectModalOpen(true);
  };

  const closeUploadProjectModal = () => {
    setUploadProjectModalOpen(false);
  };

  const handleAddNewImage = () => {
    setImagemEnviada(null);

  };

  

  const handleFileChange = (e) => {
    const file = e.target.files[0];
  
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target.result;
        setImagemEnviada(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProject = () => {
    if (!tituloProjeto || !tagsProjeto || !linkProjeto || !descricaoProjeto) {
      toast({
        title: "Preencha todos os campos antes de salvar",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    if (!imagemEnviada) {
      toast({
        title: "Adicione uma imagem antes de salvar",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
    const invalidos = {};

    if (!tituloProjeto.trim()) {
      invalidos.tituloProjeto = true;
    }

    if (!tagsProjeto.trim()) {
      invalidos.tagsProjeto = true;
    }

    if (!linkProjeto.trim()) {
      invalidos.linkProjeto = true;
    }

    if (!descricaoProjeto.trim()) {
      invalidos.descricaoProjeto = true;
    }

    setInputsInvalidos(invalidos);
    
      
      return;
    }

  
    toast({
      title: "Projeto Adicionado com Sucesso!",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
    });

    closeAddProjectModal();
    setMostrarImagemNoCard(true);
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
          {/* corpinho */}
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
          {mostrarImagemNoCard && imagemEnviada ? (
                  <>
                    <Image 
                    src={imagemEnviada}
                    position="absolute"
                    top="400px"
                    left="60px"
                    width="389px"
                    height="258px"
                    borderRadius="4px"
                    />
                  </>
                ) : (
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
                    <Image src={UploadProject} alt="UploadProject" />
                    <Text
                      color="#303133"
                      fontFamily="Roboto"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="400"
                      lineHeight="16px"
                      letterSpacing="0.5px"
                      opacity="0.5"
                      mt={2}
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
              )}      
      </Link>
      <HomeModal
        isAddProjectModalOpen={isAddProjectModalOpen}
        closeAddProjectModal={closeAddProjectModal}
        isUploadProjectModalOpen={isUploadProjectModalOpen}
        closeUploadProjectModal={closeUploadProjectModal}
        handleFileChange={handleFileChange}
        handleSaveProject={handleSaveProject}
        imagemEnviada={imagemEnviada}
        mostrarImagemNoCard={mostrarImagemNoCard}
        setMostrarImagemNoCard={setMostrarImagemNoCard}
        tituloProjeto={tituloProjeto}
        setTituloProjeto={setTituloProjeto}
        tagsProjeto={tagsProjeto}
        setTagsProjeto={setTagsProjeto}
        linkProjeto={linkProjeto}
        setLinkProjeto={setLinkProjeto}
        descricaoProjeto={descricaoProjeto}
        setDescricaoProjeto={setDescricaoProjeto}
        inputsInvalidos={inputsInvalidos}

      />
      
    </>
  );
};

export default HomeBody;
