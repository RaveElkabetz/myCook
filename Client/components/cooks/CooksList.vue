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
      cooksArray: [],
    };
  },
  methods: {
    init() {
      //debugger;
      fetch("http://localhost:3000/api/v1/cooks")
        .then((response) => {
          //debugger;
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          //console.log(data.data.cooks);

          this.cooksArray = [...data.data.cooks];
        });

      //debugger;
      return this.cooksArray;
    },
  },

  computed: {
    cook() {
      return this.init();
      //return this.$store.getters.cooksByCategory(this.categoryId);
    },
  },
};
</script>
