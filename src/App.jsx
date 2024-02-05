import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./Hooks/useContext";
import Login from "./Components/Login";
import Home from "./Components/Home/Home";
import Register from "./Components/Register";
import HomeDiscover from "./Components/Home/HomeDescobrir";
import EditPerfil from "./Components/Home/EditPerfil";
import NotFound from "./Components/NotFound";
import HomeInicio from "./Components/Home/HomeInicio";
//import LoginTest from "./Components/Home/TestAuth";
//import Test from "./Components/Home/meu";
import { AuthProvider } from './Hooks/AuthContext';

const App = () => {
  return (
    <ChakraProvider>
      <AuthProvider>
        <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="home/*" element={<Home />} />
              <Route path="discover/*" element={<HomeDiscover />} />
              <Route path="register/*" element={<Register />} />
              <Route path="profile/*" element={<EditPerfil />} />
              {/*<Route path="test/*" element={<LoginTest />} />*/}
              <Route path="*" element={<NotFound />} />
              <Route path="/home" element={<HomeInicio />} />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </AuthProvider>
    </ChakraProvider>
  );
};
export default App;
