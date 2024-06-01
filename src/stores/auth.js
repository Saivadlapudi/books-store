import { defineStore } from "pinia";

export const useAuthStore = defineStore({
    id:'auth',
    state:()=>({
       isAuthenticated:false 
    }),
    getters:{
        isUserAuthenticated:(state)=>state.isAuthenticated 
    },
    actions:{
        authenticateUser(){
            this.isAuthenticated = true;
        }
    }
})