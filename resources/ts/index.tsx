import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import { Provider } from 'jotai';
import { DevTools } from 'jotai-devtools';
import 'jotai-devtools/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import { App } from '@/app';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        <DevTools />
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>,
);
