import { useEffect, useState } from "react";
import { warehousesService } from "../../_services/warehouses.service";
import { SearchIcon } from '@heroicons/react/outline'
import WarehouseMinitature from "../Warehouse/WarehouseMinitature";

function Search() {
    const [warehouses, setWarehouses] = useState([]);
    const [name, setName] = useState("");
    const [surface, setSurface] = useState();
    const [docks, setDocks] = useState();
    const [manager, setManager] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        (async () => {
            let response = await warehousesService.searchWarehouses({ name, docks, address });
            if (response.ok) {
                console.log("effect: ", response.warehouses);
                setWarehouses(response.warehouses);
            }
        })();

    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await warehousesService.searchWarehouses({ name, docks, address });
        if (response.ok) {
            console.log("submit")
            setWarehouses(response.warehouses);
        }
    };

    return (
        <div className="mx-auto flex flex-col container px-8 py-6 m-12">
            <h1 className="text-4xl mb-6">Search a warehouse</h1>
            <form className="w-full mb-6" onSubmit={handleSubmit}>
                <div className="w-full bg-white rounded-full shadow-lg p-6 flex items-center space-x-4">
                    <input type="text"
                        id="name"
                        name="name"
                        placeholder="Search by name"
                        value={name} onChange={(e) => setName(e.target.value)}
                        className="flex items-center rounded-full border border-gray-300 h-12 px-4 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                    <select
                        className="flex items-center rounded-full border border-gray-300 h-12 px-4 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 after:pr-2"
                        value={docks}
                        onChange={(e) => setDocks(e.target.value)}
                    >
                        <option value="" disabled selected className="hidden">Docks</option>
                        <option value="all">All</option>
                        <option value="1">0 - 10</option>
                        <option value="2">10 - 20</option>
                        <option value="3">20 - 50</option>
                        <option value="4">50 - 100</option>
                        <option value="5">100+</option>
                    </select>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Search by location"
                        value={address} onChange={(e) => setAddress(e.target.value)}
                        className="flex items-center rounded-full border border-gray-300 h-12 px-4 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                    <button type="submit" className="w-12 h-12 flex flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 hover:bg-indigo-700 transition-all duration-200 ease-in-out">
                        <SearchIcon className="w-6 h-6 text-white" />
                    </button>
                </div>
            </form>
            {warehouses.length ?
                    <div className="grid gap-4 grid-cols-4">
                        {warehouses.map(warehouse => <WarehouseMinitature warehouse={warehouse} />)}
                    </div>
                :   
                    <div className="mt-6 w-full text-center"><h3 className="italic text-xl font-light text-gray-500">No warehouses were found...</h3></div>
            }
        </div>
    );
}

export default Search;