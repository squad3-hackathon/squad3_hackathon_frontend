import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login.jsx";
import MeuPortifolio from "./Components/MeuPortfolio.jsx";
import HomeDescobrir from "./Components/HomeDescobrir.jsx";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* 
            a rota está  sendo representada como gatilho para um id ao integrar ao backend
          */}
          <Route path="/portfolio/:id" element={<MeuPortifolio />} />
          <Route path="/descobrir/:id" element={<HomeDescobrir />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
