import React, { useState } from "react";

const quotes = [
  { text: "Less is More", author: "Ludwig Mies Van Der Rohe" },
  { text: "Good building comes from good people and all problems are solved by good design", author: "Stephen Gardiner" },
  { text: "There are 360 degrees, so why stick to one?", author: "Zaha Hadid" },
  { text: "Form ever follows function", author: "Louis Sullivan" },
  { text: "Recognizing the need is the primary condition of design", author: "Charles Eames" },
  { text: "Success is Not Final, Failure is Not Fatal: it is the Courage to Continue that Counts", author: "Winston Churchill" },
  { text: "He Who is Not Courageous Enough to Take Risks Will Accomplish Nothing in Life", author: "Muhammad Ali" },
  { text: "Don’t Wait for Opportunity, Create it", author: "George Bernard Shaw" },
  
];

const colors = ["#FFB6C1", "#87CEFA", "#90EE90", "#FF7F50", "#9370DB"];

function App() {
  const [quote, setQuote] = useState(quotes[0]);
  const [bgColor, setBgColor] = useState(colors[0]);

  const generateRandomQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setQuote(randomQuote);
    setBgColor(randomColor);
  };

  return (
    <div
      style={{
        textAlign: "center",
        minHeight: "100vh",
        backgroundColor: bgColor,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        transition: "background-color 0.5s ease",
      }}


    >
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
        Random Quote Generator
      </h1>
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "400px",
          textAlign: "center",
          marginBottom: "20px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        }}


      >
        <p style={{ fontSize: "20px", fontStyle: "italic", color: "#333" }}>
          "{quote.text}"
        </p>
        <p style={{ fontSize: "16px", color: "#555" }}>- {quote.author}</p>
      </div>
      <button

        onClick={generateRandomQuote}
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#333",
          color: "white",
          fontSize: "16px",
          cursor: "pointer",
          margin: "10px",
        }}


      >
        New Quote
      </button>
      <a
        href={`https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#333",
          textDecoration: "none",
          fontSize: "14px",
          marginTop: "10px",
        }}

        
      >
        Tweet Quote
      </a>
    </div>
  );
}

export default App;
