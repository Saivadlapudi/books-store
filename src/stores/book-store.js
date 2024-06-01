import {defineStore} from 'pinia'

export const useBookStore = defineStore({
    id:"book-store",
    state:()=>({
        cartInfo:null
    }),
    getters:{
        getCartInfo:(state)=>state.cartInfo
    },
    actions:{
        setCartDetails(data){
            this.cartInfo = data
        }
    }
})