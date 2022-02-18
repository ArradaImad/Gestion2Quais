import { authHeader } from "../_helpers/auth-header"

export const warehousesService = {
    createWarehouse: async ({name, surface, docks, manager, email, phone, address}) => {
        const options = {
            method: "POST",
            headers: { ...authHeader(), "Content-type": "application/json"},
            body: JSON.stringify({name, surface, docks, manager, email, phone, address})
        };
        return fetch('http://localhost:3001/warehouses/add', options)
            .then(data => data.json(), (err) => err);
    },

    listMyWarehousesGestionnaire: async () => {
        const options = {
            method: "GET",
            headers: { ...authHeader(), "Content-type": "application/json"},
        };
        return fetch('http://localhost:3001/warehouses', options)
            .then(data => data.json(), (err) => err);
    },
}