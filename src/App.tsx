import React from 'react';
import { IssueEntry } from './components/shared/IssueEntry';
import { NavigationBar } from './components/shared/NavigationBar';

function App() {
  return (
    <div className="App">
      <div className='p-4'>
        <NavigationBar />
        <hr />
        <div className='h-20'></div>
        <IssueEntry />
        
      </div>
    </div>
  );
}

export default App;
