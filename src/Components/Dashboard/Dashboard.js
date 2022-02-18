import { Children } from "react";
import { Outlet, Route } from "react-router-dom";
import LateralMenu from "../LateralMenu";

function Dashboard() {
    return (
        <div className="grow bg-slate-100 flex flex-nowrap items-stretch">
            <LateralMenu />
            <div className="w-full">
                <Outlet/>
            </div>
        </div>
    );
}

export default Dashboard;