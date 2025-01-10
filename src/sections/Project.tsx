import { FadeContent, SplitText } from "@/blocks"
import { Card } from "@/components"
import { Box, Heading, Text } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"

const Project = () => {
    const { t: translate } = useTranslation()

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
            description: translate("A minimalistic chat app built with MERN stack."),
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
                <Heading size={'3xl'} fontWeight={'bold'}>
                    <SplitText
                        delay={50}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                        text={translate("My Projects")}
                    />
                </Heading>
                <SplitText
                    delay={0}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                    text={translate("Here are some of my projects that I have worked on.")}
                />
            </Box>

            <Box display={'flex'} flexWrap={'wrap'} justifyContent={'space-between'} gapY={5}>
                {
                    projects.map((project, index) => (
                        <Card
                            key={index}
                            fade={{ delay: index * 200, isFade: true }}
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