<template>
  <base-layout :page-title="oneCook.cookName" PageDefaultBackLink="/categories">
    <ion-card dir="rtl">
      <img :src="oneCook.imageLink" :alt="oneCook.cookName" />
      <ion-card-header>
        <ion-card-title>{{ oneCook.cookName }}</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <ul>
          <li v-for="i in oneCook.ingredients" :key="i" :vid-id="i">
            <ion-label>{{ i }} </ion-label>
          </li>
        </ul>
        {{ oneCook.fullRecipeDesc }}
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
      changedFlag: false,
      Cookt: null,
    };
  },
  methods: {
    init() {
      if (this.changedFlag === true) {
        return this.Cookt;
      }
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
          debugger;
          for (let index = 0; index < this.cooksArray.length; index++) {
            const cook = this.cooksArray[index];
            if (cook.cookName === this.cookId.trim()) {
              //this.oneCook = this.cooksArray[index];
              this.changedFlag = true;
              this.Cookt = this.cooksArray[index];
              return this.cooksArray[index];
            }
          }
        });

      //debugger;

      // for (let index = 0; index < this.cooksArray.length; index++) {
      //   const cook = this.cooksArray[index];
      //   if (cook.id === this.cookId) {
      //     return cook;
      //   }
      //}
    },
  },
  computed: {
    oneCook() {
      //debugger;
      return this.init();
      //console.log("logging the ingredients");
      //console.log(this.$store.getters.cook(this.cookId.trim()).ingredients);
      //return this.$store.getters.cook(this.cookId.trim());
    },
  },
};
</script>
