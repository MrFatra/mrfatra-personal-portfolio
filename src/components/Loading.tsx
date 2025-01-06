import { Box, Heading, Image, Text } from '@chakra-ui/react'

const Loading = () => {
    return (
        <Box
            display="flex"
            flexDirection={'column'}
            gap={10}
            justifyContent="center"
            alignItems="center"
            height="100vh"
            width="100vw"
        >
            <Image src='me.ico' rounded={'full'} animation={'spin'} animationDuration={'5s'} animationIterationCount={'infinite'}/>
            <Box>
                <Heading fontSize={'3xl'}>Loading</Heading>
                <Text mt={2}>Please Wait... 😊</Text>
            </Box>
        </Box>
    )
}

export default Loading