export default (state = '', { type, payload }) => {
  switch (type) {
    case 'update_user':
      return payload;
    default:
      return state;
  }
};
