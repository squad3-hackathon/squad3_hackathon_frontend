import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./HomeNavbar";
import HomeBody from "./HomeBody";

const Home = () => {

  return (
    <ChakraProvider>
      <Navbar />
      <HomeBody />
    </ChakraProvider>
  );
};

export default Home;
