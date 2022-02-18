import { useState } from "react";
import { warehousesService } from "../../_services/warehouses.service";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

function AddWarehouseForm() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [surface, setSurface] = useState();
    const [docks, setDocks] = useState();
    const [manager, setManager] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await warehousesService.createWarehouse({ name, surface, docks, manager, email, phone, address });
        if (response.ok) {
            toast.success(response.message, { position: toast.POSITION.BOTTOM_RIGHT });
            navigate("/dashboard");
        }
    }

    return (
        <div className="mx-auto flex flex-col max-w-3xl bg-white shadow-lg rounded-lg px-8 py-6 m-12">
            <h1 className="text-4xl mb-6">Create a warehouse</h1>
            <div className="flex flex-col">
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="space-y-3 mb-6 pb-6 border-b border-gray-300">
                        <div>
                            <label htmlFor="name" className="text-base font-semibold">Name</label>
                            <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} className="flex items-center h-12 px-4 w-full bg-gray-100 mt-2 rounded focus:outline-none focus:ring-2" />
                        </div>
                        <div>
                            <label htmlFor="surface" className="text-base font-semibold">Surface</label>
                            <input type="number" name="surface" id="surface" value={surface} onChange={(e) => setSurface(e.target.value)} className="flex items-center h-12 px-4 w-full bg-gray-100 mt-2 rounded focus:outline-none focus:ring-2" />
                        </div>
                        <div>
                            <label htmlFor="docks" className="text-base font-semibold">Docks</label>
                            <input type="number" name="docks" id="docks" value={docks} onChange={(e) => setDocks(e.target.value)} className="flex items-center h-12 px-4 w-full bg-gray-100 mt-2 rounded focus:outline-none focus:ring-2" />
                        </div>
                    </div>
                    <div className="space-y-3 mb-6">
                        <div>
                            <label htmlFor="manager" className="text-base font-semibold">Manager</label>
                            <input type="text" name="manager" id="manager" value={manager} onChange={(e) => setManager(e.target.value)} className="flex items-center h-12 px-4 w-full bg-gray-100 mt-2 rounded focus:outline-none focus:ring-2" />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-base font-semibold">Email</label>
                            <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="flex items-center h-12 px-4 w-full bg-gray-100 mt-2 rounded focus:outline-none focus:ring-2" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="text-base font-semibold">Phone number</label>
                            <input type="tel" name="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="flex items-center h-12 px-4 w-full bg-gray-100 mt-2 rounded focus:outline-none focus:ring-2" />
                        </div>
                        <div>
                            <label htmlFor="address" className="text-base font-semibold">Address</label>
                            <input type="text" name="address" id="address" value={address} onChange={(e) => setAddress(e.target.value)} className="flex items-center h-12 px-4 w-full bg-gray-100 mt-2 rounded focus:outline-none focus:ring-2" />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-indigo-700 w-32 rounded px-4 py-2 text-white font-semibold">Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddWarehouseForm;