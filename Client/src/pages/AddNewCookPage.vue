<template>
  <base-layout page-title="הוספת מתכון חדש" PageDefaultBackLink="/categories">
    <ion-item>
      <ion-label position="floating" required="true">שם המתכון</ion-label>
      <ion-input></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>קטגוריה</ion-label>
      <ion-select dir="rtl" interface="popover" required="true">
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
      <ion-input ionFocus="changeIsFocused()" placeholder="הוסף כאן מרכיב חדש:  " v-model="newIngredientToAdd" ></ion-input>
            <ion-buttons>
        <ion-button style="font-size: 30px;" color="success" v-on:click="addNewIngrClick" >+</ion-button>
      </ion-buttons>
      </ion-item>
      <ion-item v-for="i in this.ingredientsArray" :key="i.id">
      <ion-input >{{ i }}</ion-input>

      
      <ion-buttons>
        <!-- <ion-button color="success" v-if="this.ingredientsArray.length > 0" >+</ion-button> -->
        <ion-button color="danger" v-if="this.ingredientsArray.length > 0" >x</ion-button>
      </ion-buttons>
      </ion-item>

 
    
    <ion-item>
      <ion-label position="stacked">תיאור המתכון</ion-label>
      <ion-textarea
        required="true"
        rows="10"
        placeholder="אז איך מכינים את זה?"
      ></ion-textarea>
    </ion-item>
    <ion-buttons>
      <ion-button class="ion-text-center" v-on:click="checkInput" color="success">הוסף מתכון חדש</ion-button>
    </ion-buttons>
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
  data(){
    return{
      isFocused: false,
      ingredientsArray:[],
      newIngredientToAdd: ""
    };
  },
  methods:{
    addNewIngrClick(){
      // console.log(this.newIngredientToAdd);
      if (this.newIngredientToAdd ==="") {
        return;
        
      }
      this.ingredientsArray.push(this.newIngredientToAdd);
      this.newIngredientToAdd = "";

    },
    checkInput(){
      console.log("test!");
    },
    changeIsFocused(){
      this.isFocused = true;
      console.log(this.isFocused);
    }
  }
};
</script>
