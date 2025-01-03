import { Link } from "react-router-dom";

const Navbar = () => {
    const navItems = (
        <>
            <li><Link to={'/course'}>Course</Link></li>
            <li><Link to={'/add-course'}>Add Course</Link></li>
        </>
    );

    const token = localStorage.getItem('authToken');

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        window.location.reload();
    };

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {navItems}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-xl">Microdeft</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {token ? (
                    <button className="btn" onClick={handleLogout}>Logout</button>
                ) : (
                    <Link to={'/login'} className="btn">Login</Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
