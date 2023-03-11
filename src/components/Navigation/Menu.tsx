import { Flex, Link } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

export const Menu = () => {
  return (
    <Flex
      display={{ base: 'none', md: 'flex' }}
      fontSize='20'
      grow='2'
      align='center'
      justify='space-evenly'
      letterSpacing={2}>
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
  );
};
