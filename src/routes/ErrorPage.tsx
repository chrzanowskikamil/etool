import { Link, useRouteError } from 'react-router-dom';
import { Flex, Text, Button, Image } from '@chakra-ui/react';

import backgroundImage from '../../public/errorbackground.jpg';

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Flex
      w='100vw'
      h='100vh'
      direction='column'
      bgSize='cover'
      filter='grayscale(90%)'
      align='center'>
      <Text
        fontSize='6xl'
        fontWeight='bold'
        mt='10'>
        <svg
          fill='#000000'
          version='1.1'
          id='Capa_1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 60.00 60.00'
          width='256px'
          height='256px'
          transform='rotate(0)matrix(1, 0, 0, 1, 0, 0)'
          stroke='#000000'
          stroke-width='0.0006000000000000001'>
          <g
            id='SVGRepo_bgCarrier'
            stroke-width='0'></g>
          <g
            id='SVGRepo_tracerCarrier'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke='#CCCCCC'
            stroke-width='6.24'>
            {' '}
            <g>
              {' '}
              <path d='M0,0v12v2v46h60V14v-2V0H0z M20,39h-3v8c0,0.552-0.448,1-1,1s-1-0.448-1-1v-8H9c-0.552,0-1-0.448-1-1V27 c0-0.552,0.448-1,1-1s1,0.448,1,1v10h5v-2c0-0.552,0.448-1,1-1s1,0.448,1,1v2h3c0.552,0,1,0.448,1,1S20.552,39,20,39z M36,41.5 c0,3.584-2.916,6.5-6.5,6.5S23,45.084,23,41.5v-9c0-3.584,2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5V41.5z M51,39h-3v8 c0,0.552-0.448,1-1,1s-1-0.448-1-1v-8h-6c-0.552,0-1-0.448-1-1V27c0-0.552,0.448-1,1-1s1,0.448,1,1v10h5v-2c0-0.552,0.448-1,1-1 s1,0.448,1,1v2h3c0.552,0,1,0.448,1,1S51.552,39,51,39z M2,12V2h56v10H2z'></path>{' '}
              <polygon points='54.293,3.293 52,5.586 49.707,3.293 48.293,4.707 50.586,7 48.293,9.293 49.707,10.707 52,8.414 54.293,10.707 55.707,9.293 53.414,7 55.707,4.707 '></polygon>{' '}
              <rect
                x='3'
                y='3'
                width='39'
                height='8'></rect>{' '}
              <path d='M29.5,28c-2.481,0-4.5,2.019-4.5,4.5v9c0,2.481,2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5v-9C34,30.019,31.981,28,29.5,28z'></path>{' '}
            </g>{' '}
          </g>
          <g id='SVGRepo_iconCarrier'>
            {' '}
            <g>
              {' '}
              <path d='M0,0v12v2v46h60V14v-2V0H0z M20,39h-3v8c0,0.552-0.448,1-1,1s-1-0.448-1-1v-8H9c-0.552,0-1-0.448-1-1V27 c0-0.552,0.448-1,1-1s1,0.448,1,1v10h5v-2c0-0.552,0.448-1,1-1s1,0.448,1,1v2h3c0.552,0,1,0.448,1,1S20.552,39,20,39z M36,41.5 c0,3.584-2.916,6.5-6.5,6.5S23,45.084,23,41.5v-9c0-3.584,2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5V41.5z M51,39h-3v8 c0,0.552-0.448,1-1,1s-1-0.448-1-1v-8h-6c-0.552,0-1-0.448-1-1V27c0-0.552,0.448-1,1-1s1,0.448,1,1v10h5v-2c0-0.552,0.448-1,1-1 s1,0.448,1,1v2h3c0.552,0,1,0.448,1,1S51.552,39,51,39z M2,12V2h56v10H2z'></path>{' '}
              <polygon points='54.293,3.293 52,5.586 49.707,3.293 48.293,4.707 50.586,7 48.293,9.293 49.707,10.707 52,8.414 54.293,10.707 55.707,9.293 53.414,7 55.707,4.707 '></polygon>{' '}
              <rect
                x='3'
                y='3'
                width='39'
                height='8'></rect>{' '}
              <path d='M29.5,28c-2.481,0-4.5,2.019-4.5,4.5v9c0,2.481,2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5v-9C34,30.019,31.981,28,29.5,28z'></path>{' '}
            </g>{' '}
          </g>
        </svg>
      </Text>
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
        as={Link}
        to='/'
        size='lg'
        mt={8}>
        Back to ETool
      </Button>
    </Flex>
  );
};
