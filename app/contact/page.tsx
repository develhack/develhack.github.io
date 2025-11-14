import createTitle from '@/lib/createTitle';
import { Metadata } from 'next';

const title = 'お問い合わせ';

export const metadata: Metadata = { title: createTitle(title) };

export default function AboutUs() {
  return (
    <>
      <h1 className="py-8 text-center text-2xl">{title}</h1>
      <p className="text-center">下記にお問い合わせください</p>
      <p className="text-center">
        <a
          className="hover:text-blue-500"
          href="mailto:contact@develhack.com"
          target="_blank"
        >
          contact@develhack.com
        </a>
      </p>
    </>
  );
}
