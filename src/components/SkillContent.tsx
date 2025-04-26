import { Box, Heading, Text, useBreakpointValue } from '@chakra-ui/react'
import { FiChevronsRight } from 'react-icons/fi'
import SkillCard from './SkillCard'
import { useTranslation } from 'react-i18next'
import { useColorMode } from './ui/color-mode'

const SkillContent = ({ title, description, skill }: SkillContentProps) => {
    const { t: translate } = useTranslation()
    const { colorMode } = useColorMode()
    const isMobile = useBreakpointValue({ base: true, sm: false })

    return (
        <Box display={{ sm: 'block', md: 'flex' }} gap={4} alignItems={'center'}>
            <Box w={{ md: '50%' }}>
                <Heading textStyle={{ smDown: 'md', mdDown: 'lg', md: 'lg' }}>{title}</Heading>
                <Text textStyle={{ smDown: 'sm' }} color={'gray.500'}>{translate(description)}</Text>
                <Box display={'flex'} mt={5} mb={{ smDown: 2 }} alignItems={'center'} gap={2}>
                    <Text fontSize={{ smDown: 'x-small', md: 'sm' }} color={'gray.500'}>{translate("Scroll to see more")}</Text>
                    {
                        isMobile
                            ?
                            <FiChevronsRight size={10} color={colorMode === 'dark' ? 'white' : 'black'} opacity={.5} />
                            :
                            <FiChevronsRight style={{ marginTop: '2px' }} size={15} color={colorMode === 'dark' ? 'white' : 'black'} opacity={.5} />
                    }
                </Box>
            </Box>
            <Box
                w={{ md: '50%' }}
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
                    skill.map((skill, index) => (
                        <SkillCard key={index} icon={skill.icon} title={skill.title} color={skill.color} />
                    ))
                }
            </Box>
        </Box>
    )
}

type SkillContentProps = {
    title: string
    description: string
    skill: {
        icon: JSX.Element
        title: string
        color: string
    }[]
}

export default SkillContent