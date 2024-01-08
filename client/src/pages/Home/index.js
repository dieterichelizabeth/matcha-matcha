import React from "react";
import Hero from "../../components/Hero";
import Hero2 from "../../components/Hero2";
import CategoryCards from "../../components/CategoryCards";
import Footer from "../../components/Footer";
import BestSellerCards from "../../components/BestSellerCards";
import { Heading } from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
      <Hero />

      <main>
        <section>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "xl", sm: "3xl" }}
            color={"green.800"}
            marginBottom={"30px"}
          >
            Best Sellers
          </Heading>
          <BestSellerCards />
        </section>

        <Hero2 />

        <section>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "xl", sm: "3xl" }}
            color={"green.800"}
          >
            More Ways to Find Your Perfect Plant
          </Heading>
          <CategoryCards />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
