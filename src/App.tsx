import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTable from './components/TodoTable';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <TodoTable />
      </div>
    </RecoilRoot>
  );
}

export default App;
