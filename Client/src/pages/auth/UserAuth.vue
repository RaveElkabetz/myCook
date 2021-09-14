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
          <ion-item v-if="mode === `signup`">
            <ion-label position="floating">שם משתמש</ion-label>
            <ion-input placeholder="" v-model="username"></ion-input>
          </ion-item>

          <p v-if="!formIsValid">אנא הכנס שם משתמש וסיסמא תקנים</p>
        </ion-card-content>
      </ion-list>
      <section>
        <ion-button expand="block" color="primary" @click="submitForm"
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
  //IonLoading,
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
    //IonLoading,
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
      username: "",
      formIsValid: false,
      mode: "login",
      isLoading: false,
      error: null,
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
    async submitForm() {
      //debugger;
      console.log(this.username);
      this.formIsValid = true;
      if (
        this.email === "" ||
        this.password.length < 8 ||
        !this.email.includes("@")
      ) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;
      try {
        if (this.mode === "login") {
          await this.$store.dispatch("login", {
            email: this.email,
            password: this.password,
          });
          this.$router.push("/categories");
        } else {
          await this.$store.dispatch("signup", {
            email: this.email,
            password: this.password,
            username: this.username,
          });
        }
      } catch (err) {
        this.error = err.message || "נכשל בהתחברות, נסה שוב מאוחר יותר";
      }

      //send http request

      this.isLoading = false;
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
