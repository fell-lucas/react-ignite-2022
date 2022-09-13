import React, { useCallback, useState } from 'react';
import styles from './Task.module.css';
import TrashIcon from '../assets/Trash.svg';
import TrashIconRed from '../assets/TrashRed.svg';
import Checkmark from '../assets/Checkmark.svg';
import { TaskModel } from '../App';

interface TaskProps extends React.PropsWithChildren {
  task: TaskModel;
  handleDelete: () => void;
  handleFinishTask: () => void;
}

export function Task({ task, handleDelete, handleFinishTask, children }: TaskProps) {
  const [isDeleteHovered, setIsDeleteHovered] = useState(false);

  const handleDeleteHover = useCallback(() => {
    setIsDeleteHovered((state) => !state);
  }, [isDeleteHovered]);

  return (
    <div className={[styles.outer, task.isDone ? styles.outerBorderDone : styles.outerBorder].join(' ')}>
      <button
        onClick={handleFinishTask}
        className={[task.isDone ? styles.checkedDoneButton : styles.uncheckedDoneButton, styles.button].join(' ')}
      >
        {task.isDone && <img src={Checkmark} alt='Done' />}
      </button>
      <p className={task.isDone ? styles.isDoneText : ''}>{task.text}</p>
      <button
        onMouseEnter={handleDeleteHover}
        onMouseLeave={handleDeleteHover}
        className={[styles.deleteButton, styles.button].join(' ')}
        onClick={handleDelete}
      >
        {isDeleteHovered ? <img src={TrashIconRed} alt='Delete' /> : <img src={TrashIcon} alt='Delete' />}
      </button>
    </div>
  );
}
