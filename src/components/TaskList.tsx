import React, { useState } from 'react';
import { Task } from './Task';
import ClipboardIcon from '../assets/Clipboard.svg';
import styles from './TaskList.module.css';

export function TaskList() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className={styles.outer}>
      <div className={styles.heading}>
        <InfoText badge='0'>
          <p style={{ color: '#4EA8DE' }}>Tarefas criadas</p>
        </InfoText>
        <InfoText badge='2 de 5'>
          <p style={{ color: '#5E60CE' }}>Concluídas</p>
        </InfoText>
      </div>
      <div className={styles.taskListSeparator} />
      {/* <TaskListEmpty /> */}
      <Task
        text={'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'}
        handleDelete={() => {}}
      />
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
