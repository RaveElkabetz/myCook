<template>
  <base-layout
    :page-title="loadedCategory ? loadedCategory.title : 'loading...'"
    PageDefaultBackLink="/categories"
  >
    <!---here will come the cooksList component--->
    <cooks-list></cooks-list>
  </base-layout>
</template>

<script>
import CooksList from "../.././components/cooks/CooksList.vue";
export default {
  props: ["catedoryName"],
  data() {
    return {
      categoryId: this.$route.params.id,
      cooksArray: [],
    };
  },
  methods: {
    init() {
      debugger;
      fetch("http://localhost:3000/api/v1/cooks")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.cooksArray.push.apply(this.cooksArray, data);
        });
    },
  },

  computed: {
    loadedCategory() {
      //console.log("entered computed func");
      return this.$store.getters.category(this.categoryId);
    },

    //   const response = await fetch("http://localhost:3000/api/v1/cooks", {
    //     method: "GET",
    //     body: JSON.stringify({
    //       //username: payload.username,
    //       token: localStorage.getItem("token")
    //     }),
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //     },

    //   });
    //   const responseData = await response.json();
    //   if (!response.ok) {
    //     debugger;
    //     console.log(responseData);
    //     const error = new Error(
    //       responseData.message || "not able to add new cookאת הLOG"
    //     );
    //     console.log(error);
    //     //throw error;
    //   }
    //  return this.$store.getters.category(this.categoryId);
  },
  // watch: {
  //   $route(currentRoute) {
  //     this.categoryId = currentRoute.params.id;
  //   },

  components: {
    CooksList,
  },
};
</script>
