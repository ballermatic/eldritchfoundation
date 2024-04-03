'use client';

import clsx from 'clsx';
import { Squash as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Logo from '../logo/logo-mark';

interface MenuItem {
  linkText: string;
  href: string;
}

export default function MenuSmall({
  menuPrimary,
  menuOpen,
  menuToggle,
}: {
  menuPrimary: MenuItem[];
  menuOpen: boolean;
  menuToggle: (open: boolean) => void;
}) {
  const pathname = usePathname();

  const closeMenu = () => {
    if (menuOpen) {
      menuToggle(false);
    }
  };

  return (
    <div className='flex flex-col ~gap-2/4 bg-white min-h-dvh min-w-vw fixed inset-0 z-50'>
      <div className='flex flex-row items-center justify-between'>
        <Link
          href='/'
          className='p-2'
          onClick={closeMenu}>
          <Logo />
        </Link>
        <Hamburger
          label='Show menu'
          size={24}
          toggled={menuOpen}
          toggle={() => menuToggle(!menuOpen)}
        />
      </div>
      <div className='flex flex-col ~gap-2/4 px-2 items-center'>
        {menuPrimary.map((item, index) => {
          const isCurrentPage = pathname === item.href;
          return (
            <Link
              key={index}
              href={item.href}
              className={clsx('inline-block p-2 text-xl', {
                'hover:text-blue-500': !isCurrentPage,
                'text-gray-400 pointer-events-none': isCurrentPage,
              })}
              onClick={closeMenu}>
              {item.linkText}
            </Link>
          );
        })}
        <div className='mt-12'>
          <p className='text-sm max-w-60 text-center'>
            Mobile menus are often different than those for larger screens
          </p>
        </div>
      </div>
    </div>
  );
}
