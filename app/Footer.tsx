import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="sticky top-full p-2 text-center">
      <div className="relative m-auto max-w-5xl text-center">
        <span>&copy; Devekhack K.K.</span>
        <div className="absolute top-0 right-0 flex h-full items-center">
          <a
            href="https://github.com/develhack"
            target="_blank"
            className="relative inline-block h-[1em] w-[1em]"
          >
            <Image
              src="/github-mark.svg"
              alt="GitHub"
              layout="fill"
              className="dark:invert"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
