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
import CardsModal from "../Foms/CardsModal";

const HomeDescobrir = () => {
  return (
    <>
      <ChakraProvider>
        <header>{/* colocar a biblioteca de heder */}</header>
        <nav>
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
        </nav>
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
              w={{ base: "19rem", md: "46rem" }}
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
            <Box
              w={{ base: "85vw", md: "50%" }}
              m={{ base: "-3rem 0 2.5rem 2rem", md: "7rem 0 2.5rem 2rem" }}
            >
              <Input
                id="Buscar"
                type="text"
                name="buscar tags"
                placeholder="Buscar Tags"
              />
            </Box>
            <Box
              display={{ base: "flex", md: "inline" }}
              alignItems="colum"
              justifyContent="center"
            >
              <CardsModal />
            </Box>
          </section>
        </article>
      </ChakraProvider>
    </>
  );
};

export default HomeDescobrir;
