import React, { useState } from 'react';
import styles from './Task.module.css';
import TrashIcon from '../assets/Trash.svg';
import TrashIconRed from '../assets/TrashRed.svg';
import Checkmark from '../assets/Checkmark.svg';

interface TaskProps extends React.PropsWithChildren {
  text: string;
  handleDelete: () => void;
}

export function Task({ text, children }: TaskProps) {
  const [isDeleteHovered, setIsDeleteHovered] = useState(false);
  const [isDone, setIsDone] = useState(false);

  function handleDeleteHover() {
    setIsDeleteHovered((state) => !state);
  }

  function handleDone() {
    setIsDone((state) => !state);
  }

  return (
    <div className={[styles.outer, isDone ? styles.outerBorderDone : styles.outerBorder].join(' ')}>
      <button
        onClick={handleDone}
        className={[isDone ? styles.checkedDoneButton : styles.uncheckedDoneButton, styles.button].join(' ')}
      >
        {isDone && <img src={Checkmark} alt='Done' />}
      </button>
      <p className={isDone ? styles.isDoneText : ''}>{text}</p>
      <button
        onMouseEnter={handleDeleteHover}
        onMouseLeave={handleDeleteHover}
        className={[styles.deleteButton, styles.button].join(' ')}
      >
        {isDeleteHovered ? <img src={TrashIconRed} alt='Delete' /> : <img src={TrashIcon} alt='Delete' />}
      </button>
    </div>
  );
}
