import { useColorMode } from "@/components/ui/color-mode";
import { Image } from "@chakra-ui/react";
import {
    SiChakraui,
    SiExpress,
    SiJavascript,
    SiLaravel,
    SiMongodb,
    SiNextdotjs,
    SiReact,
    SiShadcnui,
    SiTailwindcss,
} from "react-icons/si";

export const useSkills = () => {
    const { colorMode } = useColorMode();

    return [
        {
            name: "Fundamental",
            description: "These are the basic skills that I have mastered.",
            skills: [
                {
                    icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" width={7} height={7} fit="contain" />,
                    title: "HTML",
                    color: "orange.500",
                },
                {
                    icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" width={7} height={7} fit="contain" />,
                    title: "CSS",
                    color: "blue.500",
                },
                {
                    icon: <SiJavascript size={25} color="#f7df1d" style={{ backgroundColor: "black" }} />,
                    title: "JavaScript",
                    color: "yellow.400",
                },
                {
                    icon: <Image src="https://cdn.prod.website-files.com/62865614b39c464b76d339aa/66ba60017e4879e84bd4d83c_Node.svg" width={7} height={7} fit="contain" />,
                    title: "Node.js",
                    color: "green.500",
                },
                {
                    icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/9/91/Dart-logo-icon.svg" width={7} height={7} fit="contain" />,
                    title: "Dart",
                    color: "blue.500",
                },
                {
                    icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" width={7} height={7} fit="contain" />,
                    title: "PHP",
                    color: "purple.500",
                },
            ],
        },
        {
            name: "Frontend",
            description: "These are the frontend development technologies that I have mastered.",
            skills: [
                {
                    icon: <SiReact size={25} color="#62dafc" />,
                    title: "React.js",
                    color: "#62dafc",
                },
                {
                    icon: <SiTailwindcss size={25} color="#00c6ff" />,
                    title: "Tailwind CSS",
                    color: "#00c6ff",
                },
                {
                    icon: <SiLaravel size={25} color="#ff2d20" />,
                    title: "Laravel",
                    color: "#ff2d20",
                },
                {
                    icon: <SiNextdotjs size={25} color={colorMode === "dark" ? "white" : "black"} />,
                    title: "Next.js",
                    color: colorMode === "dark" ? "white" : "black",
                },
                {
                    icon: <SiShadcnui size={25} color={colorMode === "dark" ? "white" : "black"} />,
                    title: "Shadcn UI",
                    color: colorMode === "dark" ? "white" : "black",
                },
                {
                    icon: <SiChakraui size={25} color="#31c2b5" />,
                    title: "Chakra UI",
                    color: "#31c2b5",
                },
                {
                    icon: <Image src="https://img.daisyui.com/images/daisyui-logo/daisyui-logomark.svg" width={7} height={7} fit="contain" />,
                    title: "Daisy UI",
                    color: "#1ad1a5",
                },
            ],
        },
        {
            name: "Backend",
            description: "These are the backend development technologies that I have mastered.",
            skills: [
                {
                    icon: <SiExpress size={25} color={colorMode === "dark" ? "white" : "black"} />,
                    title: "Express.js",
                    color: colorMode === "dark" ? "white" : "black",
                },
                {
                    icon: <SiNextdotjs size={25} color={colorMode === "dark" ? "white" : "black"} />,
                    title: "Next.js",
                    color: colorMode === "dark" ? "white" : "black",
                },
                {
                    icon: <SiLaravel size={25} color="#ff2d20" />,
                    title: "Laravel",
                    color: "#ff2d20",
                },
            ],
        },
        {
            name: "Mobile",
            description: "These are the mobile development technologies that I have mastered.",
            skills: [
                {
                    icon: <SiReact size={25} color="#62dafc" />,
                    title: "React Native",
                    color: "#62dafc",
                },
                {
                    icon: <Image src="https://cdn-images-1.medium.com/v2/resize:fit:1200/1*5-aoK8IBmXve5whBQM90GA.png" width={7} height={7} fit="contain" />,
                    title: "Flutter",
                    color: "blue.500",
                },
            ],
        },
        {
            name: "Database",
            description: "These are the database technologies that I have mastered.",
            skills: [
                {
                    icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Database-mysql.svg" width={7} height={7} fit="contain" />,
                    title: "MySQL",
                    color: "orange.500",
                },
                {
                    icon: <SiMongodb size={25} color="#18ac54" />,
                    title: "MongoDB",
                    color: "#18ac54",
                },
                {
                    icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" width={7} height={7} fit="contain" />,
                    title: "PostgreSQL",
                    color: "blue.500",
                },
            ],
        },
        {
            name: "Other",
            description: "These are the other technologies that I have mastered.",
            skills: [
                {
                    icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" width={7} height={7} fit="contain" />,
                    title: "Figma",
                    color: "red.400",
                },
            ],
        },
    ];
};
