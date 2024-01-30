import React from "react";
import { Text } from "@chakra-ui/react";
import UserName from "./UserName";
import FotoPerfil from "../../assets/foto_perfil.png";

const UserData = () => {
  const dataAtual = new Date();
  const mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
  const dia = String(dataAtual.getDate()).padStart(2, "0");
  const dataFormatada = `${mes}/${dia}`;
  const nomeUsuario = "Camila Soares";

  return (
    <>
    <Text
    position="absolute"
    top="670px"
    left="100px"
    fontFamily="Roboto"
    opacity={0.8}
    mt={1}
    >
      <UserName nome={nomeUsuario} imagemSrc={FotoPerfil} /> {nomeUsuario} &nbsp;•&nbsp; {dataFormatada}
    </Text>
    </>
  );
};

export default UserData;
