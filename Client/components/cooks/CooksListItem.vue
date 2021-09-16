<template>
  <ion-item dir="rtl" :router-link="`/cookPage/ ${cook.cookName}`">
    <ion-thumbnail slot="start">
      <ion-img :src="cook.imageLink" :alt="cook.cookName"></ion-img>
    </ion-thumbnail>
    <ion-label>
      {{ cook.cookName }}
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
