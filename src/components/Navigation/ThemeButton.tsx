import { IconButton, Tooltip, useColorMode } from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';

export const ThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  let iconTheme = colorMode === 'dark' ? <FiMoon fontSize={20} /> : <FiSun fontSize={20} />;

  return (
    <Tooltip label='Theme'>
      <IconButton
        onClick={toggleColorMode}
        aria-label='Change theme.'
        icon={iconTheme}
        bg='transparent'
      />
    </Tooltip>
  );
};
