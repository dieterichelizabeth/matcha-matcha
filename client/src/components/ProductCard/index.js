/**
 * Product Card component - used for displaying product on the Homepage and "Shop" page.
 * @param {product} arg An object containing product information for display
 */
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Image, Stack, Heading, Text } from "@chakra-ui/react";

import "./index.css";

const ProductCard = (product) => {
  const descriptionArr = product.description.split(" ");
  const description = descriptionArr.slice(0, 15);
  const text = description.join(" ");

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
            <Text>{text}...</Text>

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
