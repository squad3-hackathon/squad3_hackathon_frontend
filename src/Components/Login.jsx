import React, { useState } from "react";
import {
  Box,
  Flex,
  Img,
  Text,
  Link,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Input from "../Foms/Input";
import LoginImg from "../assets/img_login.png";
import Button from "../Foms/ButtonRegister";
import useForm from "../Hooks/useForms";
import { useUser } from "../Hooks/useContext";
import { Helmet } from "react-helmet";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "./axios";
import { useAuth } from '../Hooks/AuthContext.jsx';

const Login = () => {
  /*Show Password  */
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const { login } = useAuth();

  /*Submit Form */
  const emailForms = useForm("email");
  const password = useForm("password");
  const LOGIN_URL = "http://localhost:8080/user/login";

  const handleSubmit = async (event) => {
    event.preventDefault();

    const emailValue = emailForms.value;
    const passwordValue = password.value;

    //call api delicinha-back-end
    if (emailForms.validate() && password.validate()) {
      console.log("tudo certo!");
    } else {
      console.log("erro!");
    }

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email: emailValue, password: passwordValue }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      login({
        name: response.data.name,  
        email: response.data.email,

      });
      console.log(response.data);
      console.log(response.token);
      console.log(JSON.stringify(response));
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  /*Google Response */
  const { setName, setEmail, setIsLoggedIn } = useUser();
  const navigate = useNavigate();

  const responseSuccess = (credentialResponse) => {
    try {
      var decoded = jwtDecode(credentialResponse.credential);
      console.log(decoded);

      const { name, email } = decoded;
      setName(name);
      setEmail(email);
      setIsLoggedIn(true);

      navigate("/home");
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  };

  const responseError = () => {
    console.log("Login Failed");
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
            display={{ base: "none", md: "inline-block" }}
          >
            <Img src={LoginImg} alt="imagem login" />
          </Box>
        </section>
        <section>
          <Box
            w={{ base: "100vw", md: "58vw" }}
            h="100vh"
            pt={{ base: "50%", md: "20%" }}
            display="flex"
            justifyContent="center"
          >
            <Box w={{ base: "90vw", md: "38vw" }}>
              <Text fontSize={[null, "1.5rem", "3rem"]} textAlign="center">
                Entre no Orange Portfólio
              </Text>
              <Flex justifyContent="center" m="2rem 0 0 2rem">
                <GoogleOAuthProvider clientId="20634376901-4o5q9as307dkeb86hva3s7gegrsnbhv1.apps.googleusercontent.com">
                  <GoogleLogin
                    onSuccess={responseSuccess}
                    onError={responseError}
                  />
                </GoogleOAuthProvider>
              </Flex>
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
                  errorText={emailForms.error}
                  {...emailForms}
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
                    <button type="button" onClick={handleClick}>
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
