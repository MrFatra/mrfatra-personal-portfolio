import SkillContent from "@/components/SkillContent"
import { Box, Heading, Text } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import { useSkills } from "@/data/skills"

const Skill = () => {
    const { t: translate } = useTranslation()
    const skills = useSkills()

    return (
        <Box id="skill" display={'flex'} flexDirection={'column'} gap={5}>
            <Box mb={10} textAlign={'center'}>
                <Heading textStyle={{ base: 'lg', mdDown: 'xl', md: 'xl', lg: '3xl' }} fontWeight={'bold'}>{translate("My Skills")}</Heading>
                <Text textStyle={{ smDown: 'sm' }}>{translate("Here are some of the technologies I have experience with.")}</Text>
            </Box>

            <Box display={'flex'} flexDirection={'column'} gap={{ smDown: 10, mdDown: 20, md: 20 }} alignItems={{ sm: 'center', mdDown: 'normal', md: 'normal' }} justifyContent={'center'}>

                {
                    skills.map((item, index) => (
                        <SkillContent
                            key={index}
                            title={item.name}
                            description={item.description}
                            skill={item.skills}
                        />
                    ))
                }

            </Box>

        </Box >
    )
}

export default Skill