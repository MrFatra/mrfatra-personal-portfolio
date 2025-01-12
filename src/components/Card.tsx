import { FaEye } from 'react-icons/fa6'
import { useColorMode } from './ui/color-mode'
import { DialogBody, DialogCloseTrigger, DialogContent, DialogRoot, DialogTrigger } from './ui/dialog'
import { Badge, Box, Image, Text, VStack, HStack, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { BsArrowRight, BsGithub } from 'react-icons/bs'
import { FadeContent, SpotlightCard } from '@/blocks'

type CardProjectProps = {
  title: string
  image: string
  description: string
  tags: { name: string, color: string }[]
  github?: string | undefined
  fadeDelay?: number
}

const CardTest = ({ title = "", description = "", image = "", tags = [], fadeDelay = 0, github = "" }: CardProjectProps) => {
  const { colorMode } = useColorMode()

  return (
    <DialogRoot
      scrollBehavior="inside"
      placement="center"
      motionPreset="slide-in-bottom"
      size="lg"
      closeOnInteractOutside
      closeOnEscape
    >
      {/* Card */}
      <FadeContent delay={fadeDelay}>
        <VStack
          as={SpotlightCard}
          h="md"
          w="full"
          bg="whiteAlpha.100"
          gap={4}
          borderRadius="lg"
          boxShadow="md"
          overflow="hidden"
          align="stretch"
        >
          {/* Image */}
          <DialogTrigger>
            <Box
              bg={colorMode === 'dark' ? "whiteAlpha.200" : 'blackAlpha.200'}
              w="full"
              h="200px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              overflow="hidden"
              p={3}
              position={'relative'}
              transition="transform 0.3s"
              _hover={{ transform: 'scale(1.05)' }}
            >
              <Image
                src={image}
                alt={title}
                objectFit="contain"
                w="full"
                h="full"
              />
              <Box
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                bg="rgba(0, 0, 0, 0.7)"
                color="white"
                fontSize="lg"
                fontWeight="bold"
                opacity="0"
                transition="opacity 0.3s"
                _hover={{ opacity: 1 }}
                gap="2"
              >
                Preview
                <FaEye />
              </Box>
            </Box>
          </DialogTrigger>

          {/* Body */}
          <VStack gap={2} align="start" px={4} py={2}>
            <Text fontSize="xl" fontWeight="bold">
              {title}
            </Text>
            <Text fontSize="sm" color="gray.500" lineClamp={2}>
              {description}
            </Text>
            <HStack wrap="wrap" gap={2} mt={2}>
              {tags.map(tag => (
                <Badge key={tag.name} bg={tag.color} color="white" borderRadius="full" px={2} py={1}>
                  {tag.name}
                </Badge>
              ))}
            </HStack>
            {
              github && (
                <Box gap="2" alignItems={'center'} justifyContent={'end'} position={'absolute'} bottom={5} right={5}>
                  <LinkBox as="article" display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2}>
                    <p>
                      <LinkOverlay asChild>
                        <a href={github}>See More On</a>
                      </LinkOverlay>
                    </p>
                    <BsGithub />
                    <BsArrowRight />
                  </LinkBox>
                </Box>
              )
            }
          </VStack>
        </VStack>
      </FadeContent>

      {/* Dialog */}
      <DialogContent>
        <DialogBody pt={4}>
          <Box display="flex" justifyContent="center" alignItems="center" p={3}>
            <Image
              borderRadius="lg"
              boxShadow="lg"
              objectFit="cover"
              src={image}
              alt={title}
              w="full"
              maxH="400px"
            />
          </Box>
        </DialogBody>
        <DialogCloseTrigger
          top="0"
          insetEnd="-10"
          bg={colorMode === 'dark' ? 'gray.900' : 'whiteAlpha.900'}
          _hover={{ bg: 'red.500', color: 'white' }}
          boxShadow="sm"
        />
      </DialogContent>
    </DialogRoot>
  )
}

export default CardTest
