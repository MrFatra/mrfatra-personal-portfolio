import { Card } from "@/components"
import { Box, Heading, Text } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"

const Certificate = () => {
    const { t: translate } = useTranslation()

    const certificate = [
        {
            title: "Dart Beginner Course",
            image: "dart-beginner.jpg",
            description: translate("Dart Beginner Course by Dicoding."),
            tags: [{
                name: "Dart",
                color: "blue.600"
            }]
        },
        {
            title: "Making Simple App with Flutter",
            image: "flutter-beginner.jpg",
            description: translate("Making Simple App with Flutter by Dicoding."),
            tags: [{
                name: "Dart",
                color: "blue.600"
            },
            {
                name: "Flutter",
                color: "blue.500"
            }]
        },
        {
            title: "Javascript Course",
            image: "javascript.jpg",
            description: translate("Javascript Course by Dicoding."),
            tags: [{
                name: "Javascript",
                color: "yellow.500"
            }],
        },
        {
            title: "Junior Web Developer",
            image: "jwd.jpg",
            description: translate("Vocational School Graduate Academy (VSGA) Junior Web Developer Training by Kominfo."),
            tags: [{
                name: "HTML",
                color: "red.500"
            },
            {
                name: "CSS",
                color: "blue.500"
            },
            {
                name: "Javascript",
                color: "yellow.500"
            },
            {
                name: "PHP",
                color: "purple.500"
            },
            {
                name: "MySQL",
                color: "orange.500"
            }],
        },
    ]

    return (
        <Box id="certificate">
            <Box mb={5}>
                <Heading textStyle={{ base: 'lg', md: 'xl', lg: '3xl' }} fontWeight={'bold'}>{translate("Awards & Certificates")}</Heading>
                <Text textStyle={{ smDown: 'sm' }}>{translate("Here are some of my achievements and certificates.")}</Text>
            </Box>

            <Box
                overflowX="auto"
                gap={5}
                whiteSpace="nowrap"
                py={6}
                display={'flex'}
            >
                {
                    certificate.map((project, index) => (
                        <Box
                            key={index}
                            display="inline-block"
                        >
                            <Card
                                title={project.title}
                                image={project.image}
                                description={project.description}
                                tags={project.tags}
                            />
                        </Box>
                    ))
                }
            </Box>
        </Box >
    )
}

export default Certificate