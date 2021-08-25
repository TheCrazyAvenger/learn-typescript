import React, { useState } from 'react';

interface ToDoFormProps {
  onAdd(title: string): void;
}

export const ToDoForm: React.FC<ToDoFormProps> = (props) => {
  const [title, setTitle] = useState<string>('');

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      props.onAdd(title);
      setTitle('');
    }
  };

  return (
    <div className='input-field mt2'>
      <input
        onChange={changeHandler}
        value={title}
        type='text'
        id='title'
        placeholder='Введите название дела'
        onKeyPress={keyPressHandler}
      />
      <label htmlFor='title' className='active'>
        Введите название дела
      </label>
    </div>
  );
};
