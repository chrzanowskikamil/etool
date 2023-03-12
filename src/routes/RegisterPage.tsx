import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Text,
} from '@chakra-ui/react';

import { Link as ReachLink } from 'react-router-dom';

import { FcWorkflow } from 'react-icons/fc';
import { GiCarKey } from 'react-icons/gi';

export const RegisterPage = () => {
  return (
    <Flex
      wrap='wrap'
      w='100vw'
      h='100vh'
      align='flex-start'
      justify='center'>
      <Flex
        p={6}
        m={8}
        justify='center'
        flexBasis='100%'>
        <Text fontSize={30}>Good to see You!</Text>
      </Flex>
      <Flex>
        <Icon
          p={6}
          opacity={0.8}
          as={GiCarKey}
          fontSize={400}
        />
        <Flex
          flexBasis='60%'
          flexDirection='column'
          justify='center'
          fontSize={36}
          p='6'>
          <Text
            letterSpacing={2}
            display='flex'
            fontWeight='black'>
            Join
            <Icon
              marginInline={2}
              alignSelf='center'
              as={FcWorkflow}
              fontSize={40}
            />{' '}
            ETool{' '}
          </Text>
          <Text>to make Your job easier!</Text>
        </Flex>
      </Flex>
      <Flex
        border='5px solid red'
        h='60%'
        flexBasis='30%'>
        <FormControl border='2px solid blue'>
          <Text
            fontSize={33}
            fontWeight='extrabold'>
            Registration:
          </Text>
          <Flex
            align='center'
            direction='column'>
            <FormLabel>Email address</FormLabel>
            <InputGroup>
              <InputLeftElement />
              <Input
                tabIndex={1}
                type='email'
                mb='10'
              />
            </InputGroup>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <InputLeftElement />
              <Input
                tabIndex={2}
                type='password'
                mb='-1'
              />
              <InputRightElement>
                <IconButton
                  tabIndex={4}
                  aria-label='Show password.'
                  bg='transparent'></IconButton>
              </InputRightElement>
            </InputGroup>
            <FormHelperText
              alignSelf='flex-end'
              mb='10'>
              <Link
                as={ReachLink}
                tabIndex={5}
                to='/forgotpassword'
                color='#00FFFF'>
                Forgot password?
              </Link>
            </FormHelperText>
            <Button
              tabIndex={3}
              type='submit'>
              Login
            </Button>
          </Flex>
        </FormControl>
      </Flex>
    </Flex>
  );
};
