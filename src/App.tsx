import { useState } from 'react';
import { Banner, TaskInput, TaskList } from './components';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Banner />
      <main>
        <TaskInput />
        <TaskList />
      </main>
    </>
  );
}
