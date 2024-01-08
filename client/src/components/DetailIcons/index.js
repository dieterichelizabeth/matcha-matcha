/**
 * Detail Icons component
 * @param {detail} arg An object containing plant attributes for display
 * returns "plant detail badges" for display
 */
import React from "react";
import { Stack, Text, Icon, Flex } from "@chakra-ui/react";
import { GiNightSleep, GiPlantRoots } from "react-icons/gi";
import { RiToolsLine } from "react-icons/ri";
import { FaFireAlt } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { IoPartlySunnyOutline, IoSunnyOutline } from "react-icons/io5";
import { IoIosCloudOutline } from "react-icons/io";

const DeatailIcons = ({ detail }) => {
  const GetIcon = () => {
    const trimmed = detail.trim();
    switch (trimmed) {
      case "Difficulty: No Fuss":
        return <Icon as={GiNightSleep} color={"green.800"} w={5} h={5} />;
      case "Difficulty: Low Maintenance":
        return <Icon as={RiToolsLine} color={"green.800"} w={5} h={5} />;
      case "Difficulty: Moderate":
        return <Icon as={FaFireAlt} color={"green.800"} w={5} h={5} />;
      case "Pet Friendly":
        return <Icon as={MdOutlinePets} color={"green.800"} w={5} h={5} />;
      case "Light: Low/Artificial":
        return <Icon as={IoIosCloudOutline} color={"green.800"} w={5} h={5} />;
      case "Light: Partial/Bright Indirect":
        return (
          <Icon as={IoPartlySunnyOutline} color={"green.800"} w={5} h={5} />
        );
      case "Light: Direct Sunlight":
        return <Icon as={IoSunnyOutline} color={"green.800"} w={5} h={5} />;
      case "Air Cleaner":
        return <Icon as={GiPlantRoots} color={"green.800"} w={5} h={5} />;
      default:
        return <Icon as={GiNightSleep} color={"green.800"} w={5} h={5} />;
    }
  };

  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={"gray.100"}
      >
        <GetIcon />
      </Flex>
      <Text fontWeight={600}>{detail}</Text>
    </Stack>
  );
};

export default DeatailIcons;
