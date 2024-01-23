import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Components/Login";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          {/* Alterar caminho da página de login */}
          <Route path="/" element={<Login />} />
          {/* <Route path="*" element={<Pagina404 />} />  alterar depois*/}
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};
export default App;
