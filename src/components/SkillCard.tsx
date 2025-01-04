import { Box } from '@chakra-ui/react'
import { useColorMode } from './ui/color-mode'

type SkillCardProps = {
    icon: React.ReactNode
    title: string
}

const SkillCard = ({ icon, title }: SkillCardProps) => {
    const { colorMode } = useColorMode()

    return (
        <Box
            display={'inline-flex'}
            alignItems={'center'}
            gap={3}
            borderRadius={10}
            p={3}
            bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'}
            border={'1px solid'}
            borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.500'}
            boxShadow={'md'}
            cursor={'pointer'}
            _hover={{ bg: colorMode === 'dark' ? 'gray.900' : 'gray.200' }}
            _active={{
                transform: 'scale(0.98)',
                transition: 'transform 0.2s'
            }}
        >
            <Box boxSize={10} bg={colorMode === 'dark' ? 'gray.500' : 'transparent'} borderRadius={8} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                {icon}
            </Box>
            <Box fontWeight={'medium'}>
                {title}
            </Box>
        </Box>
    )
}

export default SkillCard