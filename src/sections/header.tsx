import { Button } from "@/components/ui/button"
import { Box, Image, Skeleton, Text } from "@chakra-ui/react"
import { TypeAnimation } from "react-type-animation"
import { BiDownload } from "react-icons/bi"
import { useState } from "react"
import { useTranslation } from "react-i18next"

const Header = () => {
    const { t: translation } = useTranslation()
    const [imageLoading, setImageLoading] = useState(true)

    return (
        <Box
            id="header"
            display="flex"
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems="center"
            justifyContent="center"
            px={{ base: 4, md: 12, lg: 24 }}
            pt={{ base: 10, md: 12 }}
            gap={{ base: 8, md: 12 }}
        >
            <Box
                w={{ smDown: '70%', md: '35%', lg: '30%' }}
                display="flex"
                justifyContent="center"
            >
                <Skeleton
                    loading={imageLoading}
                    borderRadius="full"
                    w="full"
                    maxW="200px"
                    aspectRatio={1}
                >
                    <Box
                        bg="whiteAlpha.50"
                        borderRadius="full"
                        border="5px solid"
                        borderColor="gray.300"
                        overflow="hidden"
                        h={{ sm: '50%', md: '180px', lg: '200px' }}
                        w={{ sm: 'full', md: '180px', lg: '200px' }}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Image
                            src="https://avatars.githubusercontent.com/u/80379524?v=4"
                            alt="Profile"
                            loading="lazy"
                            onLoad={() => setImageLoading(false)}
                            w="full"
                            h="full"
                            objectFit="cover"
                        />
                    </Box>
                </Skeleton>
            </Box>

            <Box
                textAlign={{ base: 'center', md: 'left' }}
                w={'100%'}
            >
                <Text
                    fontWeight="bold"
                    fontSize={{ smDown:'2xl', md: '22px', lg: '3xl' }}
                    mb={2}
                >
                    <TypeAnimation
                        sequence={[
                            translation('Hi There! 👋'),
                            800,
                            "Muhamad Ramadhan Fatra",
                            1200,
                        ]}
                        deletionSpeed={60}
                        wrapper="span"
                        cursor={true}
                        style={{ display: 'inline-block' }}
                    />
                </Text>

                <Text
                    fontSize={{ smDown: 16, lg: 20 }}
                    color="gray.500"
                    fontWeight="medium"
                    mb={3}
                >
                    Junior Web/Software Developer
                </Text>

                <Text textStyle={{ smDown: 'sm', md: 'sm', lg: 'base' }}>{translation("Intro")}</Text>

                <Box
                    as={Button}
                    mt={10}
                    display={{ md: 'flex' }}
                    alignItems={'center'}
                    gap={3}
                >
                    <Text>Download CV</Text>
                    <BiDownload />
                </Box>
            </Box>
        </Box>
    )
}

export default Header
