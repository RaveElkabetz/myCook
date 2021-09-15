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
  isAuthenticated() {
    if (localStorage.getItem("token")) {
      return true;
    }
    return false;
    //return !!state.token;
  },
};
