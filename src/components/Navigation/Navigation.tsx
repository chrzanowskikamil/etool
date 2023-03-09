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

import { HamburgerMenuButton } from './HamburgerMenuButton';
import { LoginButton } from './LoginButton';

export const Navigation = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      p='2'
      w='100vw'
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
            href='#'
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
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Contact</Link>
        </Flex>
        <Tooltip label='Theme'>
          <IconButton
            aria-label='theme'
            icon={
              colorMode === 'dark' ? (
                <FiMoon
                  onClick={toggleColorMode}
                  fontSize={20}
                />
              ) : (
                <FiSun
                  onClick={toggleColorMode}
                  fontSize={20}
                />
              )
            }
            bg='transparent'
            mr={2}
          />
        </Tooltip>
        <Flex display={{ base: 'none', md: 'flex' }}>
          <LoginButton />
        </Flex>
        <Flex display={{ base: 'flex', md: 'none' }}>
          <HamburgerMenuButton />
        </Flex>
      </Flex>
    </Flex>
  );
};
