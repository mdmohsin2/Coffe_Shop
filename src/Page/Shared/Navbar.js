import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    // handle logOut
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const menuItems = <React.Fragment>
        <li><Link to='/' className='mr-5 font-bold text-white'>Home</Link></li>
        <li><Link to='/menu' className='mr-5 font-bold text-white'>Menu</Link></li>
    </React.Fragment>
    return (
        <div className="navbar" data-theme="night">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a href='/' className="btn btn-ghost normal-case text-xl italic text-white">Coffee</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <>
                    {
                        user?.uid ?
                            <>
                                <button className='font-bold text-white mr-5 bg-info p-2 rounded-md' onClick={handleLogout}>Sign Out</button>
                            </>
                            :
                            <>
                                <Link className='font-bold text-white mr-5' to='/login'>Login</Link>
                                <Link className='font-bold text-white mr-5' to='/register'>Sign Up</Link>
                            </>
                    }
                </>
            </div>
        </div>
    );
};

export default Navbar;