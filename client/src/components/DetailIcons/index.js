/**
 * Detail Icons component
 * @param {details} arg An object containing plant attributes for display
 * returns "plant detail badges" for display
 */
import React, { useState } from "react";
import { Stack, Text, Icon, Flex, SimpleGrid } from "@chakra-ui/react";
import { GiNightSleep, GiPlantRoots } from "react-icons/gi";
import { RiToolsLine } from "react-icons/ri";
import { FaFireAlt } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { IoPartlySunnyOutline, IoSunnyOutline } from "react-icons/io5";
import { IoIosCloudOutline } from "react-icons/io";

const DeatailIcons = ({ fact }) => {
  const icons = [
    {
      svg: GiNightSleep,
      text: "Difficulty: No Fuss",
    },
    {
      svg: RiToolsLine,
      text: "Difficulty: Low Maintenance",
    },
    {
      svg: FaFireAlt,
      text: "Difficulty: Moderate",
    },
    {
      svg: MdOutlinePets,
      text: "Pet Friendly",
    },
    {
      svg: IoIosCloudOutline,
      text: "Light: Low/Artificial",
    },
    {
      svg: IoPartlySunnyOutline,
      text: "Light: Partial/Bright Indirect",
    },
    {
      svg: IoSunnyOutline,
      text: "Light: Direct Sunlight",
    },
    {
      svg: GiPlantRoots,
      text: "Air Cleaner",
    },
  ];

  return (
    <Stack>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {icons.map((icon) => (
          <Stack direction={"row"} align={"center"}>
            <Flex
              w={8}
              h={8}
              align={"center"}
              justify={"center"}
              rounded={"full"}
              bg={"gray.100"}
            >
              <Icon as={icon.svg} color={"green.800"} w={5} h={5} />
            </Flex>
            <Text fontWeight={600}>{icon.text}</Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default DeatailIcons;
