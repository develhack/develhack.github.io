import Image from 'next/image';
import Link from 'next/link';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header>
      <div className="m-auto grid max-w-5xl grid-cols-[auto_1fr] p-4">
        <Link href="/">
          <Image
            src="/devel-horizontal.svg"
            alt="Develhack K.K."
            width={200}
            height={40}
            priority
          />
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
