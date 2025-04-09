import { useColorMode } from '@/components/ui/color-mode'
import { Box, Text } from '@chakra-ui/react'

const Footer = () => {
    const { colorMode } = useColorMode()

    return (
        <Box id='footer' textAlign={'center'} mb={10} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={10}>
            <Box fontSize={'sm'} fontWeight={'medium'} color={colorMode === 'dark' ? 'gray.600' : 'gray.400'}>
                <Text fontSize={'sm'} color={colorMode === 'dark' ? 'gray.400' : 'black'}>Copyright © {new Date().getFullYear()} By MrFatra</Text>
                <Text>"Tell me if it's ok."</Text>
            </Box>
            {/* <Box w={200}>
                <Link href="https://spotify-github-profile.kittinanx.com/api/view?uid=w9ucj7q3vi5hjgbebqmmfj0rb&redirect=true" target="_blank">
                    <Image
                        src="https://spotify-github-profile.kittinanx.com/api/view?uid=w9ucj7q3vi5hjgbebqmmfj0rb&cover_image=true&theme=novatorem&show_offline=false&background_color=b33737&interchange=true&bar_color=53b14f&bar_color_cover=true"
                        alt="Spotify GitHub Profile"
                        bg={colorMode === 'dark' ? 'whiteAlpha.300' : 'blackAlpha.300'}
                        borderRadius={'lg'}
                    />
                </Link>
            </Box> */}
        </Box>
    )
}

export default Footer