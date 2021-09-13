<template>
  <base-layout :page-title="cook.cookName" PageDefaultBackLink="/categories">
    <ion-card dir="rtl">
      <img :src="cook.imageLink" :alt="cook.cookName" />
      <ion-card-header>
        <ion-card-title>{{ cook.cookName }}</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <ul>
          <li v-for="i in cook.ingredients" :key="i" :vid-id="i">
            <ion-label>{{ i }} </ion-label>
          </li>
        </ul>
        {{ cook.fullRecipeDesc }}
      </ion-card-content>
    </ion-card>
  </base-layout>
</template>

<script>
import {
  // IonItem,
  // IonList,
  IonLabel,
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
    //IonItem,
    BaseLayout,
    // IonList,
    IonLabel,
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
      console.log("logging the ingredients");
      console.log(this.$store.getters.cook(this.cookId.trim()).ingredients);
      return this.$store.getters.cook(this.cookId.trim());
    },
  },
};
</script>
