import React from "react";
import { Link } from "react-router-dom";
import {
  SimpleGrid,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

// TODO: Get this info from the db

const CategoryCards = () => {
  const navigate = useNavigate();

  const categories = [
    {
      _id: "657585be8737d1d8cda94f69",
      name: "Best Sellers",
      image: "best-sellers.jpg",
    },
    {
      _id: "657585be8737d1d8cda94f6a",
      name: "Bright Light",
      image: "bright-light.jpg",
    },
    {
      _id: "657585be8737d1d8cda94f6b",
      name: "Low Maintanence",
      image: "low-maintanence.jpg",
    },
    {
      _id: "657585be8737d1d8cda94f6c",
      name: "Pet Friendly",
      image: "pet-friendly.jpg",
    },
  ];

  const handleClick = (id) => {
    localStorage.setItem("categoryId", JSON.stringify(id));
    console.log(id);

    navigate("/shop");
  };

  const CategoryCard = (category) => {
    return (
      <Stack
        cursor={"pointer"}
        _hover={{ textDecor: "underline" }}
        onClick={() => {
          handleClick(category._id);
        }}
      >
        <Card
          maxW="sm"
          key={category.name}
          boxShadow={"none"}
          alignItems={"center"}
        >
          <CardBody padding={0}>
            <Image
              alt="Categories"
              src={`/assets/categories/${category.image}`}
              height={"250px"}
              width={"250px"}
              loading="lazy"
              objectFit={"cover"}
            />
            <Stack mt="6" spacing="3">
              <Heading
                color="green.800"
                size="sm"
                fontWeight={500}
                textAlign={"center"}
                _hover={{
                  textDecor: "underline",
                }}
              >
                {category.name}
              </Heading>
            </Stack>
          </CardBody>
        </Card>
      </Stack>
    );
  };

  return (
    <SimpleGrid minChildWidth="200px" spacing={10} marginTop={"40px"}>
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          _id={category._id}
          image={category.image}
          name={category.name}
        />
      ))}
    </SimpleGrid>
  );
};

export default CategoryCards;
