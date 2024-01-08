/**
 * Faq component for displaying a fact
 * @param {fact} arg An object containing a question and answer for display on the "Shop" page
 */
import React, { useState } from "react";
import { Flex, Text, Stack } from "@chakra-ui/react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import "./index.css";

const Faq = ({ fact }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Stack className="faq-container">
      <Flex justifyContent={"space-between"}>
        <Text
          fontWeight={600}
          color={isOpen ? "green.600" : "gray.600"}
          fontSize={"xl"}
        >
          {fact.q}
        </Text>

        <GoPlus
          fontSize={"25px"}
          className={isOpen ? "hidden" : "open"}
          onClick={() => setIsOpen(true)}
        />
        <FiMinus
          fontSize={"25px"}
          className={isOpen ? "open" : "hidden"}
          color="#2F855A"
          onClick={() => setIsOpen(false)}
        />
      </Flex>
      <Text color={"gray.600"} className={isOpen ? "open" : "hidden"}>
        {fact.a}
      </Text>
    </Stack>
  );
};

export default Faq;
