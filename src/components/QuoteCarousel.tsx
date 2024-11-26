import React, { useState, useEffect } from 'react';
import { Quote } from '../types';
import { FEATURED_QUOTES } from '../constants';

export const QuoteCarousel: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % FEATURED_QUOTES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="quote-carousel">
      {FEATURED_QUOTES.map((quote, index) => (
        <div
          key={index}
          className={\`quote-slide \${currentQuote === index ? 'active' : ''}\`}
        >
          <blockquote>{quote.text}</blockquote>
          <footer>- {quote.author}</footer>
        </div>
      ))}
    </div>
  );
};