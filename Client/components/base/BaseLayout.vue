<template>
  <ion-page dir="rtl">
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

    <!-- fab placed to the top end -->
    <ion-fab vertical="bottom" horizontal="start" slot="fixed">
      <ion-fab-button :router-link="'/AddNewCookPage'">
        <ion-icon :icon="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-page>
</template>

<script>
import {
  IonFabButton,
  IonFab,
  IonIcon,
  IonPage,
  IonToolbar,
  IonHeader,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
} from "@ionic/vue";

import { add } from "ionicons/icons";

export default {
  props: ["pageTitle", "PageDefaultBackLink"],
  components: {
    IonFabButton,
    IonIcon,
    IonFab,
    IonPage,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
  },
  setup() {
    return {
      add,
    };
  },
};
</script>
