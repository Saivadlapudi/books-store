function validateRouteProtection(to){
    const userAuthenticated = false;
    if(to?.meta?.requiresNoAuthentication){
        if(to?.meta?.denyAccessWhenUserIsAuthenticated && userAuthenticated){
            window.location = "/dashboard";
        }
    }else{
        if(!userAuthenticated){
        window.location = "/login"
        }
    }
}

export default validateRouteProtection;