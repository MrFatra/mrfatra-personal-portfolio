import { SkillCard } from "@/components"
import { useColorMode } from "@/components/ui/color-mode"
import { Box, Heading, Image, Text } from "@chakra-ui/react"
import { SiChakraui, SiCss3, SiDart, SiExpress, SiFigma, SiFlutter, SiHtml5, SiJavascript, SiLaravel, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPhp, SiPostgresql, SiReact, SiShadcnui, SiTailwindcss } from "react-icons/si"

const Skill = () => {
    const { colorMode } = useColorMode()

    const fundamental = [
        {
            icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" width={7} height={7} fit={'contain'} />,
            title: "HTML",
        },
        {
            icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" width={7} height={7} fit={'contain'} />,
            title: "CSS",
        },
        {
            icon: <SiJavascript size={25} color="#f7df1d" style={{ backgroundColor: 'black' }} />,
            title: "JavaScript",
        },
        {
            icon: <Image src="https://cdn.prod.website-files.com/62865614b39c464b76d339aa/66ba60017e4879e84bd4d83c_Node.svg" width={7} height={7} fit={'contain'} />,
            title: "Node.js",
        },
        {
            icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/9/91/Dart-logo-icon.svg" width={7} height={7} fit={'contain'} />,
            title: "Dart",
        },
        {
            icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" width={7} height={7} fit={'contain'} />,
            title: "PHP",
        }
    ]

    const frontend = [
        {
            icon: <SiReact size={25} color="#62dafc" />,
            title: "React.js",
        },
        {
            icon: <SiTailwindcss size={25} color="#00c6ff" />,
            title: "Tailwind CSS",
        },
        {
            icon: <SiLaravel size={25} color="#ff2d20" />,
            title: "Laravel",
        },
        {
            icon: <SiNextdotjs size={25} color={colorMode === 'dark' ? 'white' : 'black'} />,
            title: "Next.js",
        },
        {
            icon: <SiShadcnui size={25} color={colorMode === 'dark' ? 'white' : 'black'} />,
            title: "Shadcn UI",
        },
        {
            icon: <SiChakraui size={25} color="#31c2b5" />,
            title: "Chakra UI",
        }
    ]

    const backend = [
        {
            icon: <SiExpress size={25} color={colorMode === 'dark' ? 'white' : 'black'} />,
            title: "Express.js",
        },
        {
            icon: <SiNextdotjs size={25} color={colorMode === 'dark' ? 'white' : 'black'} />,
            title: "Next.js",
        },
        {
            icon: <SiLaravel size={25} color="#ff2d20" />,
            title: "Laravel",
        },
    ]

    const mobile = [
        {
            icon: <SiReact size={25} color="#62dafc" />,
            title: "React Native"
        },
        {
            icon: <Image src="https://cdn-images-1.medium.com/v2/resize:fit:1200/1*5-aoK8IBmXve5whBQM90GA.png" width={7} height={7} fit={'contain'} />,
            title: "Flutter",
        },
    ]

    const database = [
        {
            icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Database-mysql.svg" width={7} height={7} fit={'contain'} />,
            title: "MySQL"
        },
        {
            icon: <SiMongodb size={25} color="#18ac54" />,
            title: "MongoDB",
        },
        {
            icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" width={7} height={7} fit={'contain'} />,
            title: "PostgreSQL",
        },
    ]

    const other = [
        {
            icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" width={7} height={7} fit={'contain'} />,
            title: "Figma"
        }
    ]

    return (
        <Box display={'flex'} flexDirection={'column'} gap={5}>
            <Box mb={4}>
                <Heading size={'3xl'} fontWeight={'bold'}>My Skills</Heading>
                <Text>Here are some of the technologies I have experience with.</Text>
            </Box>

            <Box display={'flex'} flexDirection={'column'} gap={20}>
                <Box display={'flex'} flexDirection={'column'} gap={4}>
                    <Box textAlign={'center'}>
                        <Heading size={'lg'}>Fundamental</Heading>
                        <Text>These are the basic skills that I have mastered.</Text>
                    </Box>
                    <Box display={'grid'} gridTemplateColumns={'repeat(auto-fill, minmax(200px, 1fr))'} gap={5}>
                        {
                            fundamental.map((skill, index) => (
                                <SkillCard key={index} icon={skill.icon} title={skill.title} />
                            ))
                        }
                    </Box>
                </Box>

                <Box display={'flex'} gap={4} alignItems={'center'}>
                    <Box w={'50%'}>
                        <Heading size={'lg'}>Frontend</Heading>
                        <Text color={'gray.500'}>These are the frontend development technologies that I have mastered.</Text>
                        <Text mt={5} fontSize={'sm'} color={'gray.500'}>Scroll to see more</Text>
                    </Box>
                    <Box
                        w={'50%'}
                        bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'}
                        borderRadius={10}
                        p={5}
                        display="grid"
                        gridTemplateColumns="repeat(4, minmax(30%, 1fr))"
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
                                <SkillCard key={index} icon={skill.icon} title={skill.title} />
                            ))
                        }
                    </Box>
                </Box>

                <Box display={'flex'} gap={4} alignItems={'center'}>
                    <Box w={'50%'}>
                        <Heading size={'lg'}>Backend</Heading>
                        <Text color={'gray.500'}>These are the backend development technologies that I have mastered.</Text>
                        <Text mt={5} fontSize={'sm'} color={'gray.500'}>Scroll to see more</Text>
                    </Box>
                    <Box
                        w={'50%'}
                        bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'}
                        borderRadius={10}
                        p={5}
                        display="grid"
                        gridTemplateColumns="repeat(4, minmax(30%, 1fr))"
                        overflowX={backend.length >= 4 ? 'auto' : 'hidden'}
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
                                <SkillCard key={index} icon={skill.icon} title={skill.title} />
                            ))
                        }
                    </Box>
                </Box>

                <Box display={'flex'} flexDirection={'column'} gap={4}>
                    <Box textAlign={'center'}>
                        <Heading size={'lg'} textAlign={'center'}>Mobile</Heading>
                        <Text>These are the mobile development technologies that I have mastered.</Text>
                    </Box>
                    <Box
                        bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'}
                        borderRadius={10}
                        p={5}
                        display="grid"
                        gridTemplateColumns="repeat(4, minmax(30%, 1fr))"
                        gap={5}
                        overflowX="auto"
                        whiteSpace="nowrap"
                        className="no-scrollbar"
                        style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', paddingBottom: '25px' }}
                    >
                        {
                            mobile.map((skill, index) => (
                                <SkillCard key={index} icon={skill.icon} title={skill.title} />
                            ))
                        }
                    </Box>
                </Box>

                <Box display={'flex'} flexDirection={'column'} gap={4}>
                    <Box textAlign={'center'}>
                        <Heading size={'lg'} textAlign={'center'}>Database</Heading>
                        <Text>These are the database technologies that I have mastered.</Text>
                    </Box>
                    <Box
                        bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'}
                        borderRadius={10}
                        p={5}
                        display="grid"
                        gridTemplateColumns="repeat(4, minmax(30%, 1fr))"
                        gap={5}
                        overflowX="auto"
                        whiteSpace="nowrap"
                        className="no-scrollbar"
                        style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', paddingBottom: '25px' }}
                    >
                        {
                            database.map((skill, index) => (
                                <SkillCard key={index} icon={skill.icon} title={skill.title} />
                            ))
                        }
                    </Box>
                </Box>

                <Box display={'flex'} flexDirection={'column'} gap={4}>
                    <Box textAlign={'center'}>
                        <Heading size={'lg'} textAlign={'center'}>Other</Heading>
                        <Text>These are the other technologies that I have mastered.</Text>
                    </Box>
                    <Box
                        bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'}
                        borderRadius={10}
                        p={5}
                        display="grid"
                        gridTemplateColumns="repeat(4, minmax(30%, 1fr))"
                        gap={5}
                        overflowX="auto"
                        whiteSpace="nowrap"
                        className="no-scrollbar"
                        style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', paddingBottom: '25px' }}
                    >
                        {
                            other.map((skill, index) => (
                                <SkillCard key={index} icon={skill.icon} title={skill.title} />
                            ))
                        }
                    </Box>
                </Box>

            </Box>

        </Box >
    )
}

export default Skill