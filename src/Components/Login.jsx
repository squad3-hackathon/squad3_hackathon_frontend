import React, { useState } from "react";
import {
  Box,
  Flex,
  Img,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Input from "../Foms/Input";
import LoginImg from "../assets/img_login.png";
import Button from "../Foms/ButtonRegister";
import useForm from "../Hooks/useForms";
import { Helmet } from "react-helmet";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

const Login = () => {
  /*Show Password  */
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  /*Submit Form */
  const email = useForm("email");
  const password = useForm("password");

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailValue = email.value;
    const passwordValue = password.value;

    if (email.validate() && password.validate()) {
      console.log("tudo certo!");
      // userLogin(nomeValue, sobrenomeValue, emailValue, passwordValue);
    } else {
      console.log("erro!");
    }
  };

  return (
    <>
      <header>
        <Helmet>
          <title>Orange - Login</title>
          <meta name="Página de Login" content="login page" />
        </Helmet>
      </header>
      <Flex align="center" justifyContent="center" alignItems="center">
        <section>
          <Box
            w="40vw"
            h="100vh"
            display={{ base: "none", md: "flex" }}
            justifyContent="left"
          >
            <Img src={LoginImg} alt="imagem login" w="83%" h="100%" />
          </Box>
        </section>
        <section>
          <Box
            w={{ base: "100vw", md: "60vw" }}
            h="100vh"
            pt={{ base: "50%", md: "20%" }}
            display="flex"
            justifyContent="center"
          >
            <Box w={{ base: "90vw", md: "38vw" }}>
              <Text fontSize={[null, "1.5rem", "3rem"]} textAlign="center">
                Entre no Orange Portfólio
              </Text>
              <Text
                color="#515255"
                pt="2rem"
                fontSize={[null, "1rem", "1.5rem"]}
              >
                Faça login com email
              </Text>
              <form onSubmit={handleSubmit}>
                <Input
                  id="Email"
                  legend="Email address"
                  type="text"
                  name="email"
                  errorText={email.error}
                  {...email}
                />
                <InputGroup display="flex" flexWrap="wrap" flexDir="row">
                  <Input
                    id="Password"
                    legend="Password"
                    name="password"
                    type={show ? "text" : "password"}
                    errorText={password.error}
                    {...password}
                  />
                  <InputRightElement width="2rem" m="2.5rem 1rem">
                    <button onClick={handleClick}>
                      {show ? (
                        <ViewIcon w={6} h={6} color="#323232" />
                      ) : (
                        <ViewOffIcon w={6} h={6} color="#323232" />
                      )}
                    </button>
                  </InputRightElement>
                </InputGroup>
                <Button>Entrar</Button>
              </form>
              <ChakraLink
                fontSize="16px"
                color="#818388"
                as={ReactRouterLink}
                to="/register"
                _hover={{ color: "#303133", fontWeight: "500" }}
                style={{ textDecoration: "none" }}
              >
                Cadastre-se
              </ChakraLink>
            </Box>
          </Box>
        </section>
      </Flex>
    </>
  );
};

export default Login;
