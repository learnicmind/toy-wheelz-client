import { Link } from 'react-router-dom';
import logo from '../../assets/car.png'
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider';

const Header = () => {


    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
    }


    const navItems = <>
        <li><Link className="text-lg font-bold" to='/'>Home</Link></li>
        <li><Link className="text-lg font-bold" >All Toys</Link></li>
        <li><Link className="text-lg font-bold" >My Toys</Link></li>
        <li><Link className="text-lg font-bold" >Add a Toy</Link></li>
        <li><Link to='/blogs' className="text-lg font-bold" >Blogs</Link></li>
    </>

    return (
        <div className=" bg-cover bg-black  bg-center">
            <div className="mx-auto md:w-[1300px] text-gray-700">
                <div className="navbar py-4">
                    <div className="navbar-start text-white">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </label>
                            <ul tabIndex={0} className="menu text-black menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {navItems}
                            </ul>
                        </div>
                        <div>
                            <Link to='/'><img className='w-14 h-14' src={logo} alt="" /></Link>
                        </div>
                        <button className="btn btn-ghost normal-case ">
                            <span className='md:text-4xl text-gray-200 mr-[2px]'>Toy </span> <span className="text-2xl md:text-3xl text-gray-300"> Wheelz</span>
                        </button>

                    </div>
                    <div className="navbar-center text-white hidden lg:flex">
                        <ul className="menu menu-horizontal flex gap-2">
                            {navItems}
                        </ul>
                    </div>
                    <div className="navbar-end flex items-center gap-2">
                        {user && <img title={user?.displayName} className="w-10 rounded-full" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1684436550~exp=1684437150~hmac=2dde41d83a7c88b827e4d287b54cb75a292f4c2c894a0339ea2762cbc4244922" />
                            }
                        {user ?
                            <button onClick={handleLogOut} className="btn bg-slate-950">Logout</button>
                            :
                            <Link to='/login'><button className="btn bg-slate-950">Login</button></Link>
                        }
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Header;