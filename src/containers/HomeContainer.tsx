import { LanguageSwitcher } from "@/components"
import { ColorModeButton, useColorMode } from "@/components/ui/color-mode"
import { Tooltip } from "@/components/ui/tooltip"
import { About, Certificate, Contact, Header, Project, Skill } from "@/sections"
import { Box, Container, IconButton, Separator } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa6"
import { MdDownload } from "react-icons/md"

const HomeContainer = () => {
    const { colorMode, setColorMode } = useColorMode()
    const [showDownloadButton, setShowDownloadButton] = useState(false)
    const [showScrollUpButton, setShowScrollUpButton] = useState(false)

    useEffect(() => {
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
                if (currentScrollPos >= document.documentElement.scrollHeight - window.innerHeight) {
                    setShowScrollUpButton(true)
                }
                else {
                    setShowScrollUpButton(false)
                }
            }
        }

    }, [])
    return (
        <Container p={{ smDown: 10, md: 20 }} display={'flex'} flexDirection={'column'} gap={20} fluid>
            <Box position={'fixed'} top={20} right={3} flexDirection={'column'} gap={3} zIndex={100} display={{ smDown: 'none', md: 'flex' }}>
                <Tooltip content='Toggle Dark Mode' openDelay={200} closeDelay={200}>
                    <Box asChild bg={colorMode === 'dark' ? 'whiteAlpha.300' : 'blackAlpha.300'} p={4} borderRadius={10} zIndex={100} onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}>
                        <ColorModeButton />
                    </Box>
                </Tooltip>
                <Tooltip content='Toggle Language' openDelay={200} closeDelay={200}>
                    <Box asChild bg={colorMode === 'dark' ? 'whiteAlpha.300' : 'blackAlpha.300'} p={4} borderRadius={10} zIndex={100} position={'relative'}>
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
                </Tooltip>
                {
                    showDownloadButton &&
                    <Tooltip content='Download CV' openDelay={200} closeDelay={200}>
                        <Box asChild bg={colorMode === 'dark' ? 'whiteAlpha.300' : 'blackAlpha.300'} p={4} borderRadius={10} zIndex={100}>
                            <IconButton
                                variant="ghost"
                                size="sm"
                                css={{
                                    _icon: {
                                        width: "5",
                                        height: "5",
                                    },
                                }}
                            // onClick={() => window.open('/assets/cv.pdf', '_blank')}
                            >
                                <MdDownload />
                            </IconButton>
                        </Box>
                    </Tooltip>
                }
            </Box>
            {
                showScrollUpButton &&
                <Tooltip content='Back to Top' openDelay={200} closeDelay={200}>
                    <Box
                        position={'fixed'}
                        bottom={5}
                        right={3}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        bg={colorMode === 'dark' ? 'whiteAlpha.300' : 'blackAlpha.300'}
                        p={4}
                        borderRadius={10}
                        zIndex={100}
                        cursor={'pointer'}
                        onClick={() => window.scrollTo({ behavior: 'smooth', top: 0 })}>
                        <FaArrowUp />
                    </Box>
                </Tooltip>
            }
            <Header />
            <Separator variant={"solid"} size={'lg'} />
            <About />
            <Separator variant={"solid"} size={'lg'} />
            <Skill />
            <Separator variant={"solid"} size={'lg'} />
            <Project />
            <Separator variant={"solid"} size={'lg'} />
            <Certificate />
            <Separator variant={"solid"} size={'lg'} />
            <Contact />
            <Separator variant={"solid"} size={'lg'} />
        </Container >
    )
}

export default HomeContainer