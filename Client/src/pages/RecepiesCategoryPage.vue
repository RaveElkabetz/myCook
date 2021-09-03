<template>
  <base-layout
    :page-title="loadedCategory ? loadedCategory.title : 'loading...'"
    PageDefaultBackLink="/categories"
  >
    <ion-list>
      <ion-item>מתכון 1</ion-item>
      <ion-item>מתכון 2</ion-item>
      <ion-item>מתכון 3</ion-item>
    </ion-list>
  </base-layout>
</template>

<script>
import { IonList, IonItem } from "@ionic/vue";
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
  watch: {
    $route(currentRoute) {
      this.categoryId = currentRoute.params.id;
    },
  },

  components: {
    IonList,
    IonItem,
  },
};
</script>
