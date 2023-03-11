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
  Heading,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  InputLeftElement,
  Icon,
  Input,
  Link,
  Menu,
  Text,
  MenuButton,
  MenuList,
  MenuItem,
  VStack,
  StackDivider,
  useDisclosure,
  Flex,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

import { FcWorkflow } from 'react-icons/fc';
import { FiEye, FiUserCheck, FiUnlock } from 'react-icons/fi';

export const LoginButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        aria-label='Open login menu.'
        onClick={onOpen}>
        Login
      </Button>
      <Drawer
        isOpen={isOpen}
        size='md'
        onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            fontSize='20'
            mt='6'
          />
          <DrawerHeader>
            <Flex
              direction='column'
              w='100%'
              h='25vh'
              align='center'>
              <Heading mt='30%'>
                <Icon
                  as={FcWorkflow}
                  boxSize={20}
                />
              </Heading>
              <Text fontSize='35'>Welcome back!</Text>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <FormControl>
              <Flex
                align='center'
                direction='column'>
                <FormLabel>Email address</FormLabel>
                <InputGroup>
                  <InputLeftElement children={<FiUserCheck />} />
                  <Input
                    type='email'
                    mb='10'
                  />
                </InputGroup>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <InputLeftElement children={<FiUnlock />} />
                  <Input
                    type='password'
                    mb='-1'
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label='Show password.'
                      icon={<FiEye />}
                      bg='transparent'></IconButton>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText
                  alignSelf='flex-end'
                  mb='10'>
                  <Link
                    href='/forgotpassword'
                    color='#00FFFF'>
                    Forgot password?
                  </Link>
                </FormHelperText>
                <Button
                  onClick={onClose}
                  type='submit'>
                  Login
                </Button>
              </Flex>
            </FormControl>
          </DrawerBody>
          <DrawerFooter mb='10'>
            <Text>
              Don't have an account?
              <Link
                href='/signup'
                color='#00FFFF'
                ml='1'>
                Sign up
              </Link>
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
