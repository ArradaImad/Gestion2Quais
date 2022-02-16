function Header() {
    return (
        <header className="sticky top-0 h-16 bg-white border-b border-gray-300">
            <div className="container mx-auto h-full flex items-center justify-between">
                <div>
                    <a href="/">
                        <svg viewBox="0 0 15 15" version="1.1" id="warehouse" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-indigo-800 fill-current">
                            <path d="M13.5,5c-0.0762,0.0003-0.1514-0.0168-0.22-0.05L7.5,2L1.72,4.93C1.4632,5.0515,1.1565,4.9418,1.035,4.685&#xA;&#x9;S1.0232,4.1215,1.28,4L7.5,0.92L13.72,4c0.2761,0.0608,0.4508,0.3339,0.39,0.61C14.0492,4.8861,13.7761,5.0608,13.5,5z M5,10H2v3h3&#xA;&#x9;V10z M9,10H6v3h3V10z M13,10h-3v3h3V10z M11,6H8v3h3V6z M7,6H4v3h3V6z" />
                        </svg>
                    </a>
                </div>
                <div className="h-full flex items-center space-x-8">
                    <a href="/pricing" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        Pricing
                    </a>
                    <a href="about" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        About
                    </a>
                </div>
                <div className="h-full flex items-center space-x-8">
                    <a href="/user/login" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                        Sign in
                    </a>
                    <a href="/user/register" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                        Sign up
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;