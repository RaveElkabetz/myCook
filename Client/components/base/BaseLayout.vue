<template>
  <ion-page>
    <ion-header>
      <ion-toolbar dir="rtl">
        <ion-buttons slot="start">
          <ion-back-button :default-href="PageDefaultBackLink">
          </ion-back-button>
        </ion-buttons>
        <ion-title>{{ pageTitle }} </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot />
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonToolbar,
  IonHeader,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
} from "@ionic/vue";
export default {
  props: ["pageTitle", "PageDefaultBackLink"],
  components: {
    IonPage,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
  },
};
</script>
