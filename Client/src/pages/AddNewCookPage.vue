<template>
  <base-layout page-title="הוספת מתכון חדש" PageDefaultBackLink="/categories">
    <ion-item>
      <ion-label position="floating">שם המתכון</ion-label>
      <ion-input></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>קטגוריה</ion-label>
      <ion-select dir="rtl" interface="popover">
        <ion-select-option value="1">תבשילי קדרה</ion-select-option>
        <ion-select-option value="2">מאפים</ion-select-option>
        <ion-select-option value="3">אוכל אסייתי</ion-select-option>
        <ion-select-option value="4">קינוחים</ion-select-option>
        <ion-select-option value="5">בשר ועוף</ion-select-option>
        <ion-select-option value="6">סלטים</ion-select-option>
      </ion-select>
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
      <ion-button color="success">Success</ion-button>
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
};
</script>
