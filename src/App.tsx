import { useState } from 'react';
import { Banner, TaskInput, TaskList } from './components';

export function App() {
  const [taskList, setTaskList] = useState(['']);

  function handleAddTask(text: string) {
    setTaskList((prev) => [...prev, text]);
  }

  function handleDeleteTask(index: number) {
    setTaskList((prev) => prev.filter((_, idx) => idx !== index));
  }

  return (
    <>
      <Banner />
      <main>
        <TaskInput handleAddTask={handleAddTask} />
        <TaskList tasks={taskList} handleDeleteTask={handleDeleteTask} />
      </main>
    </>
  );
}
