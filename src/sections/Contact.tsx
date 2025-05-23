import { useColorMode } from "@/components/ui/color-mode"
import { Box, Heading, Link, Text } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import { FaGithub, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa6'

const Contact = () => {
    const { t: translate } = useTranslation()
    const { colorMode } = useColorMode()

    return (
        <Box id="contact" p={10} bg={colorMode === 'dark' ? 'gray.900' : 'gray.200'}>
            <Box textAlign={'center'}>
                <Heading textStyle={{ base: 'lg', mdDown: 'xl', md: 'xl', lg: '3xl' }} mb={5}>{translate("Get In Touch!")}</Heading>
                <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'} gap={3} alignItems={'center'} mb={5}>
                    <Box asChild bg={'blue.500'} p={{ smDown: 2, mdDown: 3, md: 3 }} borderRadius={{ smDown: 8, mdDown: 8, md: 10 }} display={'flex'} gap={2} alignItems={'center'} color={'white'} cursor={'pointer'}>
                        <Link href="https://id.linkedin.com/in/mrfatra" target="_blank" referrerPolicy="no-referrer">
                            <FaLinkedinIn />
                            <Text textStyle={{ smDown: 'sm' }}>LinkedIn</Text>
                        </Link>
                    </Box>
                    <Box asChild bg={'white'} p={{ smDown: 2, mdDown: 3, md: 3 }} borderRadius={{ smDown: 8, mdDown: 8, md: 10 }} display={'flex'} gap={2} alignItems={'center'} color={'black'} cursor={'pointer'}>
                        <Link href="https://github.com/mrfatra" target="_blank" referrerPolicy="no-referrer">
                            <FaGithub />
                            <Text textStyle={{ smDown: 'sm' }}>GitHub</Text>
                        </Link>
                    </Box>
                    <Box bgGradient={'to-r'} gradientFrom={'red.500'} gradientTo={'pink.600'} p={{ smDown: 2, mdDown: 3, md: 3 }} borderRadius={{ smDown: 8, mdDown: 8, md: 10 }} display={'flex'} gap={2} alignItems={'center'} cursor={'pointer'}>
                        <Link href="https://instagram.com/this._fatra" target="_blank" referrerPolicy="no-referrer" color={'white'}>
                            <FaInstagram />
                            <Text textStyle={{ smDown: 'sm' }}>Instagram</Text>
                        </Link>
                    </Box>
                </Box>
                <Text fontSize={'sm'} fontWeight={'medium'} color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}>{translate("And Also:")}</Text>
                <Box
                    asChild
                    p={{ smDown: 2, mdDown: 3, md: 3 }}
                    borderColor={'white'}
                    border={'1px solid'}
                    borderRadius={{ smDown: 8, mdDown: 8, md: 10 }}
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
                        <Text textStyle={{ smDown: 'sm' }} fontWeight={'bold'} letterSpacing={.5}>{translate("Hire Me!")}</Text>
                        <FaEnvelope />
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Contact