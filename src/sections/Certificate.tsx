import { Card } from "@/components"
import { Box, Heading } from "@chakra-ui/react"

const Certificate = () => {

    const projects = [
        {
            title: "Dart Beginner Course",
            image: "dart-beginner.jpg",
            description: "Dart Beginner Course by Dicoding.",
            tags: [{
                name: "Dart",
                color: "blue.600"
            }]
        },
        {
            title: "Making Simple App with Flutter",
            image: "flutter-beginner.jpg",
            description: "Making Simple App with Flutter by Dicoding.",
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
            description: "Javascript Course by Dicoding.",
            tags: [{
                name: "Javascript",
                color: "yellow.500"
            }],
        },
        {
            title: "Analyze Speech and Language with Google API's",
            image: "gcp-ml-1.png",
            description: "Analyze Speech and Language with Google API's by Google Cloud Platform (GCP).",
            tags: [{
                name: "Google Cloud Platform",
                color: "blue.500"
            },
            {
                name: "Machine Learning",
                color: "green.500"
            },
            {
                name: "AI",
                color: "purple.500"
            },
            ],
        },
        {
            title: "Junior Web Developer",
            image: "jwd.jpg",
            description: "Vocational School Graduate Academy (VSGA) Junior Web Developer Training by Kominfo.",
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
        {
            title: "Web Design Competition 2024",
            image: "mrt_award.jpg",
            description: "Web Design Competition Award Winning 2024 1st place.",
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
            }],
        },
    ]

    return (
        <Box>
            <Box mb={5}>
                <Heading size={'3xl'} fontWeight={'bold'}>Awards & Certificates</Heading>
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
                        />
                    ))
                }
            </Box>
        </Box>
    )
}

export default Certificate