import { authenticationService } from "../_services/authentication.service";
import { SearchIcon, LocationMarkerIcon, ClockIcon, HomeIcon, DatabaseIcon, PlusIcon, BadgeCheckIcon, ClipboardCheckIcon } from '@heroicons/react/outline'
import { Profile } from "../_helpers/profile";
import { Link, useMatch, useResolvedPath, LinkProps } from "react-router-dom";

const links = [
    {
        name: 'Dashboard',
        icon: HomeIcon,
        profile: 'all',
        url: '/dashboard',
        block: 1,
    },
    {
        name: 'Search',
        icon: SearchIcon,
        profile: Profile.Livreur,
        url: '/dashboard/search',
        block: 1,
    },
    {
        name: 'My warehouses',
        icon: LocationMarkerIcon,
        profile: Profile.Livreur,
        url: '/dashboard/joined-warehouses',
        block: 2,
    },
    {
        name: 'My appointments',
        icon: ClockIcon,
        profile: Profile.Livreur,
        url: '/dashboard/my-appointments',
        block: 2,
    },
    {
        name: 'My warehouses',
        icon: DatabaseIcon,
        profile: Profile.Gestionnaire,
        url: '/dashboard/my-warehouses',
        block: 1,
    },
    {
        name: 'Create warehouse',
        icon: PlusIcon,
        profile: Profile.Gestionnaire,
        url: '/dashboard/add-warehouse',
        block: 1,
    },
    {
        name: 'Review membership',
        icon: BadgeCheckIcon,
        profile: Profile.Gestionnaire,
        url: '/dashboard/membership',
        block: 2,
    },
    {
        name: 'Appointments',
        icon: ClipboardCheckIcon,
        profile: Profile.Gestionnaire,
        url: '/dashboard/appointments',
        block: 2,
    },
];

function LateralMenu() {
    const currentUser = authenticationService.getCurrentUser();
    return (
        <div className="w-80 overflow-hidden text-white bg-stone-800 ">
            <div className="flex flex-col items-center ">
                <Link className="flex items-center w-full px-3 mt-3" to="/dashboard">
                    <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                    </svg>
                    <span className="ml-2 text-sm font-bold">Hi, {currentUser.firstname + ' ' + currentUser.lastname}</span>
                </Link>
                <div className="w-full px-2">
                    <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
                        {links.filter(link => ((link.profile.toLowerCase() === currentUser.profile.toLowerCase() || link.profile === "all") && link.block === 1)).map(link =>
                            <CustomLink key={link.name} to={link.url}>
                                <link.icon className="w-6 h-6 stroke-current" />
                                <span className="ml-2 text-sm font-medium">{link.name}</span>
                            </CustomLink>
                        )}
                    </div>
                    <div className="flex flex-col items-center w-full mt-2 border-t border-gray-700">
                        {links.filter(link => ((link.profile.toLowerCase() === currentUser.profile.toLowerCase() || link.profile === "all") && link.block === 2)).map(link =>
                            <CustomLink key={link.name} to={link.url}>
                                <link.icon className="w-6 h-6 stroke-current" />
                                <span className="ml-2 text-sm font-medium">{link.name}</span>
                            </CustomLink>
                        )}
                    </div>
                </div>
                <a className="flex items-center justify-center w-full h-16 mt-auto bg-indigo-800 hover:bg-indigo-700" href="/dashboard">
                    <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-2 text-sm font-medium">Account</span>
                </a>
            </div>
        </div>
    );
}

function CustomLink({ children, to, ...props }: LinkProps) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link
            className={`${match ? "bg-indigo-700" : "bg-transparent"} flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700`}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
}

export default LateralMenu;