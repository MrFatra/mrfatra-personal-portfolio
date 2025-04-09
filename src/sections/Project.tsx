import { Card } from "@/components"
import { Box, Heading, Text } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"

const Project = () => {
    const { t: translate } = useTranslation()

    const projects = [
        {
            title: "Fine Search",
            image: "finesearch.png",
            description: translate("Simple Semantic Search Engine built with Next JS, Drizzle, Vector Upstash, Neon Tech + Postgres."),
            tags: [{
                name: "Next JS",
                color: "black"
            }, {
                name: "Drizzle",
                color: "blue.500"
            }, {
                name: "Vector Upstash",
                color: "yellow.500"
            },
            {
                name: "Neon Tech",
                color: "green.500"
            },
            {
                name: "Postgres",
                color: "blue.500"
            }],
            github: "https://github.com/MrFatra/finesearch"
        },
        {
            title: "Fine Search",
            image: "finesearch.png",
            description: translate("Simple Semantic Search Engine built with Next JS, Drizzle, Vector Upstash, Neon Tech + Postgres."),
            tags: [{
                name: "Next JS",
                color: "black"
            }, {
                name: "Drizzle",
                color: "blue.500"
            }, {
                name: "Vector Upstash",
                color: "yellow.500"
            },
            {
                name: "Neon Tech",
                color: "green.500"
            },
            {
                name: "Postgres",
                color: "blue.500"
            }],
            github: "https://github.com/MrFatra/finesearch"
        },
    ]


    return (
        <Box id="project">
            <Box mb={5}>
                <Heading textStyle={{ base: 'lg', md: 'xl', lg: '3xl' }} fontWeight={'bold'}>{translate("My Projects")}</Heading>
                <Text textStyle={{ smDown: 'sm' }}>{translate("Here are some of my projects that I have worked on.")}</Text>
            </Box>

            <Box
                overflowX="auto"
                gap={5}
                whiteSpace="nowrap"
                py={6}
                display={'flex'}
            >
                {
                    projects.map((project, index) => (
                        <Box
                            key={index}
                            display="inline-block"
                        >
                            <Card
                                title={project.title}
                                image={project.image}
                                description={project.description}
                                tags={project.tags}
                                github={project.github}
                            />
                        </Box>
                    ))
                }
            </Box>
        </Box>
    )
}

export default Project