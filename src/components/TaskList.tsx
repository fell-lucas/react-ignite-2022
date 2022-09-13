import React, { useCallback, useState } from 'react';
import { Task } from './Task';
import ClipboardIcon from '../assets/Clipboard.svg';
import styles from './TaskList.module.css';
import { TaskModel } from '../App';

interface TaskListProps {
  tasks: TaskModel[];
  handleDeleteTask: (index: number) => void;
  handleFinishTask: (index: number) => void;
}

export function TaskList({ tasks, handleDeleteTask, handleFinishTask }: TaskListProps) {
  const finishedText = useCallback(() => {
    return `${tasks.filter((task) => task.isDone).length} de ${tasks.length}`;
  }, [tasks]);

  return (
    <div className={styles.outer}>
      <div className={styles.heading}>
        <InfoText badge={`${tasks.length}`}>
          <p style={{ color: '#4EA8DE' }}>Tarefas criadas</p>
        </InfoText>
        <InfoText badge={finishedText()}>
          <p style={{ color: '#5E60CE' }}>Concluídas</p>
        </InfoText>
      </div>
      <div className={styles.taskListSeparator} />
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <Task
            task={task}
            handleFinishTask={() => handleFinishTask(index)}
            handleDelete={() => handleDeleteTask(index)}
          />
        ))
      ) : (
        <TaskListEmpty />
      )}
    </div>
  );
}

interface InfoTextProps extends React.PropsWithChildren {
  badge: string;
}

function InfoText({ badge, children }: InfoTextProps) {
  return (
    <div className={styles.infoText}>
      {children} <div>{badge}</div>
    </div>
  );
}

function TaskListEmpty() {
  return (
    <div className={styles.taskListEmpty}>
      <img src={ClipboardIcon} width='56' alt='Clipboard' />
      <div>
        <p>
          <b>Você ainda não tem tarefas cadastradas</b>
        </p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
