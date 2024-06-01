<template>
  <div class="about row justify-center">
    <q-card class="q-pa-xl">
    <q-form>
    <q-input outlined v-model="firstName" hide-bottom-space label="FirstName* "
        clearable
        no-error-icon></q-input>
    <q-input outlined v-model="middleName"></q-input>
    <q-input outlined v-model="lastName"></q-input>
    <q-select
    v-model="country"
    :options="countryOptions"
    :rules="[(val) => !!val || 'Field is required']"
    :menu-offset="[0, 4]"
    :virtual-scroll-item-size="1"
    label="Country"
    behavior="menu"
    dropdown-icon="expand_more"
    popup-content-class="nee-fpl-select-dropdown"
    outlined
    hide-bottom-space
    no-error-icon
  />
    <q-input outlined v-model="emailAddress"></q-input>
    <q-input outlined v-model="mobileNumber"></q-input>
  </q-form>
</q-card>
  </div>
</template>
<script setup>
import {ref} from "vue";

const firstName = ref('');
const middleName = ref('');
const lastName = ref('');
const country = ref('')
const emailAddress = ref('');
const mobileNumber = ref('');
const countryOptions = ref([{label:"India",value:"IND"},{label:"America",value:"USA"},{label:"Japan",value:"JPN"},])

</script>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

@media (max-width: 767px) {
    .info-card {
        padding-right: 24px;
        padding-left: 24px;
    }
}
</style>
