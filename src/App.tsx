import React from 'react';
import { Timeline } from './components/Timeline';
import { Hero } from './components/Hero';
import { Legacy } from './components/Legacy';
import { Navigation } from './components/Navigation';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Timeline />
      <Legacy />
      <footer className="footer">
        <p>© 2024 Steve Jobs Biography</p>
      </footer>
    </div>
  );
};

export default App;