/**
 * Category cards
 * Used for display on the Homepage, "No results", and Order History pages
 */
import React, { useEffect } from "react";
import {
  SimpleGrid,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { useSelector, useDispatch } from "react-redux";

const CategoryCards = () => {
  const navigate = useNavigate();

  // Access and interact with the Redux Store
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  // On page load, attempt to gather "category names" from the Database
  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  // Once the "category names" return from the database, add them to the Redux Store.
  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: "updateCategories",
        categories: categoryData.categories,
      });
    }
  }, [categoryData, loading, dispatch]);

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
      {store.categories.map((category) => (
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
