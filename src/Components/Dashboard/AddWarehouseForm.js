function AddWarehouseForm() {

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return (
        <div className="mx-auto flex flex-col max-w-3xl bg-white shadow-lg rounded-lg px-8 py-6 m-12">
            <h1 className="text-4xl mb-6">Create a warehouse</h1>
            <div className="flex flex-col">
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="space-y-3 mb-6 pb-6 border-b border-gray-300">
                        <div>
                            <label htmlFor="name" className="text-base font-semibold">Name</label>
                            <input type="text" name="name" id="name" className="flex items-center h-12 px-4 w-full bg-gray-100 mt-2 rounded focus:outline-none focus:ring-2" />
                        </div>
                        <div>
                            <label htmlFor="surface" className="text-base font-semibold">Surface</label>
                            <input type="number" name="surface" id="surface" className="flex items-center h-12 px-4 w-full bg-gray-100 mt-2 rounded focus:outline-none focus:ring-2" />
                        </div>
                        <div>
                            <label htmlFor="docks" className="text-base font-semibold">Docks</label>
                            <input type="number" name="docks" id="docks" className="flex items-center h-12 px-4 w-full bg-gray-100 mt-2 rounded focus:outline-none focus:ring-2" />
                        </div>
                    </div>
                    <div className="space-y-3 mb-6">
                        <div>
                            <label htmlFor="email" className="text-base font-semibold">Email</label>
                            <input type="text" name="email" id="email" className="flex items-center h-12 px-4 w-full bg-gray-100 mt-2 rounded focus:outline-none focus:ring-2" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="text-base font-semibold">Phone number</label>
                            <input type="tel" name="phone" id="phone" className="flex items-center h-12 px-4 w-full bg-gray-100 mt-2 rounded focus:outline-none focus:ring-2" />
                        </div>
                        <div>
                            <label htmlFor="location" className="text-base font-semibold">Address</label>
                            <input type="text" name="location" id="location" className="flex items-center h-12 px-4 w-full bg-gray-100 mt-2 rounded focus:outline-none focus:ring-2" />
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