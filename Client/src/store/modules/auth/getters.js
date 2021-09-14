export default {
  userId(state) {
    return state.userId;
  },
  userEmail(state) {
    return state.userEmail;
  },
  token(state) {
    return state.token;
  },
  isAuthenticated(state) {
    return !!state.token;
  },
};
