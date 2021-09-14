export default {
  login() {},
  async signup(context, payload) {
    const response = await fetch("http://localhost:3000/api/test/signup", {
      method: "POST",
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
      }),
    });
    const responseData = await response.json();
    if (!response.ok) {
      console.log(responseData);
      const error = new Error(responseData.message || "Failed to authenticate");
      throw error;
    }
    console.log(responseData);
    context.commit("setUser", {
      token: responseData.accessToken,
      userId: responseData.id,
      tokenExpiration: 24,
    });
  },
};
