import 'server-only';

import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '',
  apiKey: process.env.MICROCMS_API_KEY || '',
});

export const clientPortfolio = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN_PORTFOLIO || '',
  apiKey: process.env.MICROCMS_API_KEY_PORTFOLIO || '',
});
