import { useState } from 'react';
import { Banner, TaskInput } from './components';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Banner />
      <TaskInput />
    </>
  );
}
