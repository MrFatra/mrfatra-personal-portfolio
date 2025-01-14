import { Swiper, SwiperSlide } from 'swiper/react'
import { ShinyText, SplitText } from "@/blocks"
import { Card } from "@/components"
import { Box, Heading, HStack, Text } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import 'swiper/swiper-bundle.css';
import { FiChevronsRight } from 'react-icons/fi'
import { useColorMode } from '@/components/ui/color-mode'

const Project = () => {
    const { t: translate } = useTranslation()
    const { colorMode } = useColorMode()

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
            <HStack justifyContent={'space-between'} alignItems={'end'}>
                <Box mb={5} maxW={{ lg: 'full', md: '400px' }}>
                    <Heading size={'3xl'} fontWeight={'bold'}>
                        <SplitText
                            delay={50}
                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            threshold={0.2}
                            rootMargin="-50px"
                            text={translate("My Projects")}
                        />
                    </Heading>
                    <SplitText
                        delay={0}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        threshold={0.2}
                        rootMargin="-50px"
                        text={translate("Here are some of my projects that I have worked on.")}
                    />
                </Box>
                <ShinyText>
                    <Box display={'flex'} gap={2} mb={5}>
                        <Text fontSize={{ base: 'sm', md: 'xs' }} color={'gray.500'}>{translate("Scroll to see more")}</Text>
                        <FiChevronsRight style={{ marginTop: '2px' }} color={colorMode === 'dark' ? 'white' : 'black'} opacity={.5} />
                    </Box>
                </ShinyText>
            </HStack>

            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    520: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                }}
                pagination={{ clickable: true }}
                className="mySwiper"
            >
                {
                    projects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <Card
                                fadeDelay={index * 200}
                                title={project.title}
                                image={project.image}
                                description={project.description}
                                tags={project.tags}
                                github={project.github}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </Box>
    )
}

export default Project