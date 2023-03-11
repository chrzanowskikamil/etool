import { Flex, Spacer } from '@chakra-ui/react';

import { Logo } from './Logo';
import { Menu } from './Menu';
import { ThemeButton } from './ThemeButton';
import { LoginButton } from './LoginButton';
import { SignUpButton } from './SignUpButton';
import { HamburgerMenuButton } from './HamburgerMenuButton';

export const Navigation = () => {
  return (
    <Flex
      w={{ base: '100%', xl: '65%', sm: '100%' }}
      align='center'
      p='6'>
      <Logo />
      <Spacer />
      <Menu />
      <ThemeButton />
      <LoginButton />
      <SignUpButton />
      <HamburgerMenuButton />
    </Flex>
  );
};
