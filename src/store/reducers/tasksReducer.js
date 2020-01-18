export default (state = [], { type, payload }) => {
  switch (type) {
    case 'update_task':
      return payload;
    default:
      return state;
  }
};
