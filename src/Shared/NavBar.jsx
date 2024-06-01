import logo from '../../public/logo.png'

const NavBar = () => {

    const navLink = <>
        <li><a>Home</a></li>
        <li><a>All Contest</a></li>
        <li><a>Sectors</a></li>
        <li><a>Services</a></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <img className='h-[70px] w-[70px]' src={logo} alt="" />
                    <a className="font-semibold text-2xl hidden md:block text-[#0e7490]">
                        Contest <span className='text-[#1bc5bd]'>Lab</span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <a className="btn btn-ghost text-[#1bc5bd]">Login</a>
                    <a className="btn bg-[#1bc5bd] text-white">Button</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;