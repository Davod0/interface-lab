"use client";
import { TypeAnimation } from 'react-type-animation';
import '../globals.css';

const TypingLoop = ({ text1, text2, text3 }) => {
  return (
    <div
      className="text-white text-1xl sm:text-3xl lg:text-5xl font-extrabold mb-6 mt-3"
      style={{
        lineHeight: "1em",
        minHeight: "2em",
      }}
    >
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
        speed={70}
        style={{ display: 'inline-block' }}
        repeat={Infinity}
      />
    </div>
  );
};

export default TypingLoop;
