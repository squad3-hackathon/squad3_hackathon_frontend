import React from "react";
import {
  ChakraProvider,
  Flex,
  Box,
  Image,
  Link,
  Wrap,
  WrapItem,
  Avatar,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import LogoOrange from "../assets/logo_orange.png";
import FotoPerfil from "../assets/foto_perfil.png";
import Input from "../Foms/Input";
import Bellcon from "../assets/img_bellcon.svg";

const HomeDescobrir = () => {
  return (
    <>
      <ChakraProvider>
        <header>{/* colocar a biblioteca de heder */}</header>
        <navbar>
          <Flex p={4} bg="#113" color="white">
            <Flex ml={30} align="center">
              <Box mr={100}>
                <Image src={LogoOrange} alt="Logo" />
              </Box>
              <Flex align="center" width="20rem">
                <Link
                  href="#"
                  color="#FCFDFF"
                  fontSize={20}
                  fontFamily="Roboto"
                >
                  Meus projetos
                </Link>
                <Link
                  href="#"
                  color="white"
                  mx={3}
                  fontSize={20}
                  fontFamily="Roboto"
                >
                  Descobrir
                </Link>
              </Flex>
              <Wrap ml={880} spacing="20px" justify="flex-end" align="center">
                <WrapItem>
                  <Avatar name="Camila Soares" src={FotoPerfil} />
                </WrapItem>
              </Wrap>
            </Flex>
            <Image ml={7} src={Bellcon} alt="Bellcon" />
          </Flex>
        </navbar>
        <article>
          <Box
            position="relative"
            mt="8rem"
            alignItems="center"
            display="flex"
            w="90vw"
            h="120px"
            justifyContent="center"
          >
            <Text
              textAlign="center"
              m={{ base: "-36% 0% 0% 10%", md: "2% 12% 2% 24%" }}
              fontSize={{ base: "24px", md: "34px" }}
              lineHeight={{ base: "24px", md: "34px" }}
            >
              Junte-se à comunidade de inovação, inspiração e descobertas,
              transformando experiências em conexões inesquecíveis
            </Text>
          </Box>

          <section>
            {/* Fazer um map com os cards quando puxar da API */}
            <Box w={{ base: "85vw", md: "50%" }} m="7rem 0 2.5rem 2rem">
              <Input
                id="Buscar"
                legend="Buscar tags"
                type="text"
                name="buscar tags"
                placeholder="Buscar tags"
              />
            </Box>
            <Box
              display={{ base: "flex", md: "inline" }}
              alignItems="colum"
              justifyContent="center"
            >
              <Grid
                ml="2rem"
                mr="2rem"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
                gap={8}
              >
                <GridItem
                  colSpan={1}
                  w="325px"
                  h="290px"
                  bg="blue.500"
                  borderRadius="4px"
                />
                <GridItem
                  w="325px"
                  h="290px"
                  colSpan={1}
                  bg="papayawhip"
                  borderRadius="4px"
                />
                <GridItem
                  w="325px"
                  h="290px"
                  colSpan={1}
                  bg="papayawhip"
                  borderRadius="4px"
                />
                <GridItem
                  w="325px"
                  h="290px"
                  colSpan={1}
                  bg="blue.500"
                  borderRadius="4px"
                />
                <GridItem
                  w="325px"
                  h="290px"
                  colSpan={1}
                  bg="blue.500"
                  borderRadius="4px"
                />
              </Grid>
            </Box>
          </section>
        </article>
      </ChakraProvider>
    </>
  );
};

export default HomeDescobrir;
