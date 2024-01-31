import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./HomeNavbar";
import HomeBody from "./HomeBody";
import { Helmet } from "react-helmet";

const Home = () => {

  return (
    <ChakraProvider>
      <header>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Orange - Início</title>
            <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
        </header>
      <Navbar />
      <HomeBody />
    </ChakraProvider>
  );
};

export default Home;
