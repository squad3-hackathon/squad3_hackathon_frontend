import React from "react";
import {
  Box,
  Link,
  Flex,
  Image,
  Hide,
  Show,
  Avatar,
  Menu,
  Text,
  MenuButton,
  MenuList,
  MenuItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import LogoOrange from "../assets/logo_orange.png";
import FotoPerfil from "../assets/foto_perfil.png";
import LogoutFilled from "../assets/LogoutFilled.svg";
import { Link as RouterLink } from "react-router-dom";

import {
  HamburgerIcon,
  CloseIcon,
  SmallCloseIcon,
  BellIcon,
} from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <nav>
      <Flex
        bg="#113"
        color="white"
        align="center"
        p={{ base: "11px 24px", md: "16px 30px" }}
        w="100%"
      >
        <Box w="50%">
          <Flex alignItems="center">
            <Show below="md">
              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton isActive={isOpen} color="#ffff">
                      {isOpen ? (
                        <CloseIcon boxSize={6} mr={7} />
                      ) : (
                        <HamburgerIcon boxSize={8} mr={5} />
                      )}
                    </MenuButton>
                    <MenuList
                      color="#000000DE"
                      mt={4}
                      ml={-5}
                      fontFamily="Roboto"
                      fontSize={14}
                    >
                      <MenuItem
                        _hover={{ bg: "#FFEECC" }}
                        borderBottom="1px solid #0000001F"
                      >
                        <Flex flexDirection="column">
                          Camila
                          <Text color="#00000099">camila.ux@gmail.com</Text>
                        </Flex>
                      </MenuItem>
                      <MenuItem _hover={{ bg: "#FFEECC" }}>
                        Meus projetos
                      </MenuItem>
                      <MenuItem
                        _hover={{ bg: "#FFEECC" }}
                        borderBottom="1px solid #0000001F"
                      >
                        Descobrir
                      </MenuItem>
                      <RouterLink to="/" style={{ textDecoration: "none" }}>
                        <MenuItem
                          _hover={{ bg: "#FFEECC" }}
                          alignItems="center"
                        >
                          <Image src={LogoutFilled} boxSize={5} mr={3} />
                          Sair
                        </MenuItem>
                      </RouterLink>
                    </MenuList>
                  </>
                )}
              </Menu>
            </Show>
            <Image src={LogoOrange} alt="Logo" mr="6.25rem" />
            <Hide below="md">
              <Box>
                {/* linkinho para diretorio */}
                <RouterLink to="/home" style={{ textDecoration: "none" }}>
                  <Box
                    color="#FCFDFF"
                    fontSize={20}
                    fontFamily="Roboto"
                    _hover={{ color: "#FF5522" }}
                    cursor="pointer"
                  >
                    Meus projetos
                  </Box>
                </RouterLink>
              </Box>
              <Box>
                <RouterLink to="/discover" style={{ textDecoration: "none" }}>
                  <Box
                    href="#"
                    color="white"
                    mx={6}
                    fontSize={20}
                    fontFamily="Roboto"
                    _hover={{ color: "#FF5522" }}
                    cursor="pointer"
                  >
                    Descobrir
                  </Box>
                </RouterLink>
              </Box>
            </Hide>
          </Flex>
        </Box>
        <Box w="50%">
          <Flex alignItems="center" justifyContent="flex-end">
            <Menu>
              <MenuButton>
                <Avatar name="Camila Soares" src={FotoPerfil} />
              </MenuButton>
              <MenuList
                color="#000000DE"
                mt={4}
                ml={-5}
                fontFamily="Roboto"
                fontSize={14}
              >
                <RouterLink to="/profile" style={{ textDecoration: "none" }}>
                  <MenuItem _hover={{ bg: "#FFEECC" }}>Editar Perfil</MenuItem>
                </RouterLink>
                <RouterLink to="/" style={{ textDecoration: "none" }}>
                  <MenuItem _hover={{ bg: "#FFEECC" }} alignItems="center">
                    <Image src={LogoutFilled} boxSize={5} mr={3} />
                    Sair
                  </MenuItem>
                </RouterLink>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton>
                <BellIcon boxSize={8} ml={7} _hover={{ color: "#FF5522" }} />
              </MenuButton>
              <MenuList
                color="#000000DE"
                mt={4}
                ml={-5}
                fontFamily="Roboto"
                fontSize={14}
              >
                <MenuItem _hover={{ bg: "#FFEECC" }}>Nova Notificação</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Box>
      </Flex>
    </nav>
  );
};

export default Navbar;
