import React, { useState } from 'react';
import { Box, Button, Container, FormControl, FormLabel, Input, Stack, Image, Text, Card, Flex } from '@chakra-ui/react';
import UploadProject from '../../assets/upload_project.svg';
const HomeUploadImage = () => {
  const [selectedImage, setSelectedImage] = useState();

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert(URL.createObjectURL(selectedImage));
  };

  const removeSelectedImage = () => {
    setSelectedImage();
  };

  return (
    <>
        <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
            <Card
            display={"flex"}
            bg="#E6E9F2"
            width={"389px"}
            height={"304px"}
            justifyContent={"center"}
            alignItems={"center"}
            padding={"91px 59px 91px 60px"}
            mt={3}
            >
                <input
                type="file"
                id="file-upload"
                accept=".pdf, .doc, .docx"
                style={{ display: "none" }}
                onChange={handleFileChange}
                />
                <Image src={UploadProject} alt="UploadProject" />
                <Text
                    mt={2}
                    color="#303133"
                    fontFamily="Roboto"
                    fontSize="14px"
                    fontStyle="normal"
                    opacity={"0.6"}
                >
                    Compartilhe seu talento com milhares de pessoas
                </Text>
                </Card>
        </label>
    </>
  );
};

export default HomeUploadImage;
