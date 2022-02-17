import { useState } from 'react';
import { useNavigate  } from "react-router-dom";
import { toast } from 'react-toastify';
import { authenticationService } from '../_services/authentication.service';


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit  = async (e) => {
        e.preventDefault();

        const response = await authenticationService.login({email, password});
        if (response.ok) {
            authenticationService.setCurrentUser(response.user);
            authenticationService.setToken(response.token);
            toast.success(response.message, {position: toast.POSITION.BOTTOM_RIGHT});  
            navigate("/dashboard");
        } else {
            toast.error(response.message, {position: toast.POSITION.BOTTOM_RIGHT});
        }
    }

    return (
        <div className="flex flex-col items-center justify-center w-screen h-full grow bg-slate-100">
            <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-12">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                    <h1 className="text-4xl text-center mb-4">Login</h1>
                    <div className="space-y-3">
                        <div>
                            <label htmlFor="email" className="text-base font-semibold">Username or email</label>
                            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="flex items-center h-12 px-4 w-full bg-gray-100 mt-2 rounded focus:outline-none focus:ring-2" />
                        </div>
                        <div>
                            <label htmlFor="password" className="text-base font-semibold">Password</label>
                            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="flex items-center h-12 px-4 w-full bg-gray-100 mt-2 rounded focus:outline-none focus:ring-2" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <button type="submit" className="whitespace-nowrap inline-flex items-center w-auto justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Sign in</button>
                        <p className="text-gray-600 text-sm mt-2">Don't have an account? <a href="/user/register" className="font-bold">Sign up</a></p>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default Login;