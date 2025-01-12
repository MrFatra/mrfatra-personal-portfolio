import { Box } from '@chakra-ui/react'
import { useColorMode } from './ui/color-mode'

type SkillCardProps = {
    icon: React.ReactNode
    title: string
    color: string
}

const SkillCard = ({ icon, title, color }: SkillCardProps) => {
    const { colorMode } = useColorMode()

    return (
        <Box
            w={{ lg: '25%', md: '40%' }}
            position={'relative'}
            overflow={'hidden'}
            flexDirection={'column'}
            justifyContent={'center'}
            display={'flex'}
            flexShrink={0}
            alignItems={'center'}
            gap={3}
            borderRadius={10}
            p={3}
            bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'}
            boxShadow={'md'}
            cursor={'pointer'}
            _hover={{ bg: colorMode === 'dark' ? 'gray.900' : 'gray.200', transition: 'all 0.3s' }}
            _active={{
                transform: 'scale(0.98)',
                transition: 'transform 0.2s'
            }}
        >
            <Box boxSize={10} borderRadius={8} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                {icon}
            </Box>
            <Box fontWeight={'medium'} fontSize={'sm'}>
                {title}
            </Box>
            <Box w={'full'} h={1} bg={color} position={'absolute'} bottom={0} />
        </Box>
    )
}

export default SkillCard