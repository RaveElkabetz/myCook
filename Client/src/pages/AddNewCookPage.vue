<template>
  <base-layout page-title="הוספת מתכון חדש" PageDefaultBackLink="/categories">
    <form class="ion-padding" @submit.prevent="checkInput">
      <ion-item>
        <ion-label position="floating" required="true">שם המתכון</ion-label>
        <ion-input v-model="cookName"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label>קטגוריה</ion-label>
        <ion-select
          @IonChange="selctedCategory()"
          dir="rtl"
          interface="popover"
          required="true"
          v-model="key"
        >
          <ion-select-option value="1">תבשילי קדרה</ion-select-option>
          <ion-select-option value="2">מאפים</ion-select-option>
          <ion-select-option value="3">אוכל אסייתי</ion-select-option>
          <ion-select-option value="4">קינוחים</ion-select-option>
          <ion-select-option value="5">בשר ועוף</ion-select-option>
          <ion-select-option value="6">סלטים</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-label>רשימת מצרכים</ion-label>
      <ion-item>
        <ion-input
          ionFocus="changeIsFocused()"
          placeholder="הוסף כאן מרכיב חדש:  "
          v-model="newIngredientToAdd"
        ></ion-input>
        <ion-buttons>
          <ion-button
            style="font-size: 30px"
            color="success"
            v-on:click="addNewIngrClick"
            >+</ion-button
          >
        </ion-buttons>
      </ion-item>
      <ion-item v-for="i in this.ingredientsArray" :key="i.id">
        <ion-input>{{ i }}</ion-input>

        <ion-buttons>
          <!-- <ion-button color="success" v-if="this.ingredientsArray.length > 0" >+</ion-button> -->
          <ion-button color="danger" v-if="this.ingredientsArray.length > 0"
            >x</ion-button
          >
        </ion-buttons>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">תיאור המתכון</ion-label>
        <ion-textarea
          v-model="fullRecipeDesc"
          required="true"
          rows="10"
          placeholder="אז איך מכינים את זה?"
        ></ion-textarea>
      </ion-item>

      <ion-item>
        <ion-label position="floating" required="true"
          >קישור לתמונה: (אופציונלי)
        </ion-label>
        <ion-input v-model="imageLink"></ion-input>
      </ion-item>
      <section>
        <ion-button
          type="submit"
          style="font-size: 18px"
          expand="block"
          fill="outline"
          class="ion-text-center"
          color="success"
          >הוסף מתכון חדש</ion-button
        >
      </section>
    </form>
  </base-layout>
</template>
<script>
import {
  IonButtons,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonTextarea,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
import router from "./../router/index";
export default {
  components: {
    IonButtons,
    IonButton,
    IonSelect,
    IonSelectOption,
    IonInput,
    IonTextarea,
    IonLabel,
    IonItem,
  },
  data() {
    return {
      imageLink: "",
      cookName: "",
      fullRecipeDesc: "",

      category: "",
      isFocused: false,
      ingredientsArray: [],
      newIngredientToAdd: "",
      key: "",
    };
  },
  computed: {
    userEmail() {
      return this.$store.getters.userEmail;
    },
  },
  methods: {
    selctedCategory() {
      this.category = this.key;
      console.log(this.key);
    },
    addNewIngrClick() {
      // console.log(this.newIngredientToAdd);
      if (this.newIngredientToAdd === "") {
        return;
      }
      this.ingredientsArray.push(this.newIngredientToAdd);
      this.newIngredientToAdd = "";
    },
    checkInput() {
      const cookData = {
        cookName: this.cookName,
        fullRecipeDesc: this.fullRecipeDesc,
        email: this.userEmail,
        category: this.category,
        imageLink: this.imageLink,
        ingredients: [...this.ingredientsArray],
      };
      console.log(cookData);
      //if input good call postNewCook func
      this.postNewCook(cookData);
    },
    postNewCook(cookData) {
      //here we will use fetch or axios
      this.$store.dispatch("addCook", cookData);
      router.push("/categories");
    },
    changeIsFocused() {
      this.isFocused = true;
      console.log(this.isFocused);
    },
  },
};
</script>
