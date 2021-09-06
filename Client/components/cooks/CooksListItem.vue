<template>
  <ion-item dir="rtl" :router-link="`/categories/ ${cook.id}`">
    <ion-thumbnail slot="start">
      <ion-img :src="cook.imageLink" :alt="cook.title"></ion-img>
    </ion-thumbnail>
    <ion-label>
      {{ cook.title }}
    </ion-label>
  </ion-item>
</template>

<script>
import { IonItem, IonThumbnail, IonImg, IonLabel } from "@ionic/vue";
export default {
  props: ["cook"],
  components: {
    IonLabel,
    IonItem,
    IonThumbnail,
    IonImg,
  },
};
</script>
