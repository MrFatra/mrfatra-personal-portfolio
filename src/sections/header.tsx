import { Button } from "@/components/ui/button"
import { Box, Image, Text } from "@chakra-ui/react"
import { TypeAnimation } from "react-type-animation"
import { BiDownload } from "react-icons/bi"

const Header = () => {

    return (
        <Box id="header" display={'flex'}>
            <Box
                w={'80%'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Image src="https://avatars.githubusercontent.com/u/80379524?v=4"
                    h={200}
                    display={'flex'}
                    borderRadius={'full'}
                    border={'5px solid'}
                    alignItems={'center'}
                    justifyContent={'center'}
                />
            </Box>
            <Box>
                <Box
                    textStyle={{ base: 'lg', md: '2xl', lg: '4xl' }}
                >
                    <TypeAnimation
                        sequence={[
                            "Hi There! 👋",
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
                <Text fontSize={24} color={'gray.400'} mb={5} fontWeight={'medium'}>
                    Fullstack Developer
                </Text>
                <Text textStyle={{ base: 'base' }}>An enthusiastic and motivated Informatics Engineering graduate with a strong passion for web development. Skilled in developing websites using modern technologies such as Next.js and React.js. Supported by hands-on experience from an internship as a Frontend Developer and various web development projects.</Text>
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
            </Box>
        </Box>
    )
}

export default Header