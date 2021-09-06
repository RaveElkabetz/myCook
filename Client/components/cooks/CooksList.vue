<template>
  <ion-list>
    <cooks-list-item v-for="cook in cooks" :key="cook.id" :cook="cook">
    </cooks-list-item>
  </ion-list>
  <h1>test</h1>
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
};
</script>
