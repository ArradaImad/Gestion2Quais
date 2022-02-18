
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
            .then(data => data.json(), err => err);
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
        return JSON.parse(tokenString);
    },

    setCurrentUser: (user) => {
        localStorage.setItem("@currentUser", JSON.stringify(user));
    },

    getCurrentUser: () => {
        const userString = localStorage.getItem('@currentUser');
        return JSON.parse(userString);
    },

}