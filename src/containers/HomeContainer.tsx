import { ColorModeButton, useColorMode } from "@/components/ui/color-mode"
import { Tooltip } from "@/components/ui/tooltip"
import { About, Certificate, Header, Project } from "@/sections"
import { Box, Container, Separator } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { FaDownload } from "react-icons/fa6"

const HomeContainer = () => {
    const { colorMode, setColorMode } = useColorMode()
    const [showDownloadButton, setShowDownloadButton] = useState(false)

    useEffect(() => {
        document.title = 'MrFatra | Portfolio'

        if (typeof window !== "undefined") {
            window.onscroll = () => {
                let currentScrollPos = window.scrollY
                const about = document.querySelector('#about')
                const aboutOffset = about!.getBoundingClientRect().top
                if (currentScrollPos > aboutOffset) {
                    setShowDownloadButton(true)
                }
                else {
                    setShowDownloadButton(false)
                }
            }
        }

    }, [])
    return (
        <Container p={20} display={'flex'} flexDirection={'column'} gap={20} fluid>
            <Box position={'fixed'} top={20} right={3} display={'flex'} flexDirection={'column'} gap={3} zIndex={100}>
                <Tooltip content='Toggle Dark Mode' openDelay={200} closeDelay={200}>
                <Box asChild bg={colorMode === 'dark' ? 'whiteAlpha.300' : 'blackAlpha.300'} p={4} borderRadius={10} zIndex={100} onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}>
                    <ColorModeButton />
                </Box>
                </Tooltip>
                {
                    showDownloadButton &&
                    <Tooltip content='Download CV' openDelay={200} closeDelay={200}>
                        <Box
                            bg={colorMode === 'dark' ? 'whiteAlpha.300' : 'blackAlpha.300'}
                            p={4}
                            borderRadius={10}
                            zIndex={100}
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                        // onClick={() => window.open('/assets/cv.pdf', '_blank')}
                        >
                            <FaDownload />
                        </Box>
                    </Tooltip>
                }
            </Box>
            <Header />
            <Separator variant={"solid"} size={'lg'} />
            <About />
            <Separator variant={"solid"} size={'lg'} />
            <Project />
            <Separator variant={"solid"} size={'lg'} />
            <Certificate />
        </Container >
    )
}

export default HomeContainer