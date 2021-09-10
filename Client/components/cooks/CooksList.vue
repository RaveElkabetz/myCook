<template>
  <ion-list>
    <cooks-list-item v-for="c in cook" :key="c.id" :cook="c"> </cooks-list-item>
  </ion-list>
</template>

<script>
import { IonList } from "@ionic/vue";
import CooksListItem from "./CooksListItem.vue";

export default {
  props: ["cooks"],
  components: {
    IonList,
    CooksListItem,
  },
  data() {
    return {
      categoryId: this.$route.params.id,
    };
  },

  computed: {
    cook() {
      return this.$store.getters.cooksByCategory(this.categoryId);
    },
  },
};
</script>
