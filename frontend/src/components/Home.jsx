import {
  Avatar,
  Box,
  Flex,
  Icon,
  Text,
  Link,
  Button,
  Heading,
  VStack,
  Drawer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  DrawerContent,
  IconButton,
  useDisclosure,
  DrawerOverlay,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { AiOutlineHome, AiOutlineSearch, AiOutlineInbox } from "react-icons/ai";
import { BsFillEnvelopeFill, BsSend } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { RiFlashlightFill } from "react-icons/ri";
import { FaMoon, FaSun } from "react-icons/fa";
import React, { useState } from "react";
import Inbox from "./Inbox";
import Main_div_logo from "../assets/Main_div_logo.png"

export default function Index() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const [activeSection, setActiveSection] = useState("Home");

  const renderSection = () => {
    switch (activeSection) {
      case "Home":
        return (
          <Box>
            <Heading>Home</Heading>
            <Text>Welcome to the Home section!</Text>
          </Box>
        );
      case "Search":
        return (
          <Box>
            <Heading>Search</Heading>
            <Text>Search for messages or content here.</Text>
          </Box>
        );
      case "Messages":
        return (
          <Box>
            <Heading>Messages</Heading>
            <Text>View your messages here.</Text>
          </Box>
        );
      case "Send":
        return (
          <Box>
            <Heading>Send</Heading>
            <Text>Send new messages from here.</Text>
          </Box>
        );
      case "Inbox":
        return (
          <div>
            <Inbox />
          </div>
        );
      case "Dashboard":
        return (
          <Box>
            <Heading>Dashboard</Heading>
            <Text>Welcome to the Dashboard!</Text>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box
      as="section"
      bg={useColorModeValue("gray.50", "gray.700")}
      minH="100vh"
    >
      <SidebarContent
        display={{ base: "none", md: "unset" }}
        setActiveSection={setActiveSection}
      />
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent
            w="full"
            borderRight="none"
            setActiveSection={setActiveSection}
          />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: "16" }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          w="full"
          px="4"
          d={{ base: "flex", md: "none" }}
          borderBottomWidth="1px"
          borderColor={useColorModeValue("inherit", "gray.700")}
          bg={useColorModeValue("white", "gray.800")}
          justifyContent={{ base: "space-between", md: "flex-end" }}
          boxShadow="lg"
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{ base: "inline-flex", md: "none" }}
            onClick={onOpen}
            icon={<FiMenu />}
            size="md"
          />

          <Flex align="center">
            <Heading
              fontSize="16px"
              fontFamily="Open Sans"
              fontWeight={700}
              lineHeight="21.79px"
              letterSpacing="-0.02em"
              textAlign="left"
            >
              Onebox
            </Heading>
          </Flex>

          <IconButton
            ml="auto"
            aria-label="Toggle dark mode"
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            bg="transparent"
            _hover={{ bg: "transparent" }}
          />
        </Flex>

        <Box
          as="main"
          p={4}
          minH="30rem"
          bg={useColorModeValue("auto", "gray.800")}
        >
          {renderSection()}
        </Box>
      </Box>
    </Box>
  );
}

const SidebarContent = ({ setActiveSection, ...props }) => (
  <Box
    as="nav"
    pos="fixed"
    top="0"
    left="0"
    zIndex="sticky"
    h="full"
    overflowX="hidden"
    overflowY="auto"
    bg={useColorModeValue("white", "gray.800")}
    borderColor={useColorModeValue("inherit", "gray.700")}
    borderRightWidth="1px"
    w="16" // Set width for collapsed sidebar
    {...props}
  >
    <VStack
      h="full"
      w="full"
      alignItems="flex-start"
      justifyContent="space-between"
    >
      <Box w="full">
        <Flex px="4" py="5" align="center">
          {/* <Icon as={RiFlashlightFill} h={8} w={8} /> */}
          <img src={Main_div_logo} class="img-fluid" alt="..." />
          <Text
            fontSize="2xl"
            ml="2"
            color={useColorModeValue("brand.500", "white")}
            fontWeight="semibold"
            display="none" // Always hide the title in collapsed mode
          >
            POS
          </Text>
        </Flex>
        <Flex
          direction="column"
          as="nav"
          fontSize="md"
          color="gray.600"
          aria-label="Main Navigation"
        >
          <NavItem
            icon={AiOutlineHome}
            onClick={() => setActiveSection("Home")}
          >
            Home
          </NavItem>
          <NavItem
            icon={AiOutlineSearch}
            onClick={() => setActiveSection("Search")}
          >
            Search
          </NavItem>
          <NavItem
            icon={BsFillEnvelopeFill}
            onClick={() => setActiveSection("Messages")}
          >
            Messages
          </NavItem>
          <NavItem icon={BsSend} onClick={() => setActiveSection("Send")}>
            Send
          </NavItem>
          <NavItem
            icon={AiOutlineInbox}
            onClick={() => setActiveSection("Inbox")}
          >
            Inbox
          </NavItem>
          <NavItem
            icon={AiOutlineHome}
            onClick={() => setActiveSection("Dashboard")}
          >
            Dashboard
          </NavItem>
        </Flex>
      </Box>

      <Flex px="4" py="5" mt={10} justifyContent="center" alignItems="center">
        <Menu>
          <MenuButton
            as={Button}
            size="sm"
            rounded="full"
            variant="link"
            cursor="pointer"
            _hover={{ textDecoration: "none" }}
          >
            <Avatar
              size="sm"
              name="Ahmad"
              src="https://avatars2.githubusercontent.com/u/37842853?v=4"
            />
          </MenuButton>
          <MenuList fontSize={17} zIndex={5555}>
            <MenuItem as={Link} to="#">
              My profile
            </MenuItem>
            <MenuItem as={Link} to="#">
              Change password
            </MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </VStack>
  </Box>
);

const NavItem = ({ icon, children, onClick }) => {
  const color = useColorModeValue("gray.600", "gray.300");
  return (
    <Flex
      align="center"
      px="4"
      py="3"
      cursor="pointer"
      role="group"
      fontWeight="semibold"
      transition=".15s ease"
      color={useColorModeValue("inherit", "gray.400")}
      _hover={{
        bg: useColorModeValue("gray.100", "gray.900"),
        color: useColorModeValue("gray.900", "gray.200"),
      }}
      onClick={onClick}
    >
      {icon && (
        <Icon
          mx="2"
          boxSize="4"
          _groupHover={{
            color: color,
          }}
          as={icon}
        />
      )}
      <Text display="none">{children}</Text>{" "}
      {/* Always hide text in collapsed mode */}
    </Flex>
  );
};
