import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { IComment } from '../../store';

const styles = require('./AddComment.css').default;

interface Props {
  onSubmit: (message: string, ...args: any[]) => void;
  comment?: IComment
}

function AddComment({ onSubmit, comment }: Props) {
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
            onSubmit(value, comment);
            setValue('');
          }}>{comment ? 'Reply': 'Comment'}</button>
      </div>
    </div>
  );
}

export default observer(AddComment);
