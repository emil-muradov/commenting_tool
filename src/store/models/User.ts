import { types } from 'mobx-state-tree';

export const User = types.model({
  id: types.identifierNumber,
  username: types.string,
  image: types.string
});
