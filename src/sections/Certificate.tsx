import { SplitText } from "@/blocks"
import { Card } from "@/components"
import { Box, Heading, Text } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"

const Certificate = () => {
    const { t: translate } = useTranslation()

    const certificate = [
        {
            title: "Dart Beginner Course",
            image: "dart-beginner.jpg",
            description: translate("Dart Beginner Course by Dicoding."),
            tags: [{
                name: "Dart",
                color: "blue.600"
            }]
        },
        {
            title: "Making Simple App with Flutter",
            image: "flutter-beginner.jpg",
            description: translate("Making Simple App with Flutter by Dicoding."),
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
            description: translate("Javascript Course by Dicoding."),
            tags: [{
                name: "Javascript",
                color: "yellow.500"
            }],
        },
        {
            title: "Analyze Speech and Language with Google API's",
            image: "gcp-ml-1.png",
            description: translate("Analyze Speech and Language with Google API's by Google Cloud Platform (GCP)."),
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
            description: translate("Vocational School Graduate Academy (VSGA) Junior Web Developer Training by Kominfo."),
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
            description: translate("Web Design Competition Award Winning 2024 1st place."),
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
        <Box id="certificate">
            <Box mb={5}>
                <Heading size={'3xl'} fontWeight={'bold'}>
                    <SplitText
                        delay={50}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                        text={translate("Awards & Certificates")}
                    >
                    </SplitText>
                </Heading>
                <SplitText
                    delay={0}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                    text={translate("Here are some of my achievements and certificates.")}
                >
                </SplitText>
            </Box>

            <Box display={'flex'} flexWrap={'wrap'} justifyContent={'space-between'} gapY={5}>
                {
                    certificate.map((project, index) => (
                        <Card
                            key={index}
                            fade={{ delay: index * 200, isFade: true }}
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