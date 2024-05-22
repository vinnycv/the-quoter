// import { Helmet } from "react-helmet"
import { useState } from 'react'
import { quotes, authors, colors } from './data.js'
import './App.css'

function App() {
  const [index, setIndex] = useState(0);

  return (
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
        {/* <Helmet>
          {<style>{"body { background-color:" + colors[index] + "; }"}</style>}
        </Helmet> */}
      </div>
      <div id="footer">by vinnyv</div>
    </div>
  );
}

function Quote({ quote }) {
  return (
    <div id="text">
      <p>{quote}</p>
    </div>
  );
}

function Author({ author }) {
  return (
    <div id="author">
      <p>{"- " + author}</p>
    </div>
  );
}

function Buttons({ color, onClick, quote, author }) {
  return (
    <div className="buttons">
      <div
        className="btn"
        onClick={onClick}
        id="new-quote"
        title="See a new quote!"
        style={{ backgroundColor: color }}
      >
        New Quote
      </div>
      <a
        className="btn"
        id="tweet-quote"
        title="Tweet this quote!"
        target="_blank"
        href={'"https://twitter.com/intent/tweet?=' + quote + " -" + author}
        style={{ backgroundColor: color }}
      >
        <i className="fa fa-twitter fa-lg"></i>
      </a>
      <a
        className="btn"
        id="insta-quote"
        title="Post this quote on FB!"
        target="_blank"
        href="https://facebook.com"
        style={{ backgroundColor: color }}
      >
        <i className="fa fa-facebook fa-lg"></i>
      </a>
    </div>
  );
}

export default App;

//ReactDOM.render(<App />, document.getElementById("app"));

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);*/


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
