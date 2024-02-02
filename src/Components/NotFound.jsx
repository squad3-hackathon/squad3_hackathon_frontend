import React from "react";
import { Box, Text, Img } from "@chakra-ui/react";
import IconLaranja from "../assets/favicon.png";

const NotFound = () => {
  return (
    <section>
      <Box
        w="100vw"
        h="100vh"
        justifyContent="center"
        alignItems="center"
        display="inline-block"
        m="5rem 0 0 5rem"
      >
        <Box
          w="4.5rem"
          h="4rem"
          zIndex="1"
          position="relative"
          borderRadius="12px"
        >
          <Img src={IconLaranja} w="5rem" alt="Icone da laranja" />
        </Box>
        <Box
          w="4rem"
          h="4rem"
          bg="#fff"
          zIndex="1"
          position="relative"
          borderRadius="100%"
          mt="-1.8rem"
          ml="1rem"
        ></Box>
        <Text
          fontSize="3rem"
          m="-4.5rem 0 0 1.5rem"
          zIndex="2"
          position="relative"
          color="blue"
        >
          Erro: 404
        </Text>
        <Text
          fontSize="2rem"
          zIndex="2"
          m="-1rem 0 0 1.5rem"
          position="relative"
          color="#ff5522"
        >
          Página não encontrada.
        </Text>
      </Box>
    </section>
  );
};

export default NotFound;
