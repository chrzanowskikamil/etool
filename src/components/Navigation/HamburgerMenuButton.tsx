import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  IconButton,
  Input,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  VStack,
  StackDivider,
  useDisclosure,
  Flex,
} from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';

export const HamburgerMenuButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        bg='transparent'
        icon={<AiOutlineMenu />}
        aria-label='Open menu.'
        onClick={onOpen}></IconButton>
      <Drawer
        isOpen={isOpen}
        size='full'
        onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Flex
              w='100%'
              h='100%'
              justify='center'
              align='center'>
              <VStack
                divider={<StackDivider borderColor='gray.200' />}
                spacing={6}
                align='center'
                justify='center'>
                <Link>Login</Link>
                <Link>Home</Link>
                <Link>Demo</Link>
                <Link>Contact</Link>
              </VStack>
            </Flex>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
