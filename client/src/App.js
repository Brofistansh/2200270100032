// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shortener from './pages/Shortener';
import Stats from './pages/Stats';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shortener />} />
        <Route path="/stats/:code" element={<Stats />} />
      </Routes>
    </Router>
  );
}
