import {
  Box,
  HStack,
  VStack,
  Link as ChakraLink,
  Heading,
  IconButton,
  Collapsible,
  Text,
} from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import { ColorModeButton, useColorMode } from "./ui/color-mode"
import { useTranslation } from "react-i18next"
import { FaBars } from "react-icons/fa6"
import LanguageSwitcher from "./LanguageSwitcher"
import { Tooltip } from "./ui/tooltip"
import { BiDownload } from "react-icons/bi"
import { Button } from "./ui/button"

const Navbar = () => {
  const { t: translation } = useTranslation()
  const { colorMode, setColorMode } = useColorMode()

  const menuItems = [
    { label: translation("Home"), href: "/" },
    { label: translation("About"), href: "#about" },
    { label: translation("Skills"), href: "#skills" },
    { label: translation("Projects"), href: "#projects" },
    { label: translation("Certificates"), href: "#certificates" },
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
      <Collapsible.Root unmountOnExit>
        <HStack justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center" gap={4}>
            {/* Menu Toggle (Mobile) */}
            <Collapsible.Trigger>
              <IconButton
                display={{ base: "inline-flex", md: "none" }}
                variant="ghost"
                aria-label="Toggle Navigation"
                fontSize="20px"
              >
                <FaBars />
              </IconButton>
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

          <Box display={{ smDown: "flex", md: 'none' }} alignItems="center" gap={4}>
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
            {menuItems.map((item) => (
              <ChakraLink asChild>
                <RouterLink to={item.href} key={item.label}>{item.label}</RouterLink>
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
            {menuItems.map((item) => (
              <ChakraLink asChild>
                <RouterLink to={item.href} key={item.label}>{item.label}</RouterLink>
              </ChakraLink>
            ))}
            <Box
              as={Button}
              my={5}
              display={{ md: 'flex' }}
              alignItems={'center'}
              gap={3}
            >
              <Text>Download CV</Text>
              <BiDownload />
            </Box>
          </VStack>
        </Collapsible.Content>
      </Collapsible.Root>
    </Box>
  )
}

export default Navbar