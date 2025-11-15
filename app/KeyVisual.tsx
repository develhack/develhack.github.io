'use client';

import { useEffect, useState } from 'react';
import Typing, { TypingEvent, TypingEventHandler } from '../lib/typing-jp';
import clsx from 'clsx';
export default function KeyVisual() {
  const [message, setMessage] = useState<TypingEvent | undefined>();

  useEffect(() => {
    const callback: TypingEventHandler = (event) => {
      setMessage(event);
    };

    new Typing(callback, 50)
      .type('')
      .wait(1000)
      .type(
        [...'べろっぷめんと'],
        [...'ｄｂｒｐｐｍｎｔ'],
        ['デベロップメント']
      )
      .type(['を'], ['ｗ'])
      .newLine()
      .type([...'はっく'], [...'ｈｋｋ'], ['八苦'])
      .type(['す', 'ｒ'], ['ｓ', ''], false)
      .wait(200)
      .back(4)
      .type([...'はっく'], [...'ｈｋｋ'], ['八苦', 'ハック'])
      .type([...'する'], [...'ｓｒ'])
      .newLine()
      .newLine()
      .type('Develhack K.K.')
      .end();
  }, []);

  return (
    <article
      className="text-center text-4xl"
      aria-label="デベロップメントをハックする Develhack K.K."
    >
      {message?.lines.map((line, i) => (
        <span
          aria-hidden
          className={clsx(
            'block',
            'h-[1em]',
            'my-4',
            line.broken && [
              'after:content-["↵"]',
              'after:absolute',
              'after:opacity-25',
            ]
          )}
          key={i}
        >
          {line.tokens.map((token, j) => (
            <span
              key={j}
              aria-hidden
              className={clsx(
                line.broken || [
                  'last:-mr-0.5',
                  'last:border-r-2',
                  'last:animate-blink-caret',
                ],
                token.composing && ['underline']
              )}
            >
              {token.characters.join('')}
            </span>
          ))}
        </span>
      ))}
    </article>
  );
}
