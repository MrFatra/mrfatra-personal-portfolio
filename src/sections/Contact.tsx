import { useColorMode } from "@/components/ui/color-mode"
import { Box, Heading, Text } from "@chakra-ui/react"
import { FaGithub, FaInstagram, FaLinkedinIn, FaArrowRight } from 'react-icons/fa6'

const Contact = () => {
    const { colorMode } = useColorMode()

    return (
        <Box p={10} bg={colorMode === 'dark' ? 'gray.900' : 'gray.200'}>
            <Box textAlign={'center'}>
                <Heading mb={5}>Find Me Here!</Heading>
                <Box display={'flex'} justifyContent={'center'} gap={3} alignItems={'center'} mb={5}>
                    <Box bg={'blue.500'} p={3} borderRadius={10} display={'flex'} gap={2} alignItems={'center'} color={'white'} cursor={'pointer'}>
                        <FaLinkedinIn />
                        <Text>LinkedIn</Text>
                    </Box>
                    <Box bg={'white'} p={3} borderRadius={10} display={'flex'} gap={2} alignItems={'center'} color={'black'} cursor={'pointer'}>
                        <FaGithub />
                        <Text>GitHub</Text>
                    </Box>
                    <Box bgGradient={'to-r'} gradientFrom={'red.500'} gradientTo={'pink.600'} p={3} borderRadius={10} display={'flex'} gap={2} alignItems={'center'} color={'white'} cursor={'pointer'}>
                        <FaInstagram />
                        <Text>Instagram</Text>
                    </Box>
                </Box>
                <Text fontSize={'sm'} fontWeight={'medium'} color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}>And Also:</Text>
                <Box
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
                        bg: colorMode === 'dark' ? 'gray.700' : 'gray.400',
                    }}>
                    <Text fontWeight={'bold'} letterSpacing={.5}>Hire Me!</Text>
                    <FaArrowRight />
                </Box>
            </Box>
        </Box>
    )
}

export default Contact