import { Button } from "@/components/ui/button"
import { Box, Image, Skeleton, Text } from "@chakra-ui/react"
import { TypeAnimation } from "react-type-animation"
import { BiDownload } from "react-icons/bi"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { AnimatedContent } from "@/blocks"

const Header = () => {
    const { t: translation } = useTranslation()
    const [imageLoading, setImageLoading] = useState(true)

    return (
        <Box id="header" display={'flex'}>
            <Box
                w={'30%'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Skeleton
                    asChild
                    loading={imageLoading}
                >
                    <Box
                        bg={'whiteAlpha.50'}
                        h={{ lg: 200, md: 150 }}
                        w={{ lg: 200, md: 150 }}
                        borderRadius={'full'}
                        border={'5px solid'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        display={'flex'}
                        overflow={'hidden'}
                    >
                        <Image src="https://avatars.githubusercontent.com/u/80379524?v=4"
                            loading='lazy'
                            onLoad={() => setImageLoading(!imageLoading)}
                            w={'full'}
                            h={'full'}
                            zIndex={'auto'}
                        />
                    </Box>
                </Skeleton>
            </Box>
            <Box
                w={'70%'}
            >
                <Box
                asChild
                    textStyle={{ base: '2xl' }}
                >
                    <TypeAnimation
                        sequence={[
                            translation('Hi There! 👋'),
                            500,
                            "Muhamad Ramadhan Fatra",
                            1000,
                        ]}
                        deletionSpeed={50}
                        wrapper="span"
                        cursor={true}
                        style={{ display: 'inline-block', fontWeight: 'bold', marginBottom: 15 }}
                    />
                </Box>
                <Text textStyle={{ base: 'lg', md: 'lg', lg: 'lg' }} color={'gray.400'} mb={5} fontWeight={'medium'}>
                    Fullstack Developer
                </Text>
                <Text>{translation("Intro")}</Text>
                <Box display={'inline-flex'}>
                    <AnimatedContent delay={500}>
                        <Box
                            as={Button}
                            mt={10}
                            display={'flex'}
                            alignItems={'center'}
                            gap={3}
                        >
                            <Text>Download CV</Text>
                            <BiDownload />
                        </Box>
                    </AnimatedContent>
                </Box>
            </Box>
        </Box >
    )
}

export default Header