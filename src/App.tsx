import React from 'react';
import { observer } from 'mobx-react-lite';

import { IStore } from './store';

import Comment from './components/comment/Comment';
import AddCommentWindow from './components/add_comment/AddComment';

const styles = require('./App.css').default;

interface Props {
  store: IStore
}

export function App({ store }: Props) {
  return (
    <div className={styles.app}>
      <div>
        <AddCommentWindow onSubmit={store.submit} />
        <div className={styles.commentList}>
          {
            store.comments.map(x => <Comment key={x.id} comment={x} onReply={store.reply} />)
          }
        </div>
      </div>
    </div>
  );
}

export default observer(App);

