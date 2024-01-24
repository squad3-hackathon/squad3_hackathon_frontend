import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login.jsx";
import MeuPortifolio from "./Components/MeuPortfolio";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/portfolio" element={<MeuPortifolio />} />         
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
