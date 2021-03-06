import React from 'react';
import { Home } from './components/home/Home';
import { NavigationBar } from './components/shared/NavigationBar';

function App() {
  return (
    <div className="App">
      <div className='p-4'>

        <NavigationBar />
        <hr />
        <Home />     
        
      </div>
    </div>
  );
}

export default App;
