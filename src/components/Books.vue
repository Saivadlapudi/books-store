<template>
    <div class="q-pa-lg q-gutter-md row">
        <div v-for="data in booksData" :key="data" class="q-px-md">
            <q-card class="my-card col q-pa-sm">
                <q-img :src="data?.image"></q-img>
                <div>{{ data?.name }}</div>
                <div>Price: {{ data?.cost }}</div>
                <div>Describe: {{ data?.describe }}</div>
                <q-card-actions>
                    <q-btn size="sm" :color="data?.inCart ?'positive': 'primary'" :label="data?.inCart ? booksLabels?.goToCart :booksLabels?.addToCart"
                        @click="addToCart(data)"></q-btn>
                </q-card-actions>
            </q-card>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import books from "../assets/books-data";
import { useBookStore } from "../stores/book-store";
import { useRouter } from "vue-router";
import booksStoreMessages from "../assets/messages/books-store.json";

const emit = defineEmits(['cartCount']);
const booksStore = useBookStore();

const router = useRouter();

const booksLabels = booksStoreMessages?.books?.labels;

const booksData = ref(null);
const cartDetails = ref([]);

const addToCart = (data) => {
    if (data?.inCart === true) {
        updateSelectedItemsToStore();
        router.push({
            name: "cart"
        })
    }
    else {
        booksData.value.find((ele) => {
            if (ele.id === data?.id) {
                ele.inCart = true;
                data.inCart = true;
            }
        })
        cartDetails.value.push(data);
        emit('cartCount', cartDetails.value.length);
    }
}

const updateSelectedItemsToStore = () => {
    booksStore.setCartDetails(cartDetails.value);
}

const updateCartData = () =>{
    if(booksStore?.getCartInfo?.length>0){
  let cart =  books.map(objA=>{
    const objB = booksStore.getCartInfo.find(objB=>objB?.id === objA?.id);
    return objB? objB:objA    
  })  
  booksData.value = cart
  cartDetails.value = booksStore.getCartInfo;
  emit('cartCount', cartDetails.value.length);
}
else{
    booksData.value = books
}
  
}

updateCartData();

defineExpose({
    updateSelectedItemsToStore
})
</script>

<style lang="sass" scoped>
.my-card
    width: 100%
    width: 250px
    max-height:300px
</style>