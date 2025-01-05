import { Card } from "@/components"
import { Box, Heading } from "@chakra-ui/react"

const Project = () => {

    const projects = [
        {
            title: "Islam Heritage",
            image: "islam-heritage.png",
            description: "Web Design Dies Natalis - MRT Team 2024.",
            tags: [{
                name: "HTML",
                color: "red.500"
            }, {
                name: "CSS",
                color: "blue.500"
            }, {
                name: "Javascript",
                color: "yellow.500"
            }],
            github: "https://github.com/MrFatra/dies_natalis_mrt"
        },
        {
            title: "Chat App",
            image: "chat-app2.png",
            description: "A minimalistic chat app built with MERN stack.",
            tags: [{
                name: "MongoDB",
                color: "green.700"
            }, {
                name: "Express",
                color: "orange.500"
            }, {
                name: "React JS",
                color: "blue.500"
            },
            {
                name: "Node JS",
                color: "green.500"
            }],
            github: "https://github.com/MrFatra/mern-chat-app"
        },
        {
            title: "Fine Search",
            image: "finesearch.png",
            description: "Simple Semantic Search Engine built with Next JS, Drizzle, Vector Upstash, Neon Tech + Postgres.",
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
                <Heading size={'3xl'} fontWeight={'bold'}>My Projects</Heading>
            </Box>

            <Box display={'flex'} flexWrap={'wrap'} justifyContent={'space-between'} gapY={5}>
                {
                    projects.map((project, index) => (
                        <Card
                            key={index}
                            title={project.title}
                            image={project.image}
                            description={project.description}
                            tags={project.tags}
                            github={project.github}
                        />
                    ))
                }
            </Box>
        </Box>
    )
}

export default Project