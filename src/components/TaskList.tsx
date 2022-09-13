import React, { useCallback, useState } from 'react';
import { Task } from './Task';
import ClipboardIcon from '../assets/Clipboard.svg';
import styles from './TaskList.module.css';
import { TaskModel } from '../App';
import { useTranslation } from 'react-i18next';

interface TaskListProps {
  tasks: TaskModel[];
  handleDeleteTask: (index: number) => void;
  handleFinishTask: (index: number) => void;
}

export function TaskList({ tasks, handleDeleteTask, handleFinishTask }: TaskListProps) {
  const { t } = useTranslation();

  const finishedText = useCallback(
    () => `${tasks.filter((task) => task.isDone).length} ${t('of')} ${tasks.length}`,
    [tasks]
  );

  return (
    <div className={styles.outer}>
      <div className={styles.heading}>
        <InfoText badge={`${tasks.length}`}>
          <p style={{ color: '#4EA8DE' }}>{t('created-tasks')}</p>
        </InfoText>
        <InfoText badge={finishedText()}>
          <p style={{ color: '#5E60CE' }}>{t('done')}</p>
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
  const { t } = useTranslation();

  return (
    <div className={styles.taskListEmpty}>
      <img src={ClipboardIcon} width='56' />
      <div>
        <p style={{ textAlign: 'center' }}>
          <b>{t('empty-tasks-title')}</b>
        </p>
        <p>{t('empty-tasks-subtitle')}</p>
      </div>
    </div>
  );
}
