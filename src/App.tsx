import { useState } from 'react';
import { Banner } from './components';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Banner />
    </div>
  );
}
