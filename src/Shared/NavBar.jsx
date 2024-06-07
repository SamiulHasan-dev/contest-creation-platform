import { Link, NavLink } from 'react-router-dom';
import logo from '../../public/logo.png'
import useAuth from '../hooks/useAuth';

const NavBar = () => {

    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLink = <>
        <li><NavLink className={({ isActive }) => isActive ? 'font-bold ' : ' font-normal'} to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'font-bold ' : ' font-normal'} to="/allContest">All Contest</NavLink></li>
        <li><a>Sectors</a></li>
        <li><a>Services</a></li>
    </>

    return (
        <div>
            <div className="navbar ">
                <div className="navbar-start ">
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
                {user ? (
                    <div className="navbar-end">
                        <div className="flex items-center gap-3">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="user pic"
                                            src={user?.photoURL || "https://i.ibb.co/p3d9pYn/user.png"}
                                        />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>{user.displayName}</li>
                                    <li><Link to='/dashboard'>Dashboard</Link></li>
                                    <li><Link onClick={handleLogOut}>Log Out</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="navbar-end">
                            <Link to="/login"><a className="btn btn-ghost text-[#1bc5bd]">Login</a></Link>
                            <Link to='signUp'><a className="btn bg-[#1bc5bd] text-white">Sign Up</a></Link>
                        </div>
                    </>
                )}
            </div>
        </div>


    );
};

export default NavBar;