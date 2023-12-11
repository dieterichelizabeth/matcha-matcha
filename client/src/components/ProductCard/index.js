import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Box,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import "./index.css";

const ProductCard = (product) => {
  const Rating = ({ rating, numReviews }) => {
    return (
      <Box display={"flex"} alignItems="center">
        {Array(5)
          .fill("")
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return <BsStarFill key={i} style={{ marginLeft: "1" }} />;
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
            }
            return <BsStar key={i} style={{ marginLeft: "1" }} />;
          })}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          ({numReviews})
        </Box>
      </Box>
    );
  };

  return (
    <Link to={`/products/${product._id}`} className="productCard">
      <Card maxW="sm" key={product.name} borderRadius={"0"} boxShadow={"none"}>
        <CardBody padding={""} overflow="hidden">
          <Image
            src={`/assets/small/${product.image}`}
            alt="Beauty Product"
            height={"300px"}
            width={"222px"}
            loading="lazy"
            transform="scale(1.0)"
            transition="0.3s ease-in-out"
            objectFit="contain"
            _hover={{
              transform: "scale(1.05)",
            }}
          />
          <Stack mt="6" spacing="3">
            <Heading color="green.800" size="sm" fontWeight={500}>
              {product.name}
            </Heading>
            {/* <Text>{product.description}</Text> */}
            <Rating rating={4} numReviews={10} />
            <Text color="green.800" fontSize="xl">
              ${product.price}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default ProductCard;
