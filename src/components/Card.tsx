import { Badge, Box, Card, HStack, Image, LinkBox, LinkOverlay } from "@chakra-ui/react"
import { BsArrowRight, BsGithub } from "react-icons/bs"
import { useColorMode } from "./ui/color-mode"
import { DialogBody, DialogCloseTrigger, DialogContent, DialogRoot, DialogTrigger } from "./ui/dialog"
import { FaEye } from 'react-icons/fa6'
import { useState } from "react"

type CardProjectProps = {
  title: string
  image: string
  description: string
  tags: { name: string, color: string }[],
  github?: string | undefined
}

const CardProject = ({ title, image, description, tags, github }: CardProjectProps) => {
  const { colorMode } = useColorMode()
  const [scale, setScale] = useState<number>(1);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const zoomAmount = e.deltaY > 0 ? -0.1 : 0.1
    setScale(prev => Math.min(Math.max(prev + zoomAmount, 1), 3))
  }


  return (
    <>
      <DialogRoot scrollBehavior={'inside'} placement={'center'} motionPreset={'slide-in-bottom'} size={'lg'} closeOnInteractOutside closeOnEscape>
        <Card.Root maxW="xl" w={'sm'} overflow="hidden" borderRadius={10} boxShadow={'lg'} border={'1px solid'} borderColor={colorMode === 'light' ? 'gray.500' : 'gray.800'}>
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
                  transform={`scale(${scale})`}
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
            <Card.Title>{title}</Card.Title>
            <Card.Description>
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
          {
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
          }
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
          </DialogBody>
          <DialogCloseTrigger top="0" insetEnd="-10" bg="bg" />
        </DialogContent>
      </DialogRoot>
    </>
  )
}

export default CardProject
