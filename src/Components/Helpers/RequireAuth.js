import { Profile } from "../../_helpers/profile";

const { Navigate } = require("react-router-dom");
const { authenticationService } = require("../../_services/authentication.service")

const requireAuth = {

    requireAuth: ({children}) => {
        const isLoggedIn = !!authenticationService.getToken();
        return isLoggedIn? children : <Navigate to="/login" replace/>;   
    },

    requireLivreur: ({children}) => {
        const currentUser = authenticationService.getCurrentUser();
        return currentUser.profile === Profile.Livreur.toLowerCase()? children : <Navigate to="/login" replace/>;   
    },

    requireGestionnaire: ({children}) => {
        const currentUser = authenticationService.getCurrentUser();
        return currentUser.profile === Profile.Gestionnaire.toLowerCase()? children : <Navigate to="/login" replace/>;   
    },
}


export default requireAuth