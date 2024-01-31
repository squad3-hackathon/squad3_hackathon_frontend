import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home/Home";
import Register from "./Components/Register";
import HomeDiscover from "./Components/Home/HomeDescobrir";


const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          {/* Alterar caminho da página de login */}
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/discover" element={<HomeDiscover />} />
          <Route path="/register" element={<Register />} />

          {/* <Route path="*" element={<Pagina404 />} />  alterar depois*/}
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};
export default App;
