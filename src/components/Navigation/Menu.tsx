import { Flex, Link } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

export const Menu = () => {
  const ctas = [
    {
      tabIndex: 2,
      title: 'Home',
      to: '/',
    },
    {
      tabIndex: 3,
      title: 'About',
      to: '/about',
    },
    {
      tabIndex: 4,
      title: 'Contact',
      to: '/contact',
    },
  ];

  const links = ctas.map(cta => (
    <Link
      as={ReachLink}
      to={cta.to}
      tabIndex={cta.tabIndex}>
      {cta.title}
    </Link>
  ));
  return (
    <Flex
      display={{ base: 'none', md: 'flex' }}
      fontSize='20'
      grow='2'
      align='center'
      justify='space-evenly'
      letterSpacing={2}>
      {links}
    </Flex>
  );
};
