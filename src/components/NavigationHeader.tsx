'use client';

import { HomeIcon, InboxIcon, SunIcon } from '@heroicons/react/24/outline';
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
            <Link href={'/'} className='sm:after:content-["Portfolio"]'>
              <HomeIcon className='h-6 w-6 sm:hidden' />
            </Link>
          </li>
          {currentPath !== 'blog' && (
            <li>
              <Link href={'/blog'} className='sm:after:content-["Blog"]'>
                <InboxIcon className='h-6 w-6 sm:hidden' />
              </Link>
            </li>
          )}
        </ul>
      </div>
      {/* 現在のページ項目を表示 */}
      <div className='navbar-center text-xl'>{currentPath === 'blog' ? 'Blog' : 'Content'}</div>
      {/* TODO: テーマ切り替えボタン */}
      <div className='navbar-end'>
        <label className='swap-rotate swap'>
          <input type='checkbox' />
          <SunIcon className='swap-off h-6 w-6' />
          <SunIcon className='swap-on h-6 w-6' />
          {/* <MoonIcon className='swap-on h-6 w-6' /> */}
        </label>
      </div>
    </div>
  );
}
