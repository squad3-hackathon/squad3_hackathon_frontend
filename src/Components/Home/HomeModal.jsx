import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, Text, Card, Image, Flex, Button, Input, Link, FormControl, FormLabel, Stack} from "@chakra-ui/react";  // Import Chakra UI components
import UploadProject from "../../assets/upload_project.svg";

const HomeModal = ({
  isAddProjectModalOpen,
  closeAddProjectModal,
  isUploadProjectModalOpen,
  closeUploadProjectModal,
  handleSaveProject,
  imagemEnviada,
  handleFileChange,
}) => {
  return (
    <>
    {/* modal para upload de arquivinhos no botão "Adicionar Arquivos" perto do perfil*/}
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
              
                <Input className="titulo" type='text' placeholder="Título"></Input>
                <Input className="tags" type='text' placeholder="Tags" mt={3}></Input>
                <Input className="link" type='text' placeholder="Link" mt={3}></Input>
                <Input className="descricao" type='text' placeholder="Descrição" mt={3} height={"157px"} ></Input>
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
