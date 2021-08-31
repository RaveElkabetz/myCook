<template>
  <base-layout page-title="קטגוריות">
    <ion-list>
      <ion-item
        dir="rtl"
        v-for="category in categories"
        :router-link="`/categories/ ${category.id}`"
        :key="category.id"
      >
        <ion-thumbnail slot="start">
          <ion-img :src="category.imageLink" :alt="category.title"></ion-img>
        </ion-thumbnail>
        {{ category.title }}
      </ion-item>
    </ion-list>
  </base-layout>
</template>

<script>
import { IonList, IonItem, IonThumbnail, IonImg } from "@ionic/vue";

export default {
  components: {
    IonList,
    IonItem,
    IonThumbnail,
    IonImg,
  },
  data() {
    return {};
  },
  computed: {
    categories() {
      return this.$store.getters.categories;
    },
  },
};
</script>
