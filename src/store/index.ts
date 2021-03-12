import { Instance, types } from 'mobx-state-tree';

import { Comment, User } from './models';

export const Store = types
  .model({
    comments: types.array(Comment),
    user: types.optional(User, {
      id: 1,
      username: 'emil',
      image: 'https://www.redditstatic.com/avatars/avatar_default_02_A5A4A4.png'
    })
  })
  .actions(self => {

    function _createComment(message: string, parentId?: number) {
      return Comment.create({
        id: Date.now(),
        user: self.user.id,
        createdAt: new Date().toString(),
        parentId,
        message
      });
    }

    function submit(message: string) {
      const comment = _createComment(message);
      self.comments.push(comment);
    }

    function reply(message: string, parentComment: Instance<typeof Comment>) {
      const comment = _createComment(message, parentComment.id);
      parentComment.replies.push(comment);
    }

    return {
      submit,
      reply
    };
  });

export type IComment = Instance<typeof Comment>;
export type IStore = Instance<typeof Store>;
