export default {
  setUser(state, payload) {
    state.token = payload.token;
    localStorage.setItem("token", payload.token);
    console.log(localStorage);
    state.userId = payload.userId;
    //state.tokenExpiration = payload.tokenExpiration;
    state.userEmail = payload.userEmail;
    console.log(payload);
    console.log(state.token);
  },
};
