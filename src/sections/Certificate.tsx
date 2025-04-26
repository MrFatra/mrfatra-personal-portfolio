import { Card } from "@/components"
import { Box, Heading, Text } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import data from '@/data/certificate.json'

const Certificate = () => {
    const { t: translate } = useTranslation()

    return (
        <Box id="certificate">
            <Box mb={5} textAlign={{ smDown: 'center' }}>
                <Heading textStyle={{ base: 'lg', mdDown: 'xl', md: 'xl', lg: '3xl' }} fontWeight={'bold'}>{translate("Awards & Certificates")}</Heading>
                <Text textStyle={{ smDown: 'sm' }}>{translate("Here are some of my achievements and certificates.")}</Text>
            </Box>

            <Box
                overflowX="auto"
                gap={5}
                whiteSpace="nowrap"
                py={6}
                display={'flex'}
            >
                {
                    data.certificate.map((project, index) => (
                        <Box
                            key={index}
                            display="inline-block"
                        >
                            <Card
                                title={project.title}
                                image={project.image}
                                description={translate(project.description)}
                                tags={project.tags}
                            />
                        </Box>
                    ))
                }
            </Box>
        </Box >
    )
}

export default Certificate