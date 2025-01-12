import { Box, Container, HStack, Link as ChakraLink, Heading } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import { useColorMode } from "./ui/color-mode"
import { useTranslation } from "react-i18next"

const Navbar = () => {
  const { t: translation } = useTranslation()
  const { colorMode } = useColorMode()

  return (
    <Container
      borderBottom={"2px solid"}
      borderColor={colorMode === 'dark' ? "whiteAlpha.500" : "blackAlpha.500"}
      bg={colorMode === 'dark' ? "whiteAlpha.300" : "blackAlpha.300"}
      backdropFilter="blur(5px)"
      position="sticky"
      top={0}
      zIndex={100}
      w={"100%"}
      px={4}
    >
      <HStack w={"100%"} py={4} justifyContent="space-between">
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
    </Container>
  )
}

export default Navbar