import { ColorModeButton, useColorMode } from "@/components/ui/color-mode"
import { About, Certificate, Header, Project, Skill } from "@/sections"
import { Box, Container, Separator } from "@chakra-ui/react"

const HomeContainer = () => {
    const { colorMode } = useColorMode()
    return (
        <Container p={20} display={'flex'} flexDirection={'column'} gap={20} fluid>
            <Box asChild position={'fixed'} top={20} right={3} bg={colorMode === 'dark' ? 'whiteAlpha.300' : 'blackAlpha.300'} p={4} borderRadius={10} zIndex={100}>
                <ColorModeButton />
            </Box>
            <Header />
            <Separator variant={"solid"} size={'lg'} />
            <About />
            <Separator variant={"solid"} size={'lg'} />
            <Skill />
            <Separator variant={"solid"} size={'lg'} />
            <Project />
            <Separator variant={"solid"} size={'lg'} />
            <Certificate />
        </Container>
    )
}

export default HomeContainer