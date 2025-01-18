import { Box, Container, HStack, Link as ChakraLink, Heading, VStack, IconButton, useDisclosure } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import { ColorModeButton, useColorMode } from "./ui/color-mode"
import { useTranslation } from "react-i18next"
import LanguageSwitcher from "./LanguageSwitcher"
import { FaBars } from "react-icons/fa6"
import { HiX } from "react-icons/hi"

const Navbar = () => {
  const { t: translation } = useTranslation()
  const { colorMode } = useColorMode()
  const { open, onClose, onToggle } = useDisclosure()

  return (
    <Container
      borderBottom={"2px solid"}
      borderColor={colorMode === 'dark' ? "whiteAlpha.500" : "blackAlpha.500"}
      bg={colorMode === 'dark' ? "whiteAlpha.300" : "blackAlpha.300"}
      backdropFilter="blur(5px)"
      position={{ base: 'fixed', md: "sticky" }}
      top={0}
      zIndex={100}
      w={'full'}
      px={4}
    >
      <HStack display={{ base: 'none', md: 'flex' }} w={"100%"} py={4} justifyContent="space-between">
        <Box>
          <ChakraLink asChild>
            <RouterLink to={'/'}>
              <Heading fontWeight={"bold"} fontSize={"xl"}>
                MrFatra
              </Heading>
            </RouterLink>
          </ChakraLink>
        </Box>
        <Box display="flex" gap={10}>
          <ChakraLink asChild>
            <RouterLink to={'/'}>{translation("Home")}</RouterLink>
          </ChakraLink>
          <ChakraLink asChild>
            <RouterLink to={'#about'}>{translation("About")}</RouterLink>
          </ChakraLink>
          <ChakraLink asChild>
            <RouterLink to={'#skills'}>{translation("Skills")}</RouterLink>
          </ChakraLink>
          <ChakraLink asChild>
            <RouterLink to={'#projects'}>{translation("Projects")}</RouterLink>
          </ChakraLink>
          <ChakraLink asChild>
            <RouterLink to={'#certificates'}>{translation("Certificates")}</RouterLink>
          </ChakraLink>
        </Box>
      </HStack>

      <HStack display={{ base: 'flex', md: 'none' }} p={2} justifyContent={'space-between'}>
        <Box>
          <ChakraLink asChild>
            <RouterLink to={'/'}>
              <Heading fontWeight={"bold"} fontSize={"xl"}>
                MrFatra
              </Heading>
            </RouterLink>
          </ChakraLink>
        </Box>
        <HStack>
          <Box bg={'whiteAlpha.200'}>
            <ColorModeButton />
          </Box>
          <Box bg={'whiteAlpha.200'} asChild borderRadius={10} zIndex={100} position={'relative'}>
            <IconButton
              // onClick={toggleColorMode}
              variant="ghost"
              size="sm"
              css={{
                _icon: {
                  width: "5",
                  height: "5",
                },
              }}
            >
              <LanguageSwitcher />
            </IconButton>
          </Box>
          <Box>
            <Box onClick={onToggle}>
              {
                open
                  ?
                  <HiX />
                  :
                  <FaBars />
              }
            </Box>
          </Box>
        </HStack>
      </HStack>

    </Container>
  )
}

export default Navbar