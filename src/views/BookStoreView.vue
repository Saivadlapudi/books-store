<template>
    <q-layout view="hHh LpR fFf">
        <q-header elevated class="bg-purple text-weight">
            <q-toolbar>
                <q-btn dense flat round icon="menu"/>
                <q-toolbar-title>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-weight.svg">

                    </q-avatar>
                    {{booksLabels?.booksStore}}
                </q-toolbar-title>
                <q-space />
                <q-btn round color="white" flat icon="local_grocery_store" class="q-mr-md" @click="navigateToCart"
                    :disable="disableBtn"><span id="count">{{ cartCount }}</span></q-btn>
            </q-toolbar>
        </q-header>
        <Books ref="booksRef" @cart-count="getCartCount" class="q-mt-md" />
    </q-layout>
</template>
<script setup>
import { computed, ref } from 'vue';
import { useRouter } from "vue-router";
import booksStoreMessages from "../assets/messages/books-store.json"
import Books from "../components/Books.vue";

const router = useRouter();

const booksLabels = booksStoreMessages?.books?.labels;

const cartCount = ref(0);
const booksRef = ref(null);

const disableBtn = computed(() => {
    return cartCount.value === 0
})

const getCartCount = (count) => {
    cartCount.value = count;
}

const navigateToCart = () => {
    booksRef.value.updateSelectedItemsToStore();
    router.push({
        name: "cart"
    })
}
</script>
<style lang="sass" scoped>
#count
  position: absolute
  top: -10px
  right: -10px
  background-color: red
  color:blue
  padding: 5px
</style>