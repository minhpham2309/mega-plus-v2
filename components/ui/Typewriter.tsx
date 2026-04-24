import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
  // Fix: The JSX namespace is nested under React. Use React.JSX.IntrinsicElements to avoid 'Cannot find namespace' errors.
  tag?: keyof React.JSX.IntrinsicElements;
  startDelay?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ 
  text, 
  speed = 80, 
  className, 
  tag: Tag = 'p',
  startDelay = 500
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setIsFinished(false);

    const startTimeout = setTimeout(() => {
      let i = 0;
      const intervalId = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.substring(0, i + 1));
          i++;
        } else {
          clearInterval(intervalId);
          setIsFinished(true);
        }
      }, speed);
      return () => clearInterval(intervalId);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, startDelay]);

  return (
    <Tag className={className}>
      <span className={!isFinished ? 'border-r-2 border-current animate-blink-border pr-1' : ''}>{displayedText}</span>
    </Tag>
  );
};

export default Typewriter;
