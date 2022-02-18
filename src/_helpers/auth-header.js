import { authenticationService } from "../_services/authentication.service";

export function authHeader() {
    const currentUser = authenticationService.getCurrentUser();
    const token = authenticationService.getToken();
    if (currentUser && token) {
        return { Authorization: `bearer ${token}`};
    } else {
        return {};
    }
}