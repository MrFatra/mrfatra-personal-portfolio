import { SkillCard } from "@/components"
import { useColorMode } from "@/components/ui/color-mode"
import { Box, Heading, Image } from "@chakra-ui/react"
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
                <Heading size={'3xl'}>My Skills</Heading>
            </Box>

            <Box display={'flex'} flexDirection={'column'} gap={20}>
                <Box display={'flex'} flexDirection={'column'} gap={4}>
                    <Heading size={'lg'} textAlign={'center'}>Fundamental</Heading>
                    <Box display={'grid'} gridTemplateColumns={'repeat(auto-fill, minmax(200px, 1fr))'} gap={5}>
                        {
                            fundamental.map((skill, index) => (
                                <SkillCard key={index} icon={skill.icon} title={skill.title} />
                            ))
                        }
                    </Box>
                </Box>

                <Box display={'flex'} flexDirection={'column'} gap={4}>
                    <Heading size={'lg'} textAlign={'center'}>Frontend</Heading>
                    <Box display={'grid'} gridTemplateColumns={'repeat(auto-fill, minmax(200px, 1fr))'} gap={5}>
                        {
                            frontend.map((skill, index) => (
                                <SkillCard key={index} icon={skill.icon} title={skill.title} />
                            ))
                        }
                    </Box>
                </Box>

                <Box display={'flex'} flexDirection={'column'} gap={4}>
                    <Heading size={'lg'} textAlign={'center'}>Backend</Heading>
                    <Box display={'grid'} gridTemplateColumns={'repeat(auto-fill, minmax(200px, 1fr))'} gap={5}>
                        {
                            backend.map((skill, index) => (
                                <SkillCard key={index} icon={skill.icon} title={skill.title} />
                            ))
                        }
                    </Box>
                </Box>

                <Box display={'flex'} flexDirection={'column'} gap={4}>
                    <Heading size={'lg'} textAlign={'center'}>Mobile</Heading>
                    <Box display={'grid'} gridTemplateColumns={'repeat(auto-fill, minmax(200px, 1fr))'} gap={5}>
                        {
                            mobile.map((skill, index) => (
                                <SkillCard key={index} icon={skill.icon} title={skill.title} />
                            ))
                        }
                    </Box>
                </Box>

                <Box display={'flex'} flexDirection={'column'} gap={4}>
                    <Heading size={'lg'} textAlign={'center'}>Database</Heading>
                    <Box display={'grid'} gridTemplateColumns={'repeat(auto-fill, minmax(200px, 1fr))'} gap={5}>
                        {
                            database.map((skill, index) => (
                                <SkillCard key={index} icon={skill.icon} title={skill.title} />
                            ))
                        }
                    </Box>
                </Box>

                <Box display={'flex'} flexDirection={'column'} gap={4}>
                    <Heading size={'lg'} textAlign={'center'}>Other</Heading>
                    <Box display={'grid'} gridTemplateColumns={'repeat(auto-fill, minmax(200px, 1fr))'} gap={5}>
                        {
                            other.map((skill, index) => (
                                <SkillCard key={index} icon={skill.icon} title={skill.title} />
                            ))
                        }
                    </Box>
                </Box>

            </Box>

        </Box>
    )
}

export default Skill