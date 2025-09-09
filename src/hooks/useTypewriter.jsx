import { useEffect, useState } from 'react';

export const useTypewriter = (text, speed = 100, delay = 0) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let charIndex = 0;
    let timeoutId;

    const startTyping = () => {
      if (charIndex <= text.length) {
        setDisplayText(text.substring(0, charIndex++));
        timeoutId = setTimeout(startTyping, speed);
      }
    };

    const timerId = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(timerId);
      clearTimeout(timeoutId);
    };
  }, [text, speed, delay]);

  return displayText;
};