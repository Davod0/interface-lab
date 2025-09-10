"use client";
import { TypeAnimation } from 'react-type-animation';

export const TypingLoop= ({ text1, text2, text3 }) => {
  return (
    <TypeAnimation className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-5"
      sequence={[
        text1,
        1000,
        text2,
        1000,
        text3,
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};