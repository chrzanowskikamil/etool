import { Button } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

export const SignUpButton = () => {
  return (
    <>
      <Button
        display={{ base: 'none', md: 'flex' }}
        to={'/register'}
        as={ReachLink}
        ml={4}
        aria-label='Open register page.'>
        Sign up
      </Button>
    </>
  );
};
