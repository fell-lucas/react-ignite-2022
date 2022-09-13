import styles from './TaskInput.module.css';
import PlusIcon from '../assets/plus.svg';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface TaskInputProps {
  handleAddTask: (text: string) => void;
}

export function TaskInput({ handleAddTask }: TaskInputProps) {
  const [inputFocused, setInputFocused] = useState(false);
  const [inputText, setInputText] = useState('');
  const { t } = useTranslation();

  function handleFocus() {
    setInputFocused((state) => !state);
  }

  function handleInputChange(newText: string) {
    setInputText(newText);
  }

  function handleCreate() {
    if (inputText !== '') {
      handleAddTask(inputText);
      setInputText('');
    }
  }

  return (
    <div className={styles.outer}>
      <div className={[styles.input, inputFocused ? styles.inputBorderFocus : ''].join(' ')}>
        {inputFocused && <p>{t('task-description')}</p>}
        <input
          value={inputText}
          onChange={(e) => handleInputChange(e.target.value)}
          type='text'
          onFocus={handleFocus}
          onBlur={handleFocus}
          placeholder={t('add-new-task')}
        />
      </div>
      <button onClick={handleCreate} className={styles.button}>
        {t('add')} <img src={PlusIcon} />
      </button>
    </div>
  );
}
