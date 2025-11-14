'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useRef } from 'react';

const menus = [
  { title: 'ホーム', segment: '' },
  { title: '会社概要', segment: 'aboutus' },
  { title: 'お問い合わせ', segment: 'contact' },
  { title: '公告', segment: 'notice' },
];

export default function Navigation() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const activeSegment = useSelectedLayoutSegment() ?? '';
  return (
    <nav className="flex items-center justify-end">
      <button
        className="md:hidden"
        aria-label="メニューを開く"
        onClick={() => dialogRef.current?.showModal()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <dialog
        className="inset-auto top-0 right-0 min-h-dvh w-3xs translate-x-full transition-discrete duration-250 open:translate-x-0 md:contents starting:open:translate-x-full"
        onClick={() => dialogRef.current?.close()}
        ref={dialogRef}
      >
        <div className="px-4 py-6 text-end">
          <button
            className="md:hidden"
            onClick={() => dialogRef.current?.close()}
            aria-label="メニューを閉じる"
            autoFocus
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 6L16 16M6 16L16 6"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-4 md:flex-row">
          {menus.map((menu, i) => (
            <li
              key={i}
              className={clsx(
                'px-4',
                'border-2',
                'border-transparent',
                menu.segment === activeSegment && [
                  'border-l-blue-500',
                  'md:border-l-transparent',
                  'md:border-b-blue-500',
                ]
              )}
            >
              <Link
                href={`/${menu.segment}`}
                className="block hover:text-blue-500"
                onClick={() => dialogRef.current?.close()}
              >
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
      </dialog>
    </nav>
  );
}
