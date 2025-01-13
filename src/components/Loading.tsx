import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { useEffect, useState, useTransition } from 'react';

const Loading = () => {
    const [isFading, setIsFading] = useState(false);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        const timer = setTimeout(() => {
            startTransition(() => {
                setIsFading(true);
            });
        }, 500);

        return () => clearTimeout(timer);
    }, [startTransition]);

    return (
        <Box
            display="flex"
            flexDirection="column"
            gap={10}
            justifyContent="center"
            alignItems="center"
            height="100vh"
            width="100vw"
            opacity={isFading ? 0 : 1}
            transition="opacity"
            transitionDuration={'moderate'}
            pointerEvents={isPending ? 'none' : 'auto'}
        >
            <Image
                src="me.ico"
                rounded="full"
                animation="spin 5s linear infinite"
            />
            <Box>
                <Heading fontSize="3xl">Loading</Heading>
                <Text mt={2}>Please Wait... 😊</Text>
            </Box>
        </Box>
    );
};

export default Loading;
