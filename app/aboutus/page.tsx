import createTitle from '@/lib/createTitle';
import { Metadata } from 'next';
import Image from 'next/image';

const title = '会社概要';

export const metadata: Metadata = { title: createTitle(title) };

export default function AboutUs() {
  return (
    <>
      <h1 className="py-8 text-center text-2xl">{title}</h1>
      <table className="m-auto">
        <tbody>
          <tr className="border-y">
            <th scope="row" className="p-3">
              社名
            </th>
            <td className="p-3">
              <div>株式会社デベルハック</div>
              <div>Develhack K.K.</div>
            </td>
          </tr>
          <tr className="border-b">
            <th scope="row" className="p-3">
              創業
            </th>
            <td className="p-3">
              <time dateTime="2008-04-01">2008年04月01日</time>
            </td>
          </tr>
          <tr className="border-b">
            <th scope="row" className="p-3">
              設立
            </th>
            <td className="p-3">
              <time dateTime="2016-01-04">2016年01月04日</time>
            </td>
          </tr>
          <tr className="border-b">
            <th scope="row" className="p-3">
              資本金
            </th>
            <td className="p-3">50万円</td>
          </tr>
          <tr className="border-b">
            <th scope="row" className="p-3">
              設立
            </th>
            <td className="p-3">2016-01-04</td>
          </tr>
          <tr className="border-b">
            <th scope="row" className="p-3">
              代表者
            </th>
            <td className="p-3">代表取締役社長　大塚 洋佑</td>
          </tr>
          <tr className="border-b">
            <th scope="row" className="p-3">
              所在地
            </th>
            <td className="p-3">〒173-0022 東京都板橋区仲町39-23</td>
          </tr>
          <tr className="border-b">
            <th scope="row" className="p-3">
              事業内容
            </th>
            <td className="p-3">
              <ul>
                <li>システムアーキテクチャ設計</li>
                <li>ソフトウェアアーキテクチャ設計・開発</li>
                <li>ソフトウェア設計・開発</li>
                <li>開発環境設計・構築</li>
              </ul>
            </td>
          </tr>
          <tr className="border-b">
            <th scope="row" className="p-3">
              登録番号
            </th>
            <td className="p-3">T7011401019142</td>
          </tr>
          <tr className="border-b">
            <th scope="row" className="p-3">
              公告
            </th>
            <td className="p-3">
              <a
                className="inline-flex items-center border-b border-dashed hover:text-blue-500"
                href="https://k.secure.freee.co.jp/companies/330/announces"
                target="_blank"
              >
                <span>電子公告</span>
                <svg
                  className="w- ml-2 inline-block h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                  />
                </svg>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
