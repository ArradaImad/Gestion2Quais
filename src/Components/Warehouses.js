import { useEffect, useState } from 'react';

function Warehouses() {
    const [warehouses, setWarehouses] = useState([]);
    // Récupération des données de l'API
    useEffect(() => {
        let options = {
            mode: 'no-cors',
            method: "GET",
            headers: {
                 "Content-Type": "application/json",
                 'Access-Control-Allow-Origin': '*',
                 'Access-Control-Allow-Headers': 'Content-Type',
                 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
                 'Authorization': 'Bearer key',
            }
        }
        fetch("http://localhost:3001/warehouses")
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then(data => {
                //console.log(data);
                setWarehouses(data);
            }
        );

    }, []);
    
    return (
        <>
        {warehouses.map(w => <p key={w.id}>{w.email}</p>)}
        </>
    );
}

export default Warehouses;