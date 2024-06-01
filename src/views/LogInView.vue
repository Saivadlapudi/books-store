<template>
  <div class=" row q-mt-lg justify-center">
    <div class="col-md-6">
      <q-card class="q-pa-md">        
        <q-form @submit="onSubmit" class="q-gutter-md" greedy>
          <h4 class="text-center">{{ loginLabels?.loginToApplication }}</h4>
          <div v-if="alertBanner" class="text-red text-center">{{ alertMessage }}</div>
          <q-input outlined no-error-icon v-model="name" :label=loginLabels?.userName hint="email" lazy-rules
            :rules="[val => val && val.length > 0 || loginErrors?.pleaseEnterUserName]" />

          <q-input no-error-icon outlined type="password" v-model="password" :label=loginLabels?.password lazy-rules
            :rules="[
              val => val !== null && val !== '' || loginErrors?.pleaseEnterPassword,
            ]" />
          <div class="row justify-center q-gutter-x-md">
            <q-btn :label=loginLabels?.login type="submit" color="primary" />
            <q-btn :label=loginLabels?.register  color="primary" outline />
          </div>
        </q-form>
      </q-card>
    </div>
  </div>
</template>

<script setup>
//import { useQuasar } from 'quasar'
import { ref } from 'vue'
//import LogInService from "../services/login-service"
import bookStoreMessages from "../assets/messages/books-store.json";
import { useAuthStore } from '../stores/auth';
import loginCredentials from "../assets/login.json";
import { useRouter } from 'vue-router';

const router = useRouter();
const authStore = useAuthStore(); 
// const $q = useQuasar()

const loginLabels = bookStoreMessages?.login?.labels;
const loginErrors = bookStoreMessages?.login?.errors;

const name = ref(null);
const password = ref(null);
const alertBanner = ref(false);
const alertMessage = ref(null);


const onSubmit = () => {
  alertBanner.value = false;
  const cred = loginCredentials.find(obj => obj?.userName === name.value && obj?.password === password.value)
  cred ? navigateToHome() : showAlert();
}

// const login = async () => {
//   try {
//     const res = await LogInService.login();
//     console.log(res)
//   }
//   catch (error) {
//     console.log(error)
//   }
// }

const navigateToHome = () => {
  authStore.authenticateUser();
  router.push({ name: 'home' })
}
const showAlert = () => {
  alertBanner.value = true;
  alertMessage.value = "Incorrect userName or Password"
}
// login()
</script>