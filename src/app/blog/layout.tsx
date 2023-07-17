import NavigationHeader from '@/components/NavigationHeader';
import React from 'react';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavigationHeader />
      {children}
    </>
  );
}
