import { Box, Text } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box textAlign={'center'}>
            <Text fontSize={'sm'} color={'gray.400'}>Copyright © {new Date().getFullYear()} By Ramadhan Fatra</Text>
            <Box fontSize={'sm'} fontWeight={'medium'} color={'gray.600'}>
                <Text>"Tell me if it's ok."</Text>
                <Text fontSize="sm" color="gray.600">
                    "Because I'm not a great programmer; I'm just a good programmer with great habits."
                </Text>
            </Box>
        </Box>
    )
}

export default Footer