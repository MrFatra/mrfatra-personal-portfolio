import { Box, Container, HStack, Link as ChakraLink, Heading } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import { useColorMode } from "./ui/color-mode"

const Navbar = () => {
  const { colorMode } = useColorMode()
  return (
    <Container
      borderBottom={"2px solid"}
      borderColor={colorMode === 'dark' ? "whiteAlpha.500" : "blackAlpha.500"}
      bg={colorMode === 'dark' ? "whiteAlpha.300" : "blackAlpha.300"}
      backdropFilter="blur(2px)"
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
            <RouterLink to={'/'}>Home</RouterLink>
          </ChakraLink>
          <ChakraLink asChild>
            <RouterLink to={'#about'}>About</RouterLink>
          </ChakraLink>
          <ChakraLink asChild>
            <RouterLink to={'#skills'}>Skills</RouterLink>
          </ChakraLink>
          <ChakraLink asChild>
            <RouterLink to={'#projects'}>Projects</RouterLink>
          </ChakraLink>
          <ChakraLink asChild>
            <RouterLink to={'#certificates'}>Certificates</RouterLink>
          </ChakraLink>
        </Box>
      </HStack>
    </Container>
  )
}

export default Navbar