import { IAnyModelType, types } from 'mobx-state-tree';
import { User } from './User';

export const Comment = types.model({
  id: types.identifierNumber,
  user: types.reference(User),
  createdAt: types.string,
  parentId: types.maybeNull(types.number),
  replies: types.array(types.late((): IAnyModelType => Comment)),
  message: types.string
});

