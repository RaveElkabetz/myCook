<template>
  <ion-card>
    <img
      src="https://drive.google.com/uc?export=view&id=1R5ihDuG0Ru4JdbrcNRNNj8EQwzEfwK5I"
    />

    <form @submit.prevent="submitForm">
      <ion-list lines="full" class="ion-no-margin" dir="rtl">
        <ion-card-header lines="full">
          <ion-label> התחבר כדי לראות את המתכונים שלך </ion-label>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-label position="floating">אימייל</ion-label>
            <ion-input placeholder="" type="email" v-model="email"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="floating">סיסמא</ion-label>
            <ion-input
              placeholder=""
              type="password"
              v-model="password"
            ></ion-input>
          </ion-item>
          <p v-if="!formIsValid">אנא הכנס שם משתמש וסיסמא תקנים</p>
        </ion-card-content>
      </ion-list>
      <section>
        <ion-button expand="block" color="primary"
          >{{ submitButtonCaption }}
        </ion-button>
        <ion-button expand="block" color="secondary" @click="switchAuthMode">
          {{ switchModeButtonCaption }}
        </ion-button>
      </section>
    </form>
    <a style="font-size: 12px" href="https://lordicon.com/"
      >Animated icons by Lordicon.com</a
    >
  </ion-card>
</template>

<script>
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonInput,
  IonItem,
  IonList,
  IonLabel,
  IonButton,
  //   IonListHeader,
  //   IonCard,
  //   IonCardContent,
  //   IonCardHeader,
  //   IonCardTitle,
  //   //   IonIcon,
  //   //   IonItem,
  //   //   IonLabel,
} from "@ionic/vue";
export default {
  components: {
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonInput,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    // IonListHeader,
  },
  data() {
    return {
      email: "",
      password: "",
      formIsValid: false,
      mode: "login",
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === "login") {
        return "התחבר";
      } else {
        return "צור משתמש חדש";
      }
    },
    switchModeButtonCaption() {
      if (this.mode === "login") {
        return "הרשם במקום";
      } else {
        return "התחבר במקום";
      }
    },
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        this.password.length < 8 ||
        !this.email.includes("@")
      ) {
        this.formIsValid = false;
        return;
      }
      //send http request
      if (this.mode === "login") {
        //..
      } else {
        this.$store.dispatch("signup", {
          email: this.email,
          password: this.password,
        });
      }
    },
    switchAuthMode() {
      if (this.mode === "login") {
        this.mode = "signup";
      } else {
        this.mode = "login";
      }
    },
  },
};
</script>
