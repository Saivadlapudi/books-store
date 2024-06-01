import { useAuthStore } from "../stores/auth";

function validateRouteProtection(to){
    const authStore = useAuthStore();
    const userAuthenticated = authStore?.isUserAuthenticated
    if(to?.meta?.requiresNoAuthentication){
        if(to?.meta?.denyAccessWhenUserIsAuthenticated && userAuthenticated){
            window.location = "/home";
        }
    }else{
        if(!userAuthenticated){
        window.location = "/login"
        }
    }
}

export default validateRouteProtection;