import '../css/App.css';
import React from 'react';
import CardForm from "./CardForm";
import Header from "./Header"

function App() {
  return (
      <div className="container">
        <header>
          <Header />
        </header>
        <main>
          <CardForm />
        </main>
      </div>
  );
};

export default App;
