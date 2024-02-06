import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, Text, Card, Image, Flex, Button, Input, Stack} from "@chakra-ui/react";  
import UploadProject from "../../assets/upload_project.svg";

const HomeModal = ({
  isAddProjectModalOpen,
  closeAddProjectModal,
  isUploadProjectModalOpen,
  closeUploadProjectModal,
  handleSaveProject,
  imagemEnviada,
  handleFileChange,
  tituloProjeto,
  setTituloProjeto,
  tagsProjeto,
  setTagsProjeto,
  linkProjeto,
  setLinkProjeto,
  descricaoProjeto,
  setDescricaoProjeto,
  inputsInvalidos,

  isAddOutroProjectModalOpen,
  closeAddOutroProjectModal,
  handleFileOutroChange,
  handleSaveOutroProject,
  outroImagemEnviada,
  outroTituloProjeto,
  setOutroTituloProjeto,
  outroTagsProjeto,
  setOutroTagsProjeto,
  outroLinkProjeto,
  setOutroLinkProjeto,
  outroDescricaoProjeto,
  setOutroDescricaoProjeto,
  OutroInputsInvalidos,
  


}) => {
  
  return (
    <>
    {/* modal para upload de arquivinhos no botão "Adicionar Arquivos" perto do perfil*/}
    <Modal 
      isOpen={isAddOutroProjectModalOpen} 
      onClose={closeAddOutroProjectModal}>
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
                <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
              {outroImagemEnviada ? (
                <Image
                  src={outroImagemEnviada}
                  alt="Preview da Imagem"
                  display={"flex"}
                  width={"389px"}
                  height={"304px"}
                  right={"15vh"}
                  mt={3}
                />
              ) : (
                <Card
                  display={"flex"}
                  bg="#E6E9F2"
                  width={"389px"}
                  height={"304px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  mt={3}
                >
                  <Input
                    type="file"
                    id="file-upload"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleFileOutroChange}
                  />
                  <Image src={UploadProject} alt="UploadProject" />
                  <Text
                    mt={2}
                    color="#303133"
                    fontFamily="Roboto"
                    fontSize="14px"
                    fontStyle="normal"
                    opacity={"0.6"}
                  >
                    Compartilhe seu talento com milhares de pessoas
                  </Text>
                </Card>
              )}
            </label>
              </Text>
              <Stack
              position="absolute"
              width="424px"
              height={"500px"}
              left={"430px"}
              top={"61px"}
              borderRadius={"4px"}
              >
              
                <Input className="titulo" type='text' placeholder="Título"
                _hover={{ borderColor: "#515255" }}
                _focus={{ borderColor: "#2348B1" }}
                _disabled={{ borderColor: "#0000003B", color: "#0000003B", opacity: "0.8" }}
                value={outroTituloProjeto} onChange={(e) => setOutroTituloProjeto(e.target.value)}
                isInvalid={OutroInputsInvalidos.outroTituloProjeto}
                required
                ></Input>
                <Input className="tags" type='text' placeholder="Tags" mt={3}
                _hover={{ borderColor: "#515255" }}
                _focus={{ borderColor: "#2348B1" }}
                _disabled={{ borderColor: "#0000003B", color: "#0000003B", opacity: "0.8" }}
                value={outroTagsProjeto} 
                onChange={(e) => {
                  setOutroTagsProjeto(e.target.value);
                }}
                isInvalid={OutroInputsInvalidos.outroTagsProjeto}
                required
                ></Input>



                <Input className="link" type='text' placeholder="Link" mt={3}
                _hover={{ borderColor: "#515255" }}
                _focus={{ borderColor: "#2348B1" }}
                _disabled={{ borderColor: "#0000003B", color: "#0000003B", opacity: "0.8" }}
                value={outroLinkProjeto} onChange={(e) => setOutroLinkProjeto(e.target.value)}
                isInvalid={OutroInputsInvalidos.outroLinkProjeto}
                required
                ></Input>
                <Input 
                className="descricao" 
                type='text' 
                placeholder="Descrição" 
                mt={3} 
                height={"157px"}
                _hover={{ borderColor: "#515255" }}
                _focus={{ borderColor: "#2348B1" }}
                _disabled={{ borderColor: "#0000003B", color: "#0000003B", opacity: "0.8" }}
                value={outroDescricaoProjeto} onChange={(e) => setOutroDescricaoProjeto(e.target.value)}
                isInvalid={OutroInputsInvalidos.outroDescricaoProjeto}
                required
                ></Input>
              </Stack>
              

              <Text mt={5}>Visualizar publicação</Text>
              <Flex justify="space-between" display={"flex"} mt={4}>
                <Button 
                  colorScheme="teal" 
                  onClick={handleSaveOutroProject}
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
                  onClick={closeAddOutroProjectModal}
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
                <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
              {imagemEnviada ? (
                <Image
                  src={imagemEnviada}
                  alt="Preview da Imagem"
                  display={"flex"}
                  width={"389px"}
                  height={"304px"}
                  right={"15vh"}
                  mt={3}
                />
              ) : (
                <Card
                  display={"flex"}
                  bg="#E6E9F2"
                  width={"389px"}
                  height={"304px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  mt={3}
                >
                  <Input
                    type="file"
                    id="file-upload"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <Image src={UploadProject} alt="UploadProject" />
                  <Text
                    mt={2}
                    color="#303133"
                    fontFamily="Roboto"
                    fontSize="14px"
                    fontStyle="normal"
                    opacity={"0.6"}
                  >
                    Compartilhe seu talento com milhares de pessoas
                  </Text>
                </Card>
              )}
            </label>
              </Text>
              <Stack
              position="absolute"
              width="424px"
              height={"500px"}
              left={"430px"}
              top={"61px"}
              borderRadius={"4px"}
              >
              
                <Input className="titulo" type='text' placeholder="Título"
                _hover={{ borderColor: "#515255" }}
                _focus={{ borderColor: "#2348B1" }}
                _disabled={{ borderColor: "#0000003B", color: "#0000003B", opacity: "0.8" }}
                value={tituloProjeto} onChange={(e) => setTituloProjeto(e.target.value)}
                isInvalid={inputsInvalidos.tituloProjeto}
                required
                ></Input>
                <Input className="tags" type='text' placeholder="Tags" mt={3}
                _hover={{ borderColor: "#515255" }}
                _focus={{ borderColor: "#2348B1" }}
                _disabled={{ borderColor: "#0000003B", color: "#0000003B", opacity: "0.8" }}
                value={tagsProjeto} 
                onChange={(e) => {
                  setTagsProjeto(e.target.value);
                }}
                isInvalid={inputsInvalidos.tagsProjeto}
                required
                ></Input>



                <Input className="link" type='text' placeholder="Link" mt={3}
                _hover={{ borderColor: "#515255" }}
                _focus={{ borderColor: "#2348B1" }}
                _disabled={{ borderColor: "#0000003B", color: "#0000003B", opacity: "0.8" }}
                value={linkProjeto} onChange={(e) => setLinkProjeto(e.target.value)}
                isInvalid={inputsInvalidos.linkProjeto}
                required
                ></Input>
                <Input 
                className="descricao" 
                type='text' 
                placeholder="Descrição" 
                mt={3} 
                height={"157px"}
                _hover={{ borderColor: "#515255" }}
                _focus={{ borderColor: "#2348B1" }}
                _disabled={{ borderColor: "#0000003B", color: "#0000003B", opacity: "0.8" }}
                value={descricaoProjeto} onChange={(e) => setDescricaoProjeto(e.target.value)}
                isInvalid={inputsInvalidos.descricaoProjeto}
                required
                ></Input>
              </Stack>
              

              <Text mt={5}>Visualizar publicação</Text>
              <Flex justify="space-between" display={"flex"} mt={4}>
                <Button 
                  colorScheme="teal" 
                  onClick={handleSaveProject}
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
    </>
  );
};

export default HomeModal;
