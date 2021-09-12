<template>
  <base-layout :page-title="cook.cookName" PageDefaultBackLink="/categories">
    <ion-card dir="rtl">
      <img :src="cook.imageLink" :alt="cook.cookName" />
      <ion-card-header>
        <ion-card-title>{{ cook.cookName }}</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        {{ cook.fullRecipeDesc }}
      </ion-card-content>
    </ion-card>
  </base-layout>
</template>

<script>
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  //   IonIcon,
  //   IonItem,
  //   IonLabel,
} from "@ionic/vue";
import BaseLayout from "../base/BaseLayout.vue";
export default {
  components: {
    BaseLayout,
    IonCard,
    IonCardContent,
    IonCardHeader,

    IonCardTitle,
    // IonIcon,
    // IonItem,
    // IonLabel,
  },
  data() {
    return {
      cookId: this.$route.params.id,
    };
  },
  computed: {
    cook() {
      //debugger;
      return this.$store.getters.cook(this.cookId.trim());
    },
  },
};
</script>
