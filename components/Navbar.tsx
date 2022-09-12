import {
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useRef } from 'react';

export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <Show above='md'>
        <Flex
          as='header'
          position='fixed'
          alignContent='space-evenly'
          w='100%'
          p={2}
          px={4}
          backdropFilter='saturate(150%) blur(20px)'
          zIndex={100}
        >
          <Link href='/'>
            <Button size='lg' variant='ghost'>
              Home
            </Button>
          </Link>
          <Link href='/components'>
            <Button size='lg' variant='ghost'>
              Components
            </Button>
          </Link>
        </Flex>
      </Show>
      <Show below='md'>
        <Flex
          as='header'
          position='fixed'
          alignContent='end'
          justifyContent='end'
          w='100%'
          p={2}
          px={4}
          backdropFilter='saturate(150%) blur(20px)'
          zIndex={100}
        >
          <IconButton
            aria-label='menu'
            ref={btnRef}
            onClick={onOpen}
            icon={<HamburgerIcon />}
            variant='outline'
          >
            Open
          </IconButton>
        </Flex>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody mt={15}>
              <Center>
                <VStack gap={4}>
                  <Link href='/'>
                    <Button size='lg' variant='ghost'>
                      Home
                    </Button>
                  </Link>
                  <Link href='/components'>
                    <Button size='lg' variant='ghost'>
                      Components
                    </Button>
                  </Link>
                </VStack>
              </Center>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Show>
    </>
  );
};
