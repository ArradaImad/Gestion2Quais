import { useState } from 'react';
import { useNavigate  } from "react-router-dom";
import { toast } from 'react-toastify';
import { authenticationService } from '../_services/authentication.service';


function Register() {
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profile, setProfile] = useState("livreur");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Call to async Register function from API
        const response = await authenticationService.register({ firstname, lastname, email, password, profile });

        if(response.ok) {
            navigate("/user/login");
            toast.success(response.message, {position: toast.POSITION.BOTTOM_RIGHT});
        }
        else {
            toast.error(response.message, {position: toast.POSITION.BOTTOM_RIGHT});
        }
    }

    return (
        <div className="flex flex-col items-center justify-center w-screen h-full grow bg-slate-100">
            <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-12">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                    <h1 className="text-4xl text-center mb-4">Register</h1>
                    <div className="space-y-3">
                        <div>
                            <label htmlFor="firstname" className="text-base font-semibold">Firstname</label>
                            <input type="firstname" name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} className="flex items-center h-12 px-4 w-full bg-gray-100 mt-2 rounded focus:outline-none focus:ring-2" />
                        </div>
                        <div>
                            <label htmlFor="lastname" className="text-base font-semibold">Lastname</label>
                            <input type="lastname" name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} className="flex items-center h-12 px-4 w-full bg-gray-100 mt-2 rounded focus:outline-none focus:ring-2" />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-base font-semibold">Email</label>
                            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="flex items-center h-12 px-4 w-full bg-gray-100 mt-2 rounded focus:outline-none focus:ring-2" />
                        </div>
                        <div>
                            <label htmlFor="password" className="text-base font-semibold">Password</label>
                            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="flex items-center h-12 px-4 w-full bg-gray-100 mt-2 rounded focus:outline-none focus:ring-2" />
                        </div>
                        <div>
                            <label for="profile" className="text-base font-semibold">Profile</label>
                            <div className="flex justify-center space-x-4">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-indigo-600 checked:border-indigo-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
                                        type="radio" name="profile" id="livreur" value="livreur" 
                                        onChange={(e) => {console.log(e.target.value);setProfile(e.target.value)}}    
                                    />
                                    <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Livreur</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-indigo-600 checked:border-indigo-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
                                        type="radio" name="profile" id="gestionnaire" value="gestionnaire" 
                                        onChange={(e) => {console.log(e.target.value);setProfile(e.target.value)}}
                                    />
                                    <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">Gestionnaire</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <button type="submit" className="whitespace-nowrap inline-flex items-center w-auto justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Sign up</button>
                        <p className="text-gray-600 text-sm mt-2">Already have an account? <a href="/user/login" className="font-bold">Sign in</a></p>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default Register;