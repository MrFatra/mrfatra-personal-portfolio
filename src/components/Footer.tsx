import { useColorMode } from '@/components/ui/color-mode'
import { Box, Text } from '@chakra-ui/react'

const Footer = () => {
    const { colorMode } = useColorMode()

    return (
        <Box id='footer' textAlign={'center'} mb={20}>
            <Text fontSize={'sm'} color={colorMode === 'dark' ? 'gray.400' : 'black'}>Copyright © {new Date().getFullYear()} By MrFatra</Text>
            <Box fontSize={'sm'} fontWeight={'medium'} color={colorMode === 'dark' ? 'gray.600' : 'gray.400'}>
                <Text>"Tell me if it's ok."</Text>
                <Text fontSize="sm">
                    "Because I'm not a great programmer; I'm just a good programmer with great habits."
                </Text>
            </Box>
        </Box>
    )
}

export default Footer