'use client';

import { SunIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavigationHeader() {
  const pathList = usePathname().split('/');
  const currentPath = pathList.pop();

  return (
    <div className='navbar bg-base-300 px-8'>
      {/* 以前のページ項目を表示 */}
      <div className='navbar-start breadcrumbs text-lg'>
        <ul>
          <li>
            <Link href={'/'}>Portfolio</Link>
          </li>
          {currentPath !== 'blog' && (
            <li>
              <Link href={'/blog'}>Blog</Link>
            </li>
          )}
        </ul>
      </div>
      {/* 現在のページ項目を表示 */}
      <div className='navbar-center text-xl'>{currentPath === 'blog' ? 'Blog' : 'Content'}</div>
      {/* TODO: テーマ切り替えボタン */}
      <div className='navbar-end'>
        <label className='swap swap-rotate'>
          <input type='checkbox' />
          <SunIcon className='swap-off h-6 w-6' />
          <SunIcon className='swap-on h-6 w-6' />
          {/* <MoonIcon className='swap-on h-6 w-6' /> */}
        </label>
      </div>
    </div>
  );
}
