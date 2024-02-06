import React, { useState } from "react";
import {
  Box,
  Flex,
  Img,
  Text,
  Grid,
  Link,
  GridItem,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon, ArrowBackIcon } from "@chakra-ui/icons";
import Input from "../Foms/Input";
import RegisterImg from "../assets/img_cadastro.png";
import Button from "../Foms/ButtonRegister";
import useForm from "../Hooks/useForms";
import { Helmet } from "react-helmet";
import AlertSuccess from "../Foms/AlertSucess";
import AlertWarning from "../Foms/AlertWarning";
import BackButton from "../Foms/BackButton";
import axios from "./axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  /* Show Alerts */
  const [showSuccess, setShowSuccess] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const REGISTER_URL = "https://portifolio-deploy.onrender.com/user/register";
  /* Show Password */
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  /* Submit Form */
  const navigate = useNavigate();
  const email = useForm("email");
  const password = useForm("password");
  const nome = useForm("name");
  const sobrenome = useForm("lastName");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nomeValue = nome.value;
    const sobrenomeValue = sobrenome.value;
    const emailValue = email.value;
    const passwordValue = password.value;
   

    if (
      nome.validate() &&
      sobrenome.validate() &&
      email.validate() &&
      password.validate()
    ) {
      // userLogin(nomeValue, sobrenomeValue, emailValue, passwordValue);
      console.log("tudo certo!");
      setShowSuccess(true);
      setShowWarning(false);
    } else {
      console.log("erro!");
      setShowSuccess(false);
      setShowWarning(true);
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ name: nomeValue, lastName: sobrenomeValue, email: emailValue, password: passwordValue }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
    

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <header>
        <Helmet>
          <title>Orange - Cadastro</title>
          <meta name="Página de Cadastro" content="register page" />
        </Helmet>
      </header>
      <Flex align="center" justifyContent="center" alignItems="center">
        <section>
          <Box w="40vw" h="100vh" display={{ base: "none", md: "block" }}>
            <Img src={RegisterImg} alt="imagem login" />
          </Box>
        </section>
        <section>
          <Box display="flex" justifyContent="center">
            {showSuccess && <AlertSuccess />}
            {showWarning && <AlertWarning />}
          </Box>
          <Box display="flex" justifyContent="flex-end" w="80%" mt="3rem">
            <Link href="/">
              <BackButton>
                <ArrowBackIcon boxSize={8} />
              </BackButton>
            </Link>
          </Box>
          <Box
            w={{ base: "100vw", md: "58vw" }}
            h="100vh"
            pt={{ base: "50%", md: "20%" }}
            display="flex"
            justifyContent="center"
          >
            <Box w={{ base: "90vw", md: "38vw" }}>
              <Text fontSize={[null, "1.5rem", "3rem"]} textAlign="center">
                Cadastre-se
              </Text>
              <form onSubmit={handleSubmit}>
                <Grid
                  templateColumns="repeat(auto-fit, minmax(100px, 1fr))"
                  gap={4}
                >
                  <GridItem w="100%">
                    <Input
                      id="Nome"
                      legend="Nome"
                      type="text"
                      name="Nome"
                      isRequired
                      {...nome}
                    />
                  </GridItem>
                  <GridItem w="100%">
                    <Input
                      id="Sobrenome"
                      legend="Sobrenome"
                      type="text"
                      name="Sobrenome"
                      isRequired
                      {...sobrenome}
                    />
                  </GridItem>
                </Grid>
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
                    <button type="button" onClick={handleClick}>
                      {show ? (
                        <ViewIcon w={6} h={6} color="#323232" />
                      ) : (
                        <ViewOffIcon w={6} h={6} color="#323232" />
                      )}
                    </button>
                  </InputRightElement>
                </InputGroup>
                <Button>Cadastrar</Button>
              </form>
            </Box>
          </Box>
        </section>
      </Flex>
    </>
  );
};

export default Register;
