'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';

/**
 * @see https://tanstack.com/query/v4/docs/react/guides/ssr#queryclientprovider-is-required-by-both-the-initialdata-and-hydrate-prefetching-approaches
 */
function Providers({ children }: React.PropsWithChildren) {
  const [client] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default Providers;
