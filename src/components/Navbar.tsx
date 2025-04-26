import {
  Box,
  HStack,
  VStack,
  Link as ChakraLink,
  Heading,
  Collapsible,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import { ColorModeButton, useColorMode } from "./ui/color-mode"
import { useTranslation } from "react-i18next"
import { FaBars, FaXmark } from "react-icons/fa6"
import LanguageSwitcher from "./LanguageSwitcher"
import { Tooltip } from "./ui/tooltip"
import { BiLinkExternal } from "react-icons/bi"
import { Button } from "./ui/button"

const Navbar = () => {
  const { t: translation } = useTranslation()
  const { colorMode, setColorMode } = useColorMode()
  const { open, onToggle } = useDisclosure()

  const menuItems = [
    { label: translation("Home"), href: "/" },
    { label: translation("About"), href: "#about" },
    { label: translation("Skills"), href: "#skill" },
    { label: translation("Projects"), href: "#project" },
    { label: translation("Certificates"), href: "#certificate" },
  ]

  return (
    <Box
      as="nav"
      position="sticky"
      top={0}
      zIndex={100}
      w="100%"
      bg={colorMode === 'dark' ? "whiteAlpha.300" : "blackAlpha.300"}
      backdropFilter="blur(2px)"
      borderBottom="2px solid"
      borderColor={colorMode === 'dark' ? "whiteAlpha.500" : "blackAlpha.500"}
      px={{ base: 5, md: 10 }}
      py={3}
    >
      <Collapsible.Root unmountOnExit open={open}>
        <HStack justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center" gap={4}>
            {/* Menu Toggle (Mobile) */}
            <Collapsible.Trigger onClick={onToggle}>
              <Box
                display={{ base: "inline-flex", md: "none" }}
                aria-label="Toggle Navigation"
                fontSize="20px"
              >
                {
                  open ?
                    <FaXmark />
                    :
                    <FaBars />
                }
              </Box>
            </Collapsible.Trigger>

            {/* Logo */}
            <Box>
              <ChakraLink asChild>
                <RouterLink to={'/'}>
                  <Heading fontWeight={"bold"} fontSize={"xl"}>
                    MrFatra
                  </Heading>
                </RouterLink>
              </ChakraLink>
            </Box>
          </Box>

          <Box display={{ smDown: "flex", mdDown: 'flex', md: 'none' }} alignItems="center" gap={4}>
            <Tooltip content='Toggle Language' openDelay={200} closeDelay={200}>
              <Box bg={colorMode === 'dark' ? 'whiteAlpha.300' : 'blackAlpha.300'} borderRadius={10} py={2} px={'2.5'} zIndex={100}>
                <LanguageSwitcher />
              </Box>
            </Tooltip>
            <Tooltip content='Toggle Dark Mode' openDelay={200} closeDelay={200}>
              <Box asChild bg={colorMode === 'dark' ? 'whiteAlpha.300' : 'blackAlpha.300'} borderRadius={10} zIndex={100} onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}>
                <ColorModeButton />
              </Box>
            </Tooltip>
          </Box>

          {/* Menu Links (Desktop) */}
          <HStack
            gap={8}
            display={{ base: "none", md: "flex" }}
          >
            {menuItems.map((item, index) => (
              <ChakraLink href={item.href} key={index}>
                {item.label}
              </ChakraLink>
            ))}
          </HStack>
        </HStack>

        {/* Menu Links (Mobile) */}
        <Collapsible.Content>
          <VStack
            align="start"
            gap={5}
            mt={5}
            display={{ base: "flex", md: "none" }}
          >
            {menuItems.map((item, index) => (
              <ChakraLink href={item.href} key={index}>
                {item.label}
              </ChakraLink>
              // <ChakraLink asChild key={index}>
              //   <RouterLink to={item.href} key={item.label}>{item.label}</RouterLink>
              // </ChakraLink>
            ))}
            <a href="https://www.cake.me/s--HknxyGHD0SKDFBx8IuLLHw--/ramadhan-fatra" target="_blank" rel="noreferrer">
              <Box
                as={Button}
                my={5}
                display={{ md: 'flex' }}
                alignItems={'center'}
                gap={3}
              >
                <Text>See My CV</Text>
                <BiLinkExternal />
              </Box>
            </a>
          </VStack>
        </Collapsible.Content>
      </Collapsible.Root>
    </Box>
  )
}

export default Navbar