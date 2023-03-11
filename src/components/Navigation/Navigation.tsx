import { FcWorkflow } from 'react-icons/fc';
import { FiMoon, FiSun } from 'react-icons/fi';

import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  IconButton,
  Spacer,
  Tooltip,
  useColorMode,
  chakra,
} from '@chakra-ui/react';
import '@fontsource/montserrat';

import { Link as ReachLink } from 'react-router-dom';

import { HamburgerMenuButton } from './HamburgerMenuButton';
import { LoginButton } from './LoginButton';
import { SignUpButton } from './SignUpButton';

export const Navigation = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      p='2'
      w='100vw'
      minH='10vh'
      align='center'
      justify='center'>
      <Flex
        w={{ base: '100vw', md: '100vw', lg: '65vw' }}
        letterSpacing='2px'
        fontFamily='Montserrat'
        minH='6vh'
        align='center'>
        <Flex align='center'>
          <Link
            as={ReachLink}
            tabIndex={1}
            to='/'
            fontSize='32'
            fontWeight='hairline'
            _hover={{
              textDecoration: 'none',
            }}>
            <Icon
              as={FcWorkflow}
              boxSize={6}
              mr='2'
            />
            ETool
          </Link>
        </Flex>
        <Spacer />
        <Flex
          display={{ base: 'none', md: 'flex' }}
          fontSize='20'
          grow='1'
          justify='space-evenly'>
          <Link
            as={ReachLink}
            to='/'
            tabIndex={2}>
            Home
          </Link>
          <Link
            as={ReachLink}
            to='/about'
            tabIndex={3}>
            About
          </Link>
          <Link
            as={ReachLink}
            to='/contact'
            tabIndex={4}>
            Contact
          </Link>
        </Flex>
        <Tooltip label='Theme'>
          <IconButton
            onClick={toggleColorMode}
            aria-label='theme'
            icon={colorMode === 'dark' ? <FiMoon fontSize={20} /> : <FiSun fontSize={20} />}
            bg='transparent'
            mr={2}
          />
        </Tooltip>
        <Flex display={{ base: 'none', md: 'flex' }}>
          <LoginButton />
          <SignUpButton />
        </Flex>
        <Flex display={{ base: 'flex', md: 'none' }}>
          <HamburgerMenuButton />
        </Flex>
      </Flex>
    </Flex>
  );
};
