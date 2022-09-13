import { useState } from 'react';
import { Author, Banner, LanguageToggle, TaskInput, TaskList } from './components';
import './i18n';

export interface TaskModel {
  text: string;
  isDone: boolean;
}

export function App() {
  const [taskList, setTaskList] = useState<TaskModel[]>([]);

  function handleAddTask(text: string) {
    setTaskList((prev) => [...prev, { text, isDone: false }]);
  }

  function handleDeleteTask(index: number) {
    setTaskList((prev) => prev.filter((_, idx) => idx !== index));
  }

  function handleFinishTask(index: number) {
    taskList[index].isDone = !taskList[index].isDone;
    setTaskList((prev) => [...prev]);
  }

  return (
    <>
      <Banner />
      <main>
        <TaskInput handleAddTask={handleAddTask} />
        <TaskList tasks={taskList} handleDeleteTask={handleDeleteTask} handleFinishTask={handleFinishTask} />
        <footer>
          <Author />
          <LanguageToggle />
        </footer>
      </main>
    </>
  );
}
