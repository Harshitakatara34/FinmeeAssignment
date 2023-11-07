import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { ArrowDownIcon, HamburgerIcon } from "@chakra-ui/icons"; // Import appropriate icons from Chakra UI
// import GitLogo from "../assets/gitLogo"; // Assuming GitLogo is an SVG component

const Header = () => {
  const searchBar = {
    backgroundColor: "#293248",
    border: "2px solid #333b4f",
    borderRadius: "5px",
    display: "flex",
  };

  return (
    <Flex pt={3} justifyContent="space-between">
      {/* HideTabAndMobileFlex */}
      <Box display={{ base: "none", md: "none", lg: "flex" }}>
        <Flex gap="1rem" alignItems="center">
          {/* <GitLogo size={30} /> */}
          {/* Add your stacked elements here with ArrowDownIcon */}
        </Flex>
      </Box>

      {/* HideDextop */}
      <Box display={{ base: "flex", md: "flex", lg: "none" }}>
        {/* Sign Up Box */}
        <Box
          pt={0.5}
          pb={0.5}
          pr={0.6}
          pl={0.6}
          paddingRight={0.5}
          border=".5px solid #d0d7de"
          borderRadius="5px"
        >
          <Flex alignItems="center">
            <Text>sign up</Text>
          </Flex>
        </Box>
      </Box>

      {/* HideDextop */}
      <Box display={{ base: "flex", md: "flex", lg: "none" }}>
        {/* <GitLogo size={30} /> */}
      </Box>
      {/* HideDextop */}
      <Box display={{ base: "flex", md: "flex", lg: "none" }}>
        <HamburgerIcon />
      </Box>

      {/* HideTabAndMobileFlex */}
      <Box display={{ base: "none", md: "none", lg: "flex" }}>
        <Flex gap="1rem" alignItems="center">
          {/* Search Bar */}
          <Box p={0.6} sx={searchBar} minWidth={200}>
            <Text color="#606979" fontSize=".9rem">
              search git hub
            </Text>
          </Box>
          {/* Sign In Box */}
          <Box>
            <Text>sign in</Text>
          </Box>
          {/* Sign Up Box */}
          <Box
            pt={0.5}
            pb={0.5}
            pr={0.6}
            pl={0.6}
            paddingRight={0.5}
            border=".5px solid #d0d7de"
            borderRadius="5px"
          >
            <Flex alignItems="center">
              <Text>sign up</Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;