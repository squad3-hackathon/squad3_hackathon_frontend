import React from "react";
import { Flex, Box, Image, Link, Wrap, WrapItem, Avatar, FormControl, FormLabel, Input } from "@chakra-ui/react";
import LogoOrange from "../../assets/logo_orange.png";
import Bellcon from "../../assets/img_bellcon.svg";
import FotoPerfil from "../../assets/foto_perfil.png";


const Navbar = () => {
  return (
    <>
      <Flex p={4} bg="#113" color="white">
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
      </Flex>
    </>
  );
};

export default Navbar;
