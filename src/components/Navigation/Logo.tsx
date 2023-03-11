import { Flex, Icon, Link, Text } from '@chakra-ui/react';
import { FcWorkflow } from 'react-icons/fc';
import { Link as ReachLink } from 'react-router-dom';

export const Logo = () => {
  return (
    <Flex
      align='center'
      justify='center'>
      <Link
        as={ReachLink}
        tabIndex={1}
        to='/'
        display='flex'
        alignItems='center'
        fontSize='32'
        fontWeight='hairline'
        _hover={{
          textDecoration: 'none',
          transform: 'scale(1.1)',
        }}>
        <Icon
          as={FcWorkflow}
          mr='2'
          w={10}
          h={10}
        />
        <Text>ETool</Text>
      </Link>
    </Flex>
  );
};
