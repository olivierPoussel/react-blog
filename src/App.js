import React from 'react';
import Header from './components/header/header';
import Register from './pages/register';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <h1>Mon blog</h1>
        <Register />
      </main>
      <footer className="bg-secondary">
        <ul>
          <li><a href="">lien vers qch</a></li>
          <li><a href="">lien vers qch</a></li>
          <li><a href="">lien vers qch</a></li>
        </ul>
      </footer>
    </>
  );
}

export default App;
