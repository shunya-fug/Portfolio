import { QueryClient } from '@tanstack/query-core';
import { cache } from 'react';

/**
 * @see https://tanstack.com/query/v4/docs/react/guides/ssr#using-hydrate
 */
const getQueryClient = cache(() => new QueryClient());
export default getQueryClient;
