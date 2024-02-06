import React from "react";
import {
  Image,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  
} from "@chakra-ui/react";
import CirculoEditProjeto from "../../assets/circulo_edit_projeto.svg";
import EditarProjeto from "../../assets/editar_projeto.svg";

const EditProject = ({ imagemEnviada }) => {
  const { isOpen, onToggle } = useDisclosure();

  const handleImageClick = () => {
    onToggle();
  };

  return (
    <>
      <Box onClick={handleImageClick}>
        <Image
          src={CirculoEditProjeto}
          top={"410px"}
          ml={410}
          zIndex="1"
          position="absolute"
        />
        <Image
          src={EditarProjeto}
          top={"410px"}
          ml={413}
          zIndex="2"
          position="absolute"
        />
      </Box>

      <Image
        src={imagemEnviada}
        position="absolute"
        top="400px"
        left="60px"
        width="389px"
        height="258px"
        borderRadius="4px"
        zIndex="0"
      />
      <Menu 
      isOpen={isOpen} 
      onToggle={onToggle}
      placement="left-start"
      >
        <MenuButton 
        as={Box} 
        mt={370}
        ml={445}
        zIndex="3"
        >
        </MenuButton>
        <MenuList>
          <MenuItem>Editar</MenuItem>
          <MenuItem>Excluir</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default EditProject;
