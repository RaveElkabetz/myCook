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
    return {
      categories: [
        {
          id: "c1",
          imageLink: "../assets/imgs/pan-cooking.png",
          title: "תבשילי קדרה",
        },
        {
          id: "c2",
          imageLink: "../assets/imgs/cake.png",
          title: "עוגות",
        },
        {
          id: "c3",
          imageLink: "../assets/imgs/rice.png",
          title: "תוספות",
        },
        {
          id: "c4",
          imageLink: "../assets/imgs/cupcake.png",
          title: "קינוחים",
        },
        {
          id: "c5",
          imageLink: "../assets/imgs/chicken.png",
          title: "בשר ועוף",
        },
        {
          id: "c6",
          imageLink: "../assets/imgs/green-salad.png",
          title: "סלטים",
        },
      ],
    };
  },
};
</script>
