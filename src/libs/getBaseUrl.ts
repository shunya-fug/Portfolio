export const getBaseUrl = () => {
  if (process.env.VERCEL_ENV === 'production' || process.env.VERCEL_ENV === 'preview') {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'http://localhost:3000';
};
