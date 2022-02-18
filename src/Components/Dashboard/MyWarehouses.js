import { useEffect, useState } from "react";
import { warehousesService } from "../../_services/warehouses.service";

function MyWarehouses() {
    const [warehouses, setWarehouses] = useState([]);

    useEffect(() => {
        (async () => {
            let response = await warehousesService.listMyWarehousesGestionnaire();
            if (response.ok) {
                setWarehouses(response.warehouses);
                console.log(response.warehouses);
            }
        })();
    }, []);
    return (
        <div className="mx-auto flex flex-col container px-8 py-6 m-12">
            <h1 className="text-4xl mb-6">My warehouses</h1>
            <div className="grid gap-4 grid-cols-4">
                {warehouses.map(warehouse => 
                    <div className="bg-white rounded-md shadow-md px-6 py-4">
                        <h3>{warehouse.name}</h3>

                    </div>    
                )}
            </div>
        </div>
    );
}

export default MyWarehouses;