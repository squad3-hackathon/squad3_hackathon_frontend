import React from "react";
import Navbar from "../../Foms/Navbar";
import {
  Box,
  Link,
  Flex,
  Wrap,
  Text,
  Input,
  WrapItem,
  ChakraProvider,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import BackButton from "../../Foms/BackButton";
import ButtonRegister from "../../Foms/ButtonRegister";
/* import Input from "../../Foms/Input"; */
import useForm from "../../Hooks/useForms";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

const EditPerfil = () => {
  /*Change Profile Data */
  const email = useForm("email");
  const password = useForm("password");
  const nome = useForm();
  return (
    <>
      <ChakraProvider>
        <nav>
          <Navbar />
        </nav>
        <section>
          <Box w="full" h="90vh" display="inline-block" p="6rem 16rem  0 16rem">
            <Flex h="4rem" w="100%" display="flex" justifyContent="start">
              <Link href="/home">
                <BackButton>
                  <ArrowBackIcon boxSize={8} />
                </BackButton>
              </Link>
            </Flex>
            <Flex mt="2rem" justifyContent="space-between">
              <Box>
                <Wrap>
                  <WrapItem>
                    <Avatar
                      size="3xl"
                      name="Dan Abrahmov"
                      src="https://bit.ly/dan-abramov"
                    />
                  </WrapItem>
                </Wrap>
                <ButtonRegister>Editar Avatar</ButtonRegister>
              </Box>
              <Box w="50%" mt="5rem">
                <Flex
                  flexDirection="row"
                  w="100%"
                  alignItems="center"
                  mb="2rem"
                >
                  <Text mr="2rem">Nome</Text>
                  <Input
                    disabled
                    placeholder="Camila Soares"
                    borderColor="#515255"
                    _hover={{ borderColor: "#000000" }}
                    _focus={{ borderColor: "#2348B1" }}
                  />
                </Flex>
                <Flex
                  flexDirection="row"
                  w="100%"
                  alignItems="center"
                  mb="2rem"
                >
                  <Text mr="2rem">Email</Text>
                  <Input
                    disabled
                    placeholder="Camila.ux@gmail.com"
                    borderColor="#515255"
                    _hover={{ borderColor: "#515255" }}
                    _focus={{ borderColor: "#2348B1" }}
                  />
                </Flex>
                <Flex
                  flexDirection="row"
                  w="100%"
                  alignItems="center"
                  mb="2rem"
                >
                  <Text mr="2rem">Senha</Text>
                  <Input
                    type="password"
                    disabled
                    placeholder="************"
                    borderColor="#515255"
                    _hover={{ borderColor: "#515255" }}
                    _focus={{ borderColor: "#2348B1" }}
                  />
                </Flex>
              </Box>
            </Flex>
          </Box>
        </section>
      </ChakraProvider>
    </>
  );
};

export default EditPerfil;
