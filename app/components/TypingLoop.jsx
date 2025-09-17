"use client";
import { TypeAnimation } from 'react-type-animation';

const TypingLoop= ({ text1, text2, text3 }) => {
  return (
    <div className="text-white text-1xl sm:text-2xl lg:text-4xl font-extrabold mb-6">
      <TypeAnimation
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
    </div>

  );
};
export default TypingLoop;