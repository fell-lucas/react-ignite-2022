import styles from './TaskInput.module.css';
import PlusIcon from '../assets/plus.svg';
import React, { useState } from 'react';

export function TaskInput() {
  const [inputFocused, setInputFocused] = useState(false);

  function handleFocus() {
    setInputFocused((state) => !state);
  }

  return (
    <div className={styles.outer}>
      <div className={[styles.input, inputFocused ? styles.inputBorderFocus : ''].join(' ')}>
        {inputFocused && <p>Descrição da tarefa</p>}
        <input type='text' onFocus={handleFocus} onBlur={handleFocus} placeholder='Adicione uma nova tarefa' />
      </div>
      <button className={styles.button}>
        Criar <img src={PlusIcon} />
      </button>
    </div>
  );
}
