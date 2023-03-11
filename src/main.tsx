import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { App } from './App';
import { ContactPage } from './routes/ContactPage';
import { ErrorPage } from './routes/ErrorPage';
import { RegisterPage } from './routes/RegisterPage';
import '@fontsource/montserrat';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
]);

const theme = extendTheme({
  fonts: {
    body: 'Montserrat',
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('#f5faf5', '#151515')(props),
        color: mode('#293798', '#adb7c9')(props),
      },
    }),
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
);
