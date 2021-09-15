export default {
  setUser(state, payload) {
    state.token = payload.token;
    debugger;
    localStorage.setItem("token", payload.token);
    localStorage.setItem("email", payload.userEmail);
    console.log("this is payload:");
    console.log(payload);
    state.userId = payload.userId;
    //state.tokenExpiration = payload.tokenExpiration;
    state.userEmail = payload.userEmail;
    console.log(payload);
    console.log(state.token);
  },
};
