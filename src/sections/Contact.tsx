import { useColorMode } from "@/components/ui/color-mode"
import { Box, Heading, Link, Text } from "@chakra-ui/react"
import { FaGithub, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa6'

const Contact = () => {
    const { colorMode } = useColorMode()

    return (
        <Box id="contact" p={10} bg={colorMode === 'dark' ? 'gray.900' : 'gray.200'}>
            <Box textAlign={'center'}>
                <Heading mb={5}>Find Me Here!</Heading>
                <Box display={'flex'} justifyContent={'center'} gap={3} alignItems={'center'} mb={5}>
                    <Box asChild bg={'blue.500'} p={3} borderRadius={10} display={'flex'} gap={2} alignItems={'center'} color={'white'} cursor={'pointer'}>
                        <Link href="https://id.linkedin.com/in/mrfatra" target="_blank" referrerPolicy="no-referrer">
                            <FaLinkedinIn />
                            <Text>LinkedIn</Text>
                        </Link>
                    </Box>
                    <Box asChild bg={'white'} p={3} borderRadius={10} display={'flex'} gap={2} alignItems={'center'} color={'black'} cursor={'pointer'}>
                        <Link href="https://github.com/mrfatra" target="_blank" referrerPolicy="no-referrer">
                            <FaGithub />
                            <Text>GitHub</Text>
                        </Link>
                    </Box>
                    <Box bgGradient={'to-r'} gradientFrom={'red.500'} gradientTo={'pink.600'} p={3} borderRadius={10} display={'flex'} gap={2} alignItems={'center'} cursor={'pointer'}>
                        <Link href="https://instagram.com/this._fatra" target="_blank" referrerPolicy="no-referrer" color={'white'}>
                            <FaInstagram />
                            <Text>Instagram</Text>
                        </Link>
                    </Box>
                </Box>
                <Text fontSize={'sm'} fontWeight={'medium'} color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}>And Also:</Text>
                <Box
                    asChild
                    p={3}
                    borderColor={'white'}
                    border={'1px solid'}
                    borderRadius={10}
                    display={'inline-flex'}
                    gap={2}
                    alignItems={'center'}
                    justifyContent={'center'}
                    mt={5}
                    cursor={'pointer'}
                    bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'}
                    _hover={{
                        bg: colorMode === 'dark' ? 'gray.700' : 'gray.300',
                        transition: 'all 0.3s'
                    }}>
                    <Link href={'mailto:fatraramadhann2004@gmail.com'} variant={'plain'}>
                        <Text fontWeight={'bold'} letterSpacing={.5}>Hire Me!</Text>
                        <FaEnvelope />
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Contact