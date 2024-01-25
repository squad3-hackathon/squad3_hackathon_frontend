import React from 'react';
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
  Card
} from "@chakra-ui/react";
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
          <Input type='text' width= "637px" height={"50px"}/>
        </FormControl>
        <Wrap 
        position="absolute"
        top="165px"
        left="620px"
        align="center"
        >
            <WrapItem >
              <Avatar name='Camila Soares' src={FotoPerfil} boxSize={100}/>
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
      bordeRadius= "4px"
      bg= "rgba(0, 0, 0, 0.12)"
      height={"40px"}
      >
        <Link href="#" color="var(--action-disabled, rgba(0, 0, 0, 0.38))" mx={3} fontSize={17} fontFamily="Roboto">
          ADICIONAR PROJETO
        </Link>
      </Button>

      <Card
  position="absolute"
  top="400px"
  left="60px"
  width="389px"
  height="258px"
  borderRadius="4px"
  bg="#E6E9F2"
>
  <Flex
    direction="column"
    justify="center"
    align="center"
    height="100%"
    marginTop={"50px"}
  >
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
    <Flex
    >
      <Text
      color="#303133"
      fontFamily="Roboto"
      fontSize="14px"
      fontStyle="normal"
      fontWeight="400"
      lineHeight="16px"
      letterSpacing="0.5px"
      opacity="0.5"
      textAlign="right" // Use textAlign em vez de align
      marginTop="22px"
      >
      Compartilhe seu talento com milhares de pessoas
      </Text>
    </Flex>  
  </Flex>
</Card>

      
      
    </ChakraProvider>
  );
};

export default MeuPortifolio;