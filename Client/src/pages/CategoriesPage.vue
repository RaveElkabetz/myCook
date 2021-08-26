<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title> My Recipes By Categories: </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <h2>Here will be the grid</h2>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-item>first category</ion-item>
          </ion-col>

          <ion-col>
            <ion-item>second category</ion-item>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col>
            <ion-item>first category</ion-item>
          </ion-col>

          <ion-col>
            <ion-item>second category</ion-item>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col>
            <ion-item>first category</ion-item>
          </ion-col>

          <ion-col>
            <ion-item>second category</ion-item>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonGrid,
  IonToolbar,
  IonHeader,
  IonTitle,
  IonItem,
  IonCol,
  IonRow,
} from "@ionic/vue";
export default {
  components: {
    IonPage,
    IonGrid,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonCol,
    IonRow,
  },
};
</script>
