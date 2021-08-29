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
    return {
      categories: [
        {
          id: "c1",
          imageLink:
            "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/emojipedia/132/shallow-pan-of-food_1f958.png",
          title: "תבשילי קדרה",
        },
        {
          id: "c2",
          imageLink:
            "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/emojipedia/132/pretzel_1f968.png",
          title: "מאפים",
        },
        {
          id: "c3",
          imageLink:
            "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/emojipedia/132/takeout-box_1f961.png",
          title: "אוכל אסייתי",
        },
        {
          id: "c4",
          imageLink:
            "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/emojipedia/132/cupcake_1f9c1.png",
          title: "קינוחים",
        },
        {
          id: "c5",
          imageLink:
            "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/emojipedia/132/cut-of-meat_1f969.png",
          title: "בשר ועוף",
        },
        {
          id: "c6",
          imageLink:
            "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/emojipedia/132/green-salad_1f957.png",
          title: "סלטים",
        },
      ],
    };
  },
};
</script>
