import { FadeContent, ShinyText, SplitText } from "@/blocks"
import { SkillCard } from "@/components"
import { useColorMode } from "@/components/ui/color-mode"
import { Box, Heading, Image, Text } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import { FiChevronsRight } from "react-icons/fi"
import { SiChakraui, SiExpress, SiJavascript, SiLaravel, SiMongodb, SiNextdotjs, SiReact, SiShadcnui, SiTailwindcss } from "react-icons/si"
import { Swiper, SwiperSlide } from "swiper/react"

const Skill = () => {
    const { t: translate } = useTranslation()
    const { colorMode } = useColorMode()

    const fundamental = [
        {
            icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" width={7} height={7} fit={'contain'} />,
            title: "HTML",
            color: 'orange.500'
        },
        {
            icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" width={7} height={7} fit={'contain'} />,
            title: "CSS",
            color: 'blue.500'
        },
        {
            icon: <SiJavascript size={25} color="#f7df1d" style={{ backgroundColor: 'black' }} />,
            title: "JavaScript",
            color: 'yellow.400'
        },
        {
            icon: <Image src="https://cdn.prod.website-files.com/62865614b39c464b76d339aa/66ba60017e4879e84bd4d83c_Node.svg" width={7} height={7} fit={'contain'} />,
            title: "Node.js",
            color: 'green.500'
        },
        {
            icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/9/91/Dart-logo-icon.svg" width={7} height={7} fit={'contain'} />,
            title: "Dart",
            color: 'blue.500'
        },
        {
            icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" width={7} height={7} fit={'contain'} />,
            title: "PHP",
            color: 'purple.500'
        }
    ]

    const frontend = [
        {
            icon: <SiReact size={25} color="#62dafc" />,
            title: "React.js",
            color: '#62dafc'
        },
        {
            icon: <SiTailwindcss size={25} color="#00c6ff" />,
            title: "Tailwind CSS",
            color: '#00c6ff'
        },
        {
            icon: <SiLaravel size={25} color="#ff2d20" />,
            title: "Laravel",
            color: '#ff2d20'
        },
        {
            icon: <SiNextdotjs size={25} color={colorMode === 'dark' ? 'white' : 'black'} />,
            title: "Next.js",
            color: colorMode === 'dark' ? 'white' : 'black'
        },
        {
            icon: <SiShadcnui size={25} color={colorMode === 'dark' ? 'white' : 'black'} />,
            title: "Shadcn UI",
            color: colorMode === 'dark' ? 'white' : 'black'
        },
        {
            icon: <SiChakraui size={25} color="#31c2b5" />,
            title: "Chakra UI",
            color: '#31c2b5'
        },
        {
            icon: <Image src="https://img.daisyui.com/images/daisyui-logo/daisyui-logomark.svg" width={7} height={7} fit={'contain'} />,
            title: "Daisy UI",
            color: '#1ad1a5'
        }
    ]

    const backend = [
        {
            icon: <SiExpress size={25} color={colorMode === 'dark' ? 'white' : 'black'} />,
            title: "Express.js",
            color: colorMode === 'dark' ? 'white' : 'black'
        },
        {
            icon: <SiNextdotjs size={25} color={colorMode === 'dark' ? 'white' : 'black'} />,
            title: "Next.js",
            color: colorMode === 'dark' ? 'white' : 'black'
        },
        {
            icon: <SiLaravel size={25} color="#ff2d20" />,
            title: "Laravel",
            color: '#ff2d20'
        },
    ]

    const mobile = [
        {
            icon: <SiReact size={25} color="#62dafc" />,
            title: "React Native",
            color: '#62dafc'
        },
        {
            icon: <Image src="https://cdn-images-1.medium.com/v2/resize:fit:1200/1*5-aoK8IBmXve5whBQM90GA.png" width={7} height={7} fit={'contain'} />,
            title: "Flutter",
            color: 'blue.500'
        },
    ]

    const database = [
        {
            icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Database-mysql.svg" width={7} height={7} fit={'contain'} />,
            title: "MySQL",
            color: 'orange.500'
        },
        {
            icon: <SiMongodb size={25} color="#18ac54" />,
            title: "MongoDB",
            color: '#18ac54'
        },
        {
            icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" width={7} height={7} fit={'contain'} />,
            title: "PostgreSQL",
            color: 'blue.500'
        },
    ]

    const other = [
        {
            icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" width={7} height={7} fit={'contain'} />,
            title: "Figma",
            color: 'red.400'
        }
    ]

    return (
        <Box id="skill" display={'flex'} flexDirection={'column'} gap={5}>
            <Box mb={10} textAlign={'center'}>
                <Heading size={'3xl'} fontWeight={'bold'}>
                    <SplitText
                        delay={50}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        threshold={0.2}
                        rootMargin="-50px"
                        text={translate("My Skills")}
                    />
                </Heading>
                <SplitText
                    delay={0}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.2}
                    rootMargin="-50px"
                    text={translate("Here are some of the technologies I have experience with.")}
                />
            </Box>

            <Box display={'flex'} flexDirection={'column'} gap={20}>

                <Box display={'flex'} gap={4} alignItems={'center'}>
                    <Box w={'50%'}>
                        <FadeContent>
                            <Heading size={'lg'}>Fundamental</Heading>
                        </FadeContent>
                        <ShinyText>
                            <Text color={'gray.500'}>{translate("These are the basic skills that i have mastered.")}</Text>
                        </ShinyText>
                        <Box as={ShinyText} display={'flex'} mt={5} alignItems={'center'} gap={2}>
                            <Text fontSize={{ base: 'sm', md: 'xs' }} color={'gray.500'}>{translate("Scroll to see more")}</Text>
                            <FiChevronsRight style={{ marginTop: '2px' }} color={colorMode === 'dark' ? 'white' : 'black'} opacity={.5} />
                        </Box>
                    </Box>
                    <Box
                        w={'1/2'}
                        bg={colorMode === 'dark' ? 'gray.900' : 'gray.200'}
                        borderRadius={10}
                        p={5}
                    >
                        <FadeContent>
                            <Swiper
                                spaceBetween={10}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                    },
                                    1440: {
                                        slidesPerView: 4,
                                    }
                                }}
                            >
                                {
                                    fundamental.map((skill, index) => (
                                        <SwiperSlide key={index} style={{ width: '120px' }}>
                                            <SkillCard
                                                icon={skill.icon}
                                                title={skill.title}
                                                color={skill.color}
                                            />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>

                            {/* <Box
                                bg={colorMode === 'dark' ? 'gray.900' : 'gray.200'}
                                borderRadius={10}
                                p={5}
                                display="flex"
                                overflowX={'auto'}
                                gap={5}
                                className="no-scrollbar"
                                style={{
                                    WebkitOverflowScrolling: 'touch',
                                    scrollbarWidth: 'none',
                                    paddingBottom: '25px',
                                }}
                            >

                                {
                                    fundamental.map((skill, index) => (
                                        <SkillCard key={index} icon={skill.icon} title={skill.title} color={skill.color} />
                                    ))
                                }
                            </Box> */}
                        </FadeContent>
                    </Box>
                </Box>

                <Box display={'flex'} gap={4} alignItems={'center'}>
                    <Box w={'50%'}>
                        <FadeContent>
                            <Heading size={'lg'}>
                                Frontend
                            </Heading>
                        </FadeContent>
                        <ShinyText>
                            <Text color={'gray.500'}>{translate("These are the frontend development technologies that I have mastered.")}</Text>
                        </ShinyText>
                        <Box as={ShinyText} display={'flex'} mt={5} alignItems={'center'} gap={2}>
                            <Text fontSize={{ base: 'sm', md: 'xs' }} color={'gray.500'}>{translate("Scroll to see more")}</Text>
                            <FiChevronsRight style={{ marginTop: '2px' }} color={colorMode === 'dark' ? 'white' : 'black'} opacity={.5} />
                        </Box>
                    </Box>
                    <Box
                        w={'50%'}
                        bg={colorMode === 'dark' ? 'gray.900' : 'gray.200'}
                        borderRadius={10}
                        p={5}
                    >
                        <FadeContent>
                            <Swiper
                                spaceBetween={10}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                    },
                                    1440: {
                                        slidesPerView: 4,
                                    }
                                }}
                            >
                                {
                                    frontend.map((skill, index) => (
                                        <SwiperSlide key={index}>
                                            <SkillCard
                                                icon={skill.icon}
                                                title={skill.title}
                                                color={skill.color}
                                            />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>

                            {/* <Box
                                bg={colorMode === 'dark' ? 'gray.900' : 'gray.200'}
                                borderRadius={10}
                                p={5}
                                display="flex"
                                overflowX={'auto'}
                                gap={5}
                                className="no-scrollbar"
                                style={{
                                    WebkitOverflowScrolling: 'touch',
                                    scrollbarWidth: 'none',
                                    paddingBottom: '25px',
                                }}
                            >
                                {
                                    frontend.map((skill, index) => (
                                        <SkillCard key={index} icon={skill.icon} title={skill.title} color={skill.color} />
                                    ))
                                }
                            </Box> */}
                        </FadeContent>
                    </Box>
                </Box>

                <Box display={'flex'} gap={4} alignItems={'center'}>
                    <Box w={'50%'}>
                        <FadeContent>
                            <Heading size={'lg'}>Backend</Heading>
                        </FadeContent>
                        <ShinyText>
                            <Text color={'gray.500'}>{translate("These are the backend development technologies that I have mastered.")}</Text>
                        </ShinyText>
                        <Box as={ShinyText} display={'flex'} mt={5} alignItems={'center'} gap={2}>
                            <Text fontSize={{ base: 'sm', md: 'xs' }} color={'gray.500'}>{translate("Scroll to see more")}</Text>
                            <FiChevronsRight style={{ marginTop: '2px' }} color={colorMode === 'dark' ? 'white' : 'black'} opacity={.5} />
                        </Box>
                    </Box>
                    <Box
                        w={'50%'}
                        bg={colorMode === 'dark' ? 'gray.900' : 'gray.200'}
                        borderRadius={10}
                        p={5}
                    >
                        <FadeContent>
                            <Swiper
                                spaceBetween={10}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                    },
                                    1440: {
                                        slidesPerView: 4,
                                    }
                                }}
                            >
                                {
                                    backend.map((skill, index) => (
                                        <SwiperSlide key={index}>
                                            <SkillCard
                                                icon={skill.icon}
                                                title={skill.title}
                                                color={skill.color}
                                            />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>

                            {/* <Box
                                bg={colorMode === 'dark' ? 'gray.900' : 'gray.200'}
                                borderRadius={10}
                                p={5}
                                display="flex"
                                overflowX={'auto'}
                                gap={5}
                                className="no-scrollbar"
                                style={{
                                    WebkitOverflowScrolling: 'touch',
                                    scrollbarWidth: 'none',
                                    paddingBottom: '25px',
                                }}
                            >
                                {
                                    backend.map((skill, index) => (
                                        <SkillCard key={index} icon={skill.icon} title={skill.title} color={skill.color} />
                                    ))
                                }
                            </Box> */}
                        </FadeContent>
                    </Box>
                </Box>

                <Box display={'flex'} gap={4} alignItems={'center'}>
                    <Box w={'50%'}>
                        <FadeContent>
                            <Heading size={'lg'}>Mobile</Heading>
                        </FadeContent>
                        <ShinyText>
                            <Text color={'gray.500'}>{translate("These are the mobile development technologies that I have mastered.")}</Text>
                        </ShinyText>
                        <Box as={ShinyText} display={'flex'} mt={5} alignItems={'center'} gap={2}>
                            <Text fontSize={{ base: 'sm', md: 'xs' }} color={'gray.500'}>{translate("Scroll to see more")}</Text>
                            <FiChevronsRight style={{ marginTop: '2px' }} color={colorMode === 'dark' ? 'white' : 'black'} opacity={.5} />
                        </Box>
                    </Box>
                    <Box
                        w={'50%'}
                        bg={colorMode === 'dark' ? 'gray.900' : 'gray.200'}
                        borderRadius={10}
                        p={5}
                    >
                        <FadeContent>
                            <Swiper
                                spaceBetween={10}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                    },
                                    1440: {
                                        slidesPerView: 4,
                                    }
                                }}
                            >
                                {
                                    mobile.map((skill, index) => (
                                        <SwiperSlide key={index}>
                                            <SkillCard
                                                icon={skill.icon}
                                                title={skill.title}
                                                color={skill.color}
                                            />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>



                            {/* <Box
                                bg={colorMode === 'dark' ? 'gray.900' : 'gray.200'}
                                borderRadius={10}
                                p={5}
                                display="flex"
                                overflowX={'auto'}
                                gap={5}
                                className="no-scrollbar"
                                style={{
                                    WebkitOverflowScrolling: 'touch',
                                    scrollbarWidth: 'none',
                                    paddingBottom: '25px',
                                }}
                            >
                                {
                                    mobile.map((skill, index) => (
                                        <SkillCard key={index} icon={skill.icon} title={skill.title} color={skill.color} />
                                    ))
                                }
                            </Box> */}
                        </FadeContent>
                    </Box>
                </Box>

                <Box display={'flex'} gap={4} alignItems={'center'}>
                    <Box w={'50%'}>
                        <FadeContent>
                            <Heading size={'lg'}>Database</Heading>
                        </FadeContent>
                        <ShinyText>
                            <Text color={'gray.500'}>{translate("These are the database technologies that I have mastered.")}</Text>
                        </ShinyText>
                        <Box as={ShinyText} display={'flex'} mt={5} alignItems={'center'} gap={2}>
                            <Text fontSize={{ base: 'sm', md: 'xs' }} color={'gray.500'}>{translate("Scroll to see more")}</Text>
                            <FiChevronsRight style={{ marginTop: '2px' }} color={colorMode === 'dark' ? 'white' : 'black'} opacity={.5} />
                        </Box>
                    </Box>
                    <Box
                        w={'50%'}
                        bg={colorMode === 'dark' ? 'gray.900' : 'gray.200'}
                        borderRadius={10}
                        p={5}
                    >
                        <FadeContent>
                            <Swiper
                                spaceBetween={10}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                    },
                                    1440: {
                                        slidesPerView: 4,
                                    }
                                }}
                            >
                                {
                                    database.map((skill, index) => (
                                        <SwiperSlide key={index}>
                                            <SkillCard
                                                icon={skill.icon}
                                                title={skill.title}
                                                color={skill.color}
                                            />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>


                            {/* <Box
                                bg={colorMode === 'dark' ? 'gray.900' : 'gray.200'}
                                borderRadius={10}
                                p={5}
                                display="flex"
                                overflowX={'auto'}
                                gap={5}
                                className="no-scrollbar"
                                style={{
                                    WebkitOverflowScrolling: 'touch',
                                    scrollbarWidth: 'none',
                                    paddingBottom: '25px',
                                }}
                            >
                                {
                                    database.map((skill, index) => (
                                        <SkillCard key={index} icon={skill.icon} title={skill.title} color={skill.color} />
                                    ))
                                }
                            </Box> */}
                        </FadeContent>
                    </Box>
                </Box>

                <Box display={'flex'} gap={4} alignItems={'center'}>
                    <Box w={'50%'}>
                        <FadeContent>
                            <Heading size={'lg'}>{translate("Other")}</Heading>
                        </FadeContent>
                        <ShinyText>
                            <Text color={'gray.500'}>{translate("These are the other technologies that I have mastered.")}</Text>
                        </ShinyText>
                        <Box as={ShinyText} display={'flex'} mt={5} alignItems={'center'} gap={2}>
                            <Text fontSize={{ base: 'sm', md: 'xs' }} color={'gray.500'}>{translate("Scroll to see more")}</Text>
                            <FiChevronsRight style={{ marginTop: '2px' }} color={colorMode === 'dark' ? 'white' : 'black'} opacity={.5} />
                        </Box>
                    </Box>
                    <Box
                        w={'50%'}
                        bg={colorMode === 'dark' ? 'gray.900' : 'gray.200'}
                        borderRadius={10}
                        p={5}
                    >
                        <FadeContent>
                            <Swiper
                                spaceBetween={10}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                    },
                                    1440: {
                                        slidesPerView: 4,
                                    }
                                }}
                            >
                                {
                                    other.map((skill, index) => (
                                        <SwiperSlide key={index}>
                                            <SkillCard
                                                icon={skill.icon}
                                                title={skill.title}
                                                color={skill.color}
                                            />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>

                            {/* <Box
                                bg={colorMode === 'dark' ? 'gray.900' : 'gray.200'}
                                borderRadius={10}
                                p={5}
                                display="flex"
                                overflowX={'auto'}
                                gap={5}
                                className="no-scrollbar"
                                style={{
                                    WebkitOverflowScrolling: 'touch',
                                    scrollbarWidth: 'none',
                                    paddingBottom: '25px',
                                }}
                            >
                                {
                                    other.map((skill, index) => (
                                        <SkillCard key={index} icon={skill.icon} title={skill.title} color={skill.color} />
                                    ))
                                }
                            </Box> */}
                        </FadeContent>
                    </Box>
                </Box>

            </Box>

        </Box >
    )
}

export default Skill