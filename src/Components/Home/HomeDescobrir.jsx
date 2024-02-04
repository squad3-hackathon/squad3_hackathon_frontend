import React from "react";
import { Box, Text, Input, ChakraProvider } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import Navbar from "../../Foms/Navbar";
import BuscarProjetos from "../../Foms/BuscarProjetos.jsx";

const HomeDescobrir = () => {
  return (
    <>
      <ChakraProvider>
        <header>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Orange - Descobrir</title>
            <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
        </header>
        <nav>
          <Navbar />
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
            <Box
              display={{ base: "flex", md: "inline" }}
              alignItems="colum"
              justifyContent="center"
            >
              <BuscarProjetos />
            </Box>
          </section>
        </article>
      </ChakraProvider>
    </>
  );
};

export default HomeDescobrir;
