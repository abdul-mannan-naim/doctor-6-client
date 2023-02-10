import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }

    const menuItems = <React.Fragment>
        <li><Link to="/" > Home</Link></li>
        <li><Link to="/appointment" > Appointment  </Link></li>
        <li><Link to="/about" > About  </Link></li>

        {user?.uid ?
            <>
                <li><Link to="/dashboard" > Dashboard    </Link></li>
                <li><button onClick={handleLogOut}  >  Sign Out </button></li>
            </>
            : <li><Link to="/login" >  Login  </Link></li>}
    </React.Fragment>

    return (
        <div class="navbar bg-base-100 flex justify-between">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="1" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" class="btn btn-ghost normal-case text-xl"> Doctors Portal </Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <label tabindex="2" htmlFor="dashboard-drawer" class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;