import React from "react";
import { useSelector } from "react-redux";
import CategoryMenu from "../../components/CategoryMenu";
import ProductList from "../../components/ProductList";
import Offers from "../../components/Offers";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";
import { faq } from "../../utils/faq";
import { Heading } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
      <CategoryMenu />

      <section>
        <ProductList />
      </section>

      <section>
        <Heading
          color="green.800"
          size="2xl"
          textAlign={"center"}
          fontWeight={500}
          marginBottom={"60px"}
        >
          Plants Made Simple
        </Heading>
        <Offers />
      </section>

      <section>
        <Heading
          color="green.800"
          size="xl"
          textAlign={"center"}
          fontWeight={300}
          marginBottom={"60px"}
        >
          Plant Care FAQ
        </Heading>

        <Stack mb={"60px"} gap={0}>
          {faq.map((fact, i) => (
            <Faq fact={fact} key={i} />
          ))}
        </Stack>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
