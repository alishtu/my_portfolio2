import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { AppProvider } from './AppContext';
import './App.css';

const App = () => {
  return (
    <AppProvider>
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </AppProvider>
  );
};

export default App;
