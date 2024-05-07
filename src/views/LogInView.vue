<template>
    <div class=" row q-mt-lg justify-center">
        <div class="col-md-6">
            <q-card class="q-pa-md">
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
        greedy
      >
      <h4 class="text-center">{{miniProjLabels?.loginToApplication}}</h4>
        <q-input
        outlined
          no-error-icon
          v-model="name"
          :label= miniProjLabels?.userName
          hint="email"
          lazy-rules
          :rules="[ val => val && val.length > 0 || miniProjErrors?.pleaseEnterUserName]"
        />
  
        <q-input
          no-error-icon
          outlined
          type="password"
          v-model="age"
          :label=miniProjLabels?.password
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || miniProjErrors?.pleaseEnterPassword,
          ]"
        />
        <div class="row justify-center">
          <q-btn :label=miniProjLabels?.login type="submit" color="primary"/>
        </div>
      </q-form>
    </q-card>
    </div>
    </div>
  </template>
  
  <script setup>
  import { useQuasar } from 'quasar'
  import { ref } from 'vue'
  import LogInService from "../services/login-service"
  import miniProjMessages from "../assets/messages/mini-proj.json";

  const miniProjLabels = miniProjMessages?.login?.labels;
  const miniProjErrors = miniProjMessages?.login?.errors;
  
      const $q = useQuasar()
  
      const name = ref(null)
      const age = ref(null)
      const accept = ref(false)
  
     const onSubmit = () => {
          if (accept.value !== true) {
            $q.notify({
              color: 'red-5',
              textColor: 'white',
              icon: 'warning',
              message: 'You need to accept the license and terms first'
            })
          }
          else {
            $q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: 'Submitted'
            })
          }
        }

const login = async() =>{
    try{
        const res = await LogInService.login();
        console.log(res)
    }
    catch(error){
        console.log(error)
    }
}     
login()   
  </script>
  