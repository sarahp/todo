import React from 'react';
import TodoTable from './components/TodoTable';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1 style={{ textAlign: 'center' }}>Todo App</h1>
        <TodoTable />
      </div>
    </RecoilRoot>
  );
}

export default App;
