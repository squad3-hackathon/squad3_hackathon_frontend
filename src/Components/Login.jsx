import React from "react";
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

const Login = () => {
  /*Show Password  */
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  /*Submit Form */
  const email = useForm();
  const password = useForm();

  async function handleSubmit(event) {
    event.preventDefault();

    if (email.validate() && password.validate()) {
      userLogin(email.value, password.value);
    }
  }

  return (
    <div>
      <Flex align="center">
        <Box w="50vw" h="100vh" display={{ base: "none", md: "block" }}>
          <Img src={LoginImg} alt="Dan Abramov" />
        </Box>
        <Box
          w="full"
          h="100vh"
          display="flex"
          flexDirection="conlum"
          alignContent="center"
          justifyContent="space-around"
          alignItems="center"
        >
          <Box>
            <Text fontSize={[null, "1.5rem", "3rem"]}>
              Entre no Orange Portfólio
            </Text>
            <Text color="#515255" pt="2rem" fontSize={[null, "1rem", "1.5rem"]}>
              Faça login com email
            </Text>
            {/* colocar dentro do formulário */}
            <form onSubmit={handleSubmit}>
              <Input
                id="Email"
                legend="Email address"
                type="text"
                name="email"
                {...email}
              />
              <InputGroup display="flex" flexWrap="nowrap">
                <Input
                  id="Password"
                  legend="Password"
                  name="password"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  {...password}
                />
                <InputRightElement width="2rem" pos="absolute" m="2.5rem 1rem">
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
            <Link fontSize="16px" color="#818388">
              Cadastre-se
            </Link>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default Login;
