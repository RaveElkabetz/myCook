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
    };
  },
  computed: {
    loadedCategory() {
      //console.log("entered computed func");
      return this.$store.getters.category(this.categoryId);
    },
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
