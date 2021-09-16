import router from "./../../../router/index.js";
export default {
  async login(context, payload) {
    const response = await fetch("http://localhost:3000/api/test/signin", {
      method: "POST",
      body: JSON.stringify({
        //username: payload.username,
        email: payload.email,
        password: payload.password,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const responseData = await response.json();
    if (!response.ok) {
      //debugger;
      console.log(responseData);
      const error = new Error(
        responseData.message || "נכשל בהתחברות בדוק את הLOG"
      );
      throw error;
    }
    //debugger;

    console.log(responseData);
    context.commit("setUser", {
      token: responseData.accessToken,
      userId: responseData.id,
      userEmail: responseData.email,
      tokenExpiration: 24,
    });
  },
  async signup(context, payload) {
    //debugger;
    const response = await fetch("http://localhost:3000/api/test/signup", {
      method: "POST",
      body: JSON.stringify({
        username: payload.username,
        email: payload.email,
        password: payload.password,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const responseData = await response.json();
    if (!response.ok) {
      //debugger;
      console.log(responseData);
      const error = new Error(
        responseData.message || "נכשל בהתחברות בדוק את הLOG"
      );
      throw error;
    }

    router.replace("/categories");
    console.log(responseData);
    context.commit("setUser", {
      token: responseData.accessToken,
      userId: responseData.id,
      tokenExpiration: 24,
    });
  },
};
