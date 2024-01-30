import React from "react";
import { WrapItem, Avatar } from "@chakra-ui/react";

const UserName = ({ nome, imagemSrc }) => {
  return (
    <WrapItem
    position="absolute"
    top="670px"
    left="60px"
    fontFamily="Roboto"
    >
      <Avatar name={nome} src={imagemSrc} boxSize={8} />
    </WrapItem>
  );
};

export default UserName;
