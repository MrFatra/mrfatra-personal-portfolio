import { Badge, Box, Card, HStack, Image } from "@chakra-ui/react"
// import { BsArrowRight, BsGithub } from "react-icons/bs"
import { useColorMode } from "./ui/color-mode"
import { DialogBody, DialogCloseTrigger, DialogContent, DialogRoot, DialogTrigger } from "./ui/dialog"
import { FaEye } from 'react-icons/fa6'
import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef } from "react"

type CardProjectProps = {
  title: string
  image: string
  description: string
  tags: { name: string, color: string }[],
  // github?: string | undefined
}

const CardProject = ({ title, image, description, tags }: CardProjectProps) => {
  const { colorMode } = useColorMode()
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 0,
        speed: 1000,
        glare: true,
        "max-glare": 0.1,
        perspective: 1500,
        reverse: true,
        axis: 'x'
      })
    }

    return () => {
      if (cardRef.current) {
        (cardRef.current as any).vanillaTilt.destroy()
      }
    }

  }, [])

  return (
    <DialogRoot scrollBehavior={'inside'} placement={'center'} motionPreset={'slide-in-bottom'} size={'lg'} closeOnInteractOutside closeOnEscape>
      <Card.Root ref={cardRef} maxW="xl" w={{ smDown: '290px', sm: '320px', mdDown: 'sm', md: 'sm' }} h={'full'} overflow="hidden" borderRadius={10} boxShadow={'lg'} border={'1px solid'} borderColor={colorMode === 'light' ? 'gray.400' : 'gray.800'}>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} p={3} position="relative">
          <DialogTrigger asChild>
            <Box as="div" position="relative" cursor="pointer">
              <Image
                borderRadius={5}
                fit={'contain'}
                boxShadow={'lg'}
                objectFit={'contain'}
                src={image}
                alt={title}
                _active={{ transform: 'scale(0.95)', transition: 'transform 0.3s' }}
              />
              <Box
                position="absolute"
                borderRadius={5}
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
        </Box>
        <Card.Body gap="2">
          <Card.Title textWrap={'wrap'} textStyle={{ base: '', md: 'lg', lg: 'xl' }}>{title}</Card.Title>
          <Card.Description lineClamp={3} fontSize={'sm'} color={'gray.500'} textOverflow={'ellipsis'} overflow={'hidden'}>
            {description}
          </Card.Description>
          <HStack mt="4" flexWrap={'wrap'} gap="2">
            {
              tags.map(tag => (
                <Badge key={tag.name} bg={tag.color} color={'white'}>{tag.name}</Badge>
              ))
            }
          </HStack>
        </Card.Body>
        {/* {
          github && (
            <Card.Footer gap="2" alignItems={'center'} justifyContent={'end'}>
              <LinkBox as="article" display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2}>
                <p>
                  <LinkOverlay asChild>
                    <a href={github}>See More On</a>
                  </LinkOverlay>
                </p>
                <BsGithub />
                <BsArrowRight />
              </LinkBox>
            </Card.Footer>
          )
        } */}
      </Card.Root>
      <DialogContent>
        <DialogBody pt="4">
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'} p={3}>
            <Image
              borderRadius={15}
              fit={'cover'}
              boxShadow={'lg'}
              objectFit={'cover'}
              src={image}
              alt={title}
            />
          </Box>
          <Box p={3} textAlign={'justify'}>
            <Card.Root border={'none'} display={'flex'} gap="2" flexDirection={'column'}>
              <Card.Title textWrap={'wrap'} textStyle={{ base: '', md: 'lg', lg: 'xl' }}>{title}</Card.Title>
              <Card.Description lineClamp={3} fontSize={'sm'} color={'gray.500'} textOverflow={'ellipsis'} overflow={'hidden'}>
                {description}
              </Card.Description>
              <HStack mt="4" flexWrap={'wrap'} gap="2">
                {
                  tags.map(tag => (
                    <Badge key={tag.name} bg={tag.color} color={'white'}>{tag.name}</Badge>
                  ))
                }
              </HStack>
            </Card.Root>
          </Box>
        </DialogBody>
        <DialogCloseTrigger top="0" insetEnd="-10" bg={colorMode === 'dark' ? 'gray.900' : 'whiteAlpha.900'} />
      </DialogContent>
    </DialogRoot >
  )
}

export default CardProject
