import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useState } from 'react'
import { quotes, authors, colors } from './data.js'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {
  const [index, setIndex] = useState(0);

  return (
    <HelmetProvider>
      <div id="container">
        <div id="quote-box" style={{ color: colors[index] }}>
          <Quote quote={quotes[index]} />
          <Author author={authors[index]} />
          <Buttons
            color={colors[index]}
            quote={quotes[index]}
            author={authors[index]}
            onClick={() => {
              setIndex(index === quotes.length - 1 ? 0 : index + 1);
            }}
          />
          <Helmet>
            <>
              {<style>{"body { background-color:" + colors[index] + "; }"}</style>}
              {<link rel="preconnect" href="https://fonts.googleapis.com"></link>}
              {<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>}
              {<link href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap" rel="stylesheet"></link>}
              {<link href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Poetsen+One&display=swap" rel="stylesheet"></link>}
            </>
          </Helmet>
        </div>
        <div id="footer">by <a href="https://codepen.io/VinnyV" target="_blank">vinnyv</a></div>
      </div>
    </HelmetProvider>
  );
}

function Quote({ quote }) {
  return (
    <div id="quote-text">
      <p className="poetsen-one-regular">{quote}</p>
    </div>
  );
}

function Author({ author }) {
  return (
    <div id="author">
      <p className="cedarville-cursive-regular">{"- " + author}</p>
    </div>
  );
}

function Buttons({ color, onClick, quote, author }) {
  return (
    <div className="buttons">
      <button
        className="button"
        onClick={onClick}
        id="new-quote"
        title="See a new quote!"
        style={{ backgroundColor: color }}
      >
        New Quote
      </button>
      <a
        className="button"
        id="tweet-quote"
        title="Tweet this quote!"
        target="_blank"
        href={'"https://twitter.com/intent/tweet?=' + quote + " -" + author}
        style={{ backgroundColor: color }}
      >
        <i className="bi bi-twitter-x"></i>
      </a>
      <a
        className="button"
        id="insta-quote"
        title="Post this quote on FB!"
        target="_blank"
        href="https://facebook.com"
        style={{ backgroundColor: color }}
      >
        <i className="bi bi-instagram"></i>
      </a>
    </div>
  );
}

export default App;