import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import {
  Wrapper,
  QuoteBox,
  Text,
  Author,
  NewQuote,
  Buttons,
  Brands,
} from './App.styles';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState('');
  const [color, setColor] = useState('');

  const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472e32',
    '#BDBB99',
    '#77b1a9',
    '#73A857',
  ];

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://type.fit/api/quotes');
      const data = await response.json();

      setQuotes(data);
      let randomIndex = Math.floor(Math.random() * data.length);
      let randomColor = Math.floor(Math.random() * colors.length);

      setRandomQuote(data[randomIndex]);
      setColor(colors[randomColor]);
    }
    fetchData();
  }, []);

  const newQuote = () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomColor = Math.floor(Math.random() * colors.length);

    setRandomQuote(quotes[randomIndex]);
    setColor(colors[randomColor]);
  };

  return (
    <Wrapper style={{ backgroundColor: color }}>
      <QuoteBox style={{ color: color }}>
        <Text>
          <FontAwesomeIcon icon={solid('quote-left')} />
          <span>{randomQuote.text}</span>
        </Text>
        <Author>
          - {randomQuote.author ? randomQuote.author : 'No Author'}
        </Author>
        <Buttons>
          <Brands>
            <button style={{ backgroundColor: color }}>
              <FontAwesomeIcon icon={brands('twitter')} />
            </button>
            <button style={{ backgroundColor: color }}>
              <FontAwesomeIcon icon={brands('tumblr')} />
            </button>
          </Brands>

          <NewQuote style={{ backgroundColor: color }} onClick={newQuote}>
            New quote
          </NewQuote>
        </Buttons>
      </QuoteBox>
    </Wrapper>
  );
}

export default App;
