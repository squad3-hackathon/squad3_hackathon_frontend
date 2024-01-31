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
import UserData from "./UserData";
import EditProject from "./EditProject";


const HomeBody = () => {
  const [isAddProjectModalOpen, setAddProjectModalOpen] = useState(false);
  const [isUploadProjectModalOpen, setUploadProjectModalOpen] = useState(false);
  
  {/* const para upload de arquivinhos no card*/}
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
  

  {/* const para o Adicionar Projeto*/}
  const [isAddOutroProjectModalOpen, setAddOutroProjectModalOpen] = useState(false);
  {/* const para upload de arquivinhos no card*/}
  const [outroImagemEnviada, setOutroImagemEnviada] = useState(null);
  const [mostrarOutroImagemNoCard, setOutroMostrarImagemNoCard] = useState(false);
  const [outroTituloProjeto, setOutroTituloProjeto] = useState('');
  const [outroTagsProjeto, setOutroTagsProjeto] = useState('');
  const [outroLinkProjeto, setOutroLinkProjeto] = useState('');
  const [outroDescricaoProjeto, setOutroDescricaoProjeto] = useState('');
  const [OutroInputsInvalidos, setOutroInputsInvalidos] = useState({
    outroTituloProjeto: false,
    outroTagsProjeto: false,
    outroLinkProjeto: false,
    outroDescricaoProjeto: false,
  });

  const outroToast = useToast();

  const openAddOutroProjectModal = () => {
    setAddOutroProjectModalOpen(true);
  };

  const closeAddOutroProjectModal = () => {
    setAddOutroProjectModalOpen(false);
  };

  const handleFileOutroChange = (e) => {
    const file = e.target.files[0];
  
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target.result;
        setOutroImagemEnviada(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveOutroProject = () => {
    if (!outroTituloProjeto || !outroTagsProjeto || !outroLinkProjeto || !outroDescricaoProjeto) {
      outroToast({
        title: "Preencha todos os campos antes de salvar",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });

      if (!outroImagemEnviada) {
        outroToast({
          title: "Adicione uma imagem antes de salvar",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
  
      const invalidos = {};
      const novoProjeto = {
        imagem: outroImagemEnviada,
      };
  
      setProjetosSalvos([...projetosSalvos, novoProjeto]);
  
      if (!outroTituloProjeto.trim()) {
        invalidos.outroTituloProjeto = true;
      }
  
      if (!outroTagsProjeto.trim()) {
        invalidos.outroTagsProjeto = true;
      }
  
      if (!outroLinkProjeto.trim()) {
        invalidos.outroLinkProjeto = true;
      }
  
      if (!outroDescricaoProjeto.trim()) {
        invalidos.outroDescricaoProjeto = true;
      }
  
      setOutroInputsInvalidos(invalidos);
  
      return;
    }
  
    outroToast({
      title: "Projeto Adicionado com Sucesso!",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  
    closeAddOutroProjectModal();
    setOutroMostrarImagemNoCard(true);
  };
  



    return (
    <>
    {/* corpinho */}
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
        onClick={openAddOutroProjectModal}
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
            <EditProject imagemEnviada={imagemEnviada} />

            <Wrap position="absolute" top="670px" left="60px">
              <WrapItem>
                <Avatar name='Camila Soares' src={FotoPerfil} boxSize={8} />
              </WrapItem>
            </Wrap>
            <Text>
              <UserData />
            </Text>
          </>
        ) : (
          <>
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
          </>
        )}
        </Link>
        {mostrarOutroImagemNoCard && outroImagemEnviada ? (
        <>

          <Avatar name='Camila Soares' src={FotoPerfil} boxSize={8} top="220px" left="510px"/>
          <Wrap position="absolute" top="2px" left="450px">
            <WrapItem>
              <EditProject imagemEnviada={outroImagemEnviada} />
              
              <Text>
                <UserData />
              </Text>
            </WrapItem>
          </Wrap>
        </>
      ) : (
        <Card></Card>
      )}
    
      <HomeModal
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
        
        isAddOutroProjectModalOpen={isAddOutroProjectModalOpen}
        closeAddOutroProjectModal={closeAddOutroProjectModal}
        handleFileOutroChange={handleFileOutroChange}
        handleSaveOutroProject={handleSaveOutroProject}
        outroImagemEnviada={outroImagemEnviada}
        mostrarOutroImagemNoCard={mostrarOutroImagemNoCard}
        setOutroMostrarImagemNoCard={setOutroMostrarImagemNoCard}
        outroTituloProjeto={outroTituloProjeto}
        setOutroTituloProjeto={setOutroTituloProjeto}
        outroTagsProjeto={outroTagsProjeto}
        setOutroTagsProjeto={setOutroTagsProjeto}
        outroLinkProjeto={outroLinkProjeto}
        setOutroLinkProjeto={setOutroLinkProjeto}
        outroDescricaoProjeto={outroDescricaoProjeto}
        setOutroDescricaoProjeto={setOutroDescricaoProjeto}
        OutroInputsInvalidos={OutroInputsInvalidos}

        


      />
      
    </>
  );
};

export default HomeBody;
