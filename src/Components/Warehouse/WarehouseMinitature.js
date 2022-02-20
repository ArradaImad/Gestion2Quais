import { UserIcon, PencilAltIcon, IdentificationIcon, PhoneIcon, AtSymbolIcon, LocationMarkerIcon } from '@heroicons/react/outline'
import { useEffect } from 'react';
import { Profile } from '../../_helpers/profile';
import { authenticationService } from '../../_services/authentication.service';

function WarehouseMinitature({ warehouse }) {
    const currentUser = authenticationService.getCurrentUser();

    //TODO: Conditionnal display of action button depending on user's role (Gestionnaire -> Edit / Livreur -> Join)

    return (
        <div className="bg-white rounded-md shadow-md px-6 py-4 flex flex-col relative">
            <button className="absolute top-0 right-0 mr-1 mt-1 rounded flex justify-center items-center w-8 h-8 opacity-50 hover:opacity-100 bg-gray-100 hover:bg-indigo-600 text-gray-600 hover:text-white transition-all ease-in-out duration-200">
                <PencilAltIcon className="w-6 h-6" />
            </button>
            <h3 className="text-lg font-semibold mb-4">{warehouse.name}</h3>
            <div className='border-b border-gray-300 w-full mb-4'></div>
            <table className="table-auto mb-3">
                <tbody>
                    <tr>
                        <td className="font-semibold">Surface</td>
                        <td>{warehouse.surface}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Number of docks</td>
                        <td>{warehouse.docks}</td>
                    </tr>
                </tbody>
            </table>
            <div className='border-b border-gray-300 w-full mb-4'></div>
            <div className="flex flex-nowrap items-center space-x-4 mb-4 mx-4">
                <div className="rounded-full bg-gray-400 h-8 w-8 flex items-center justify-center">
                    <UserIcon className="text-white h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                    {warehouse.manager ? <div className="flex flex-nowrap items-center"><IdentificationIcon className="text-indigo-600 w-4 h-4 mr-2" />{warehouse.manager}</div> : ''}
                    {warehouse.phone ? <div className="flex flex-nowrap items-center"><PhoneIcon className="text-indigo-600 w-4 h-4 mr-2" />{warehouse.phone}</div> : ''}
                    {warehouse.email ? <div className="flex flex-nowrap items-center"><AtSymbolIcon className="text-indigo-600 w-4 h-4 mr-2" />{warehouse.email}</div> : ''}
                </div>
            </div>
            {warehouse.address ? <div className="flex flex-nowrap items-center"><LocationMarkerIcon className="text-indigo-600 w-4 h-4 mr-2" />{warehouse.address}</div> : ''}
        </div>
    );
}

export default WarehouseMinitature;