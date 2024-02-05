import React, { useState, useEffect } from 'react';
import {
  Box,
  Input,
  Grid,
  GridItem,
  Flex,
  Image,
  Text,
  Spinner,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Hide,
  Show,
  Link,
  
} from "@chakra-ui/react";
import FotoPerfil from "../assets/foto_perfil.png";
import styles from "./CardsModal.module.css";
import { useAuthToken } from '../Hooks/AuthTokenContext';

const BuscarProjetos = () => {
  const [tag, setTag] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(true);
  const [loading, setLoading] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [noOfProjects, setNoOfProjects] = useState(4);
  const slice = responseData ? responseData.slice(0, noOfProjects) : [];
  const { authToken } = useAuthToken();
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const formattedDate = `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}`;
    return formattedDate;
  };

  //botaozin de ver mais
  const openModal = (data) => {
    setActiveProject(data);
    onOpen();
  };

  const loadMore = () => {
    setNoOfProjects(noOfProjects + noOfProjects);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  

  useEffect(() => {
    //puxar todos os projetos pela tag digitada
    const fetchProjects = async () => {
      try {
        setLoading(true);

        const serverUrl = 'http://portifolio-deploy.onrender.com';
        const token = `Bearer ${authToken}`; // aqui vai seu token (não excluir o Bearer)

        const response = await fetch(
          `${serverUrl}/project/tag?tags=${encodeURIComponent(tag)}&allUsers=false`,
          {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();
        setResponseData(data);
        setShowAllProjects(false);
      } catch (error) {
        console.error('Erro na solicitação:', error);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(() => {
      if (tag) {
        fetchProjects();
      } else {
        fetchAllProjects(); // buscar todos os projetinhos
      }
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [tag, authToken]);

  //puxar todos os projetos do usuário sem limite de tag
  const fetchAllProjects = async () => {
    try {
      setLoading(true);

      const serverUrl = 'https://portifolio-deploy.onrender.com';
      const token = `Bearer ${authToken}`;; // aqui vai seu token (não excluir o Bearer)

      const response = await fetch(
        `${serverUrl}/project/projects/user`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );
      

      const data = await response.json();
      setResponseData(data);
      setShowAllProjects(true);
    } catch (error) {
      console.error('Erro na solicitação:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box
        w={{ base: "85vw", md: "50%" }}
        m={{ base: "-3rem 0 2.5rem 2rem", md: "7rem 0 2.5rem 2rem" }}
      >
        <label htmlFor="tagInput"></label>
        <Input
          type="text"
          id="tagInput"
          placeholder="Buscar tags"
          value={tag}
          onChange={(event) => setTag(event.target.value)}
          cursor="pointer"
          size="lg"
          _hover={{ borderColor: "#515255" }}
          _focus={{ borderColor: "#2348B1" }}
          required
        />
      </Box>

      {loading && (
        <Flex
          align="center"
          justify="center"
          direction="column"
          height="100vh"
        >
          <Spinner size="xl" thickness="4px" color="blue.500" />
        </Flex>
      )}

      {responseData && (
        <section>
        <Grid
          ml="2rem"
          mr="2rem"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
          gap={8}
        >
          {slice.map((project) => (
            <GridItem key={project.id} colSpan={1} borderRadius="4px">
              <Button
                onClick={() => openModal(project)}
                p={0}
                className={styles.cardButton}
              >
                <Flex className={styles.cardButton}>
                  <Image
                    src={`data:image/jpeg;base64,${project.imageBase64}`}
                    width={"389px"}
                    height={"250px"}
                  />
                  <Box w="150px" h="10" display="flex" alignItems="center">
                    <Image
                      src={FotoPerfil}
                      w="24px"
                      h="24px"
                      borderRadius={100}
                      mr={2}
                      alt="Usuário Imagem"
                    />
                  <Text color="#515255">{`${project.name || ''} • ${project.creationDate ||''}`}
                 </Text>
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
                      src={FotoPerfil}
                      w="40px"
                      h="40px"
                      borderRadius={100}
                      mr={2}
                      alt="Usuário Imagem"
                    />
  
                    <Box>
                      <Text fontSize="16px" color="#303133">
                        {activeProject?.name ||''}
                      </Text>
                      <Text fontSize="16px" color="#515255">
                        {activeProject?.creationDate ||''}
                      </Text>
                    </Box>
                  </Flex>
                </Hide>
                <Text fontSize="24px">{activeProject?.title ||''}</Text>
                <Hide below="md">
                  <Flex>
                    <Text
                      bg="#00000014"
                      borderRadius="100px"
                      fontSize="13px"
                      p="4px"
                      mr=".5rem"
                    >
                      {activeProject?.tagNames ||'' }
                    </Text>
                  </Flex>
                </Hide>
              </Flex>
            </ModalHeader>
            <ModalCloseButton borderRadius="100px" />
            <ModalBody>
              <Image w="100%" src={`data:image/jpeg;base64,${activeProject?.imageBase64}`} />
              <Show below="md">
                <Box
                  w="100%"
                  h="10"
                  display="flex"
                  alignItems="center"
                  mt=".5rem"
                >
                  <Image
                    src={FotoPerfil}
                    w="24px"
                    h="24px"
                    borderRadius={100}
                    mr={2}
                    alt="Usuário Imagem"
                  />
                  <Text
                    color="#515255"
                    mr="37%"
                  >{`${activeProject?.name ||''} • ${activeProject?.creationDate ||''}`}</Text>
                  <Text
                    bg="#00000014"
                    borderRadius="100px"
                    fontSize="13px"
                    p="4px"
                    mr=".5rem"
                  >
                    {activeProject?.tagNames ||''}
                  </Text>
                </Box>
              </Show>
            </ModalBody>
            <ModalFooter>
            <Text>{activeProject?.description ||''}</Text>
            <Flex flexDirection="column" mt="2rem">
              <Text fontWeight="500">Download</Text>
              <Link color="#608AE1">{activeProject?.link ||''}</Link>
            </Flex>
  
            </ModalFooter>
          </ModalContent>
        </Modal>      
  
  
      <Button
      onClick={() =>  loadMore()
      }
      borderRadius="4px"
      bg="rgba(0, 0, 0, 0.12)"
      height="40px"
      _hover={{ bg: "rgba(0, 0, 0, 0.2)" }}
      style={{ display: slice.length < responseData.length ? 'block' : 'none' }}
      ml={"45rem"}
      mt={"3rem"}
      mb={"2rem"}
      >
        <Text
        color="rgba(0, 0, 0, 0.38)"
        mx={3}
        fontSize={17}
        fontFamily="Roboto"
        >VER MAIS</Text>
        </Button>
      </section>
      )}
    </>
  );
};

export default BuscarProjetos;