import createTitle from '@/lib/createTitle';
import { Metadata } from 'next';

const title = '公告';

const notices = [
  { title: '2024年度 決算公告', document: 'bs-2024.pdf' },
  { title: '2023年度 決算公告', document: 'bs-2023.pdf' },
  { title: '2022年度 決算公告', document: 'bs-2022.pdf' },
  { title: '2021年度 決算公告', document: 'bs-2021.pdf' },
  { title: '2020年度 決算公告', document: 'bs-2020.pdf' },
  { title: '2019年度 決算公告', document: 'bs-2019.pdf' },
  { title: '2018年度 決算公告', document: 'bs-2018.pdf' },
  { title: '2017年度 決算公告', document: 'bs-2017.pdf' },
  { title: '2016年度 決算公告', document: 'bs-2016.pdf' },
];

export const metadata: Metadata = { title: createTitle(title) };

export default function AboutUs() {
  return (
    <>
      <h1 className="py-8 text-center text-2xl">{title}</h1>
      <ul>
        {notices.map((notice) => (
          <li key={notice.document} className="p-1 text-center">
            <a
              href={`/notice/${notice.document}`}
              target="_blank"
              className="hover:text-blue-500"
            >
              {notice.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
