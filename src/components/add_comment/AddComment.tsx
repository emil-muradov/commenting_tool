import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

const styles = require('./AddComment.css').default;

interface Props {
  onSubmit: (message: string) => void;
  mode?: 'Comment' | 'Reply';
}

const AddComment: React.FC<Props> = ({ onSubmit, mode = 'Comment' }) => {
  const [value, setValue] = useState('');

  return (
    <div className={styles.container}>
      <div className={styles.messageWindow}>
         <textarea
           rows={8}
           value={value}
           onChange={(e) => setValue(e.target.value)}
         />
      </div>
      <div className={styles.toolbar}>
        <button
          className={styles.submitButton}
          disabled={!value}
          onClick={() => {
            onSubmit(value);
            setValue('');
          }}>{mode}</button>
      </div>
    </div>
  );
}

export default observer(AddComment);
