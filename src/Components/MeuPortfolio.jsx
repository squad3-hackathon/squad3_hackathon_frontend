import React from 'react';
import { ChakraProvider, Flex, Box, Image, Link, Wrap, WrapItem, Avatar, Text } from "@chakra-ui/react";
import LogoOrange from "../assets/logo_orange.png";
import FotoPerfil from "../assets/foto_perfil.png";
import Bellcon from "../assets/img_bellcon.svg";

const MeuPortifolio = () => {
  return (
    <ChakraProvider>
      <Flex p={4} bg='#113' color='white'>
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
          <Wrap ml={900} spacing="20px" justify="flex-end" align="center">
            <WrapItem>
              <Avatar name='Luiza' src={FotoPerfil} />
            </WrapItem>
          </Wrap>
        </Flex>
        <Image ml={3} src={Bellcon} alt="Bellcon" />
        <Text
          position="absolute"
          top="290px"
          left="60px"
          color="#0B0C0D"
          fontSize="20px"
          fontFamily="Roboto"
          opacity="0.6"
        >
          Meus projetos
        </Text>
      </Flex>

      
    </ChakraProvider>
  );
};

export default MeuPortifolio;
