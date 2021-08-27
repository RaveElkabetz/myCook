<template>
  <base-layout page-title="שם הקטגוריה" PageDefaultBackLink="/categories">
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
  components: {
    IonList,
    IonItem,
  },
};
</script>
