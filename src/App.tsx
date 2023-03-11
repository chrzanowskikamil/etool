import { Box } from '@chakra-ui/react';
import { Navigation } from './components/Navigation/Navigation';

export const App = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      w='100vw'
      h='100vh'>
      <Navigation />
    </Box>
  );
};
