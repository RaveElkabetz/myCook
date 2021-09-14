<template>
  <ion-page dir="rtl" v-if="this.$store.getters.isAuthenticated">
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
  <ion-page dir="rtl" v-else>
    <ion-item>
      <ion-label>אנא התחבר מחדש!</ion-label>
      <ion-button dir="rtl" :router-link="'/auth'">לעמוד ההתחברות</ion-button>
    </ion-item>
  </ion-page>
</template>

<script>
import {
  IonButton,
  IonItem,
  IonLabel,
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
    IonButton,
    IonItem,
    IonLabel,
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
