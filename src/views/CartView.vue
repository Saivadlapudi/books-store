<template>
    <div v-for="data in cartDetails" :key="data" class="q-px-md">
        <q-card class="my-card q-pa-sm card-class">
            <div class="row justify-between q-pa-md">
            <div class="col-4">
                <q-img :src="data?.image" height="110px" width="200px"></q-img>
            </div>
            <div class="col-4 q-pt-md">
                <div><span class="text-weight-bold">{{cartLabels?.books}}</span>{{data?.name}}</div>
                <div><span class="text-weight-bold">{{cartLabels?.price}}</span>{{data?.price}}</div>
                <div><span class="text-weight-bold">{{cartLabels?.describe}}</span>{{data?.describe}}</div>
            </div>
            <div class="col-2 row items-center">
                <q-btn size="sm" color="red-10" @click="deleteFromCart(data?.id)" :label="cartLabels?.delete"></q-btn>
            </div>
            </div>
        </q-card>
    </div>
    <div class="flex flex-center q-pa-md">
        <q-btn size="md" color="purple" class="q-mr-md" :label="cartLabels?.proceedToPayment"></q-btn>
        <q-btn size="md" color="purple" outline @click="navigateToBookStore" :label="cartLabels?.home"></q-btn>
    </div>
    
</template>
<script setup> 
import {computed} from 'vue';
import {useBookStore} from "../stores/book-store";
import booksStoreMessages from "../assets/messages/books-store.json"
import {useRouter} from 'vue-router';

const bookStore = useBookStore();

const router = useRouter();

const cartLabels = booksStoreMessages?.books?.labels;

const cartDetails = computed(()=>{
    return bookStore?.getCartInfo
})

const navigateToBookStore = () =>{
    router.push({name:"home"})
}

const deleteFromCart = (id) =>{// we can use forEach method also to remove item from cart
    const updatedCart = cartDetails?.value.reduce((acc,obj)=>{
        if(obj.id !== id){
            acc.push(obj);
        }
        else{
            obj.inCart = false;
        }
        return acc;
    },[]);
    bookStore.setCartDetails(updatedCart);

}
</script>
<style lang="sass" scoped>
.card-class
    max: height 150px
</style>