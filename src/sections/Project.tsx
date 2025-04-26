import { Card } from "@/components"
import { Box, Heading, Text } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import data from '@/data/projects.json'

const Project = () => {
    const { t: translate } = useTranslation()

    return (
        <Box id="project">
            <Box mb={5} textAlign={{ smDown: 'center' }}>
                <Heading textStyle={{ base: 'lg', mdDown: 'xl', md: 'xl', lg: '3xl' }} fontWeight={'bold'}>{translate("My Projects")}</Heading>
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
                    data.projects.map((project, index) => (
                        <Box
                            key={index}
                            display="inline-block"
                        >
                            <Card
                                title={project.title}
                                image={project.image}
                                description={translate(project.description)}
                                tags={project.tags}
                            // github={project.github}
                            />
                        </Box>
                    ))
                }
            </Box>
        </Box>
    )
}

export default Project