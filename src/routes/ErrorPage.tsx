import { Link, useRouteError } from 'react-router-dom';
import { Flex, Text, Button, Icon } from '@chakra-ui/react';

import { FcWorkflow } from 'react-icons/fc';

import { TbError404Off } from 'react-icons/tb';

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Flex
      w='100vw'
      h='100vh'
      direction='column'
      align='center'
      justify='center'>
      <Icon
        as={TbError404Off}
        fontSize='250'
      />
      <Text
        fontSize='3xl'
        fontWeight='bold'
        mt={8}>
        Oops! Something went wrong.
      </Text>
      <Text
        fontSize='xl'
        mt={4}>
        We're sorry - we can't find the page you're looking for.
      </Text>
      <Button
        flexDirection='row'
        as={Link}
        to='/'
        size={'lg'}
        mt={8}>
        <Text
          h={5}
          display='flex'
          align='center'
          justifyContent='center'
          letterSpacing={2}>
          Back to
          <FcWorkflow fontSize={20} />
          <Text>ETool</Text>
        </Text>
      </Button>
    </Flex>
  );
};
