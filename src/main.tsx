import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { App } from './App';
import { ContactPage } from './routes/ContactPage';
import { ErrorPage } from './routes/ErrorPage';
import { RegisterPage } from './routes/RegisterPage';

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
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('#f5faf5', '#151515')(props),
        color: mode('#293798', '#adb7c9')(props),
      },
      fonts: {
        body: `Montserrat Alternates`,
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
