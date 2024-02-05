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
  Button,
  FormControl,
  FormLabel,


} from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import Navbar from "../../Foms/Navbar";
import FotoPerfil from "../../assets/foto_perfil.png";
import BuscarProjetosUser from "../../Foms/BuscarProjetosUser";
import BottomModalAddProject from "../../Foms/BottomModalAddProject";
import { useAuth } from '../../Hooks/AuthContext.jsx';
import { Navigate } from "react-router-dom";

const HomeInicio = () => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <ChakraProvider>
        <header>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Orange - Início</title>
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
            <section
            >
              <Wrap
              mr={410}
        >
          <WrapItem >
          <Text
          position={"relative"}
          left={580}
          fontFamily="Roboto"
          fontSize="30px"
          whiteSpace= "nowrap"
          >
            Camila Soarez
            </Text>
            <Text
            position="relative"
            fontFamily="Roboto"
            fontSize="18px"
            left={390}
            top={"3rem"}	
            opacity={0.5}
            >
            Brasil
            </Text>
            <section
            left="333px"
            top={20}
            >
            <BottomModalAddProject />
            </section>
            <Avatar  right={5} name='Camila Soares' src={FotoPerfil} boxSize={130} />
          </WrapItem>
        </Wrap>
            </section>
          </Box>
          <section>
            <Box
            display={{ base: "flex", md: "inline" }}
              alignItems="colum"
              justifyContent="center"
            >
            </Box>
          </section>
          <BuscarProjetosUser />
        </article>
      </ChakraProvider>
    </>
  );
};

export default HomeInicio;
