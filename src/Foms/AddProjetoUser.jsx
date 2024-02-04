import React, { useState } from "react";
import {
  Input,
  Button,
  Stack,
  StackItem,
  Image,
  Box,
  Text,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import UploadImage from "../assets/upload_project.svg";
import { SERVER_URL } from "./constant";

function AddProjetoUser({ handleClick }) {
  const [formData, setFormData] = useState({
    title: "",
    tagNames: "",
    description: "",
    link: "",
    imageBase64: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        imageBase64: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer TOKEN_AQUI",
        },
        body: JSON.stringify(formData),
      };

      const response = await fetch(SERVER_URL + "/project", requestOptions);

      if (!response.ok) {
        console.log("Erro na solicitação:", response.statusText);
        return;
      }

      handleClick();
    } catch (error) {
      console.error("Erro:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack position="absolute" width="424px" height={"500px"} left={"430px"} top={"61px"} mt={10}>
        <StackItem>
          <Input
            name="title"
            placeholder="Título"
            value={formData.title}
            onChange={handleInputChange}
            bottom={"32px"}
            borderRadius={"2px"}
          />
          <Input
            name="tagNames"
            placeholder="Tags"
            value={formData.tagNames}
            onChange={handleInputChange}
            bottom={"10px"}
          />
          <Input
            name="link"
            placeholder="Link"
            mt={3}
            value={formData.link}
            onChange={handleInputChange}
          />
          <Input
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
            height={"130px"}
            mt={7}
          />
        </StackItem>

        <Box style={{ position: "relative", right: "400px", bottom: "420px" }}>
          <Input
            type="file"
            name="imageBase64"
            accept="image/*"
            onChange={handleFileChange}
            style={{
              position: "relative",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: 0,
            }}
          />
          <Button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "389px",
              height: "292px",
              backgroundColor: "#E6E9F2",
              bottom: "195px",
              borderRadius: "5px",
              cursor: "pointer",
              marginRight: "150px",
            }}
          >
            {formData.imageBase64 && (
              <Image src={formData.imageBase64} alt="Uploaded Image" mb={"50px"} ml={"20px"} alignItems={"center"} />
            )}
            {!formData.imageBase64 && (
              <Image src={UploadImage} alt="UploadImage" mb={"50px"} ml={"20px"} alignItems={"center"} />
            )}
          </Button>
        </Box>
      </Stack>

      <Button
        type="submit"
        colorScheme="teal"
        bg="#F52"
        borderRadius="4px"
        padding="8px 27px"
        boxShadow="0px 3px 1px -2px rgba(0, 0, 0, 0.20), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)"
        fontSize={"15px"}
        fontFamily="Roboto"
        fontStyle={"normal"}
        lineHeight={"20px"}
        _hover={{ bg: "#CC4400" }}
        mt={350}
        ml={"0.4rem"}
      >
        Submit
      </Button>
      <Button
        fontSize={"15px"}
        fontFamily="Roboto"
        fontStyle={"normal"}
        lineHeight={"20px"}
        _hover={{ bg: "#C2C4CC" }}
        mt={350}
        ml={"2rem"}
        color="rgba(0, 0, 0, 0.38)"
        background="rgba(0, 0, 0, 0.12)"
        borderRadius="4px"
        padding="8px 15px"
        boxShadow="0px 3px 1px -2px rgba(0, 0, 0, 0.20), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)"
      >
        <Link as={RouterLink} to="/visualizar-projeto" bottom={"5rem"} textDecor={"none"}>
          Visualizar Projeto
        </Link>
      </Button>
    </form>
  );
}

export default AddProjetoUser;
