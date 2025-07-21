import React, { useEffect, useState } from 'react';

const CHARS = 'ㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙㄧㄨㄩㄚㄛㄜㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦˉˊˇˋ˙0123456789!@#$%^&*()_+-=<>?';

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

export default function DecryptedText({ text, duration = 1200, interval = 15, className, style, isActive = true }) {
  const [display, setDisplay] = useState(text);
  useEffect(() => {
    if (!isActive) return;
    let frame = 0;
    let revealed = '';
    let timer;
    function animate() {
      if (frame < text.length) {
        revealed = text.slice(0, frame) + Array.from({length: text.length - frame}).map(randomChar).join('');
        setDisplay(revealed);
        frame++;
        timer = setTimeout(animate, interval);
      } else {
        setDisplay(text);
      }
    }
    animate();
    return () => clearTimeout(timer);
  }, [text, duration, interval, isActive]);
  return <span className={className} style={style}>{display}</span>;
} 