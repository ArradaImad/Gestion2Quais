
export const authenticationService = {
    login: async (credentials) => {
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        };
        return fetch('http://localhost:3001/user/login', options)
            .then(data => data.json());
    },

    register: async (registration) => {
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registration)
        };
        return fetch('http://localhost:3001/user/register', options)
            .then(data => data.json());
    },

    logout: () => {
        localStorage.removeItem("@token");
        localStorage.removeItem("@currentUser");
    },

    setToken: (userToken) => {
        localStorage.setItem('@token', JSON.stringify(userToken));
    },

    getToken: () => {
        const tokenString = localStorage.getItem('@token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token;
    },

    setCurrentUser: (user) => {
        localStorage.setItem("@currentUser", JSON.stringify(user));
    },

    getCurrentUser: () => {
        const userString = localStorage.getItem('@currentUser');
        const currentUser = JSON.parse(userString);
        return currentUser;
    },

}