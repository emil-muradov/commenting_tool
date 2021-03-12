import React, { useState, useCallback } from 'react';
import { observer } from 'mobx-react-lite';

import { timePassed } from '../../utils/timePassed';

import { IComment } from '../../store';
import AddCommentWindow from '../add_comment/AddComment';

const styles = require('./Comment.css').default;

export const AVATAR_DEFAULT_SIZE = 28;
export const AVATAR_SMALL_SIZE = 18;

interface Props {
  avatarSize?: number;
  comment: IComment
  onReply: (message: string, comment: IComment) => void
}

export function Comment({ comment, onReply, avatarSize = AVATAR_DEFAULT_SIZE }: Props) {
  const [showInput, setShowInput] = useState(false);

  const reply = useCallback((message: string) => {
      onReply(message, comment);
      setShowInput(false);
  }, [comment]);

  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img src={comment.user.image} width={avatarSize} alt={'User avatar'} />
      </div>
      <div className={styles.content}>
        <div className={styles.head}>
          <span>{comment.user.username}</span>
          <span className={styles.timePassed}>{timePassed(comment.createdAt)}</span>
        </div>
        <div className={styles.message}>{comment.message}</div>
        <div className={styles.actions} onClick={() => setShowInput(!showInput)}>
          <div className={styles.action}>
            <i className={styles.commentIcon} />
            <span>{'Reply'}</span>
          </div>
        </div>
        {showInput ? <AddCommentWindow onSubmit={reply} mode={'Reply'} /> : null}
        {comment.replies.map((x, i) => <Comment key={i} comment={x} onReply={onReply} avatarSize={AVATAR_SMALL_SIZE} />)}
      </div>
    </div>
  );
}

export default observer(Comment);
