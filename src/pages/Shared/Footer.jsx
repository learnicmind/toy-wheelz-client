import { Link } from 'react-router-dom';
import logo from '../../assets/car.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';
import React from 'react';

const Footer = () => {

    const navItems = <>
        <Link className="font-bold" to='/'>Home</Link>
        <Link className="font-bold" to='/alltoys' >All Toys</Link>
        <Link className="font-bold" to='/addtoy' >Add a Toy</Link>
        <Link className="font-bold" to='/blogs' >Blogs</Link>
    </>

    return (
        <div className='bg-black text-white py-8 '>
            <footer className="mx-auto md:w-[1300px] footer grid md:p-0 p-4 justify-between items-center ">
                <div className=''>
                    <img className='w-14 h-14' src={logo} alt="" />

                    <button className="btn btn-ghost normal-case ">
                        <span className='md:text-3xl text-gray-200 '>Toy </span> <span className="text-2xl md:text-2xl text-gray-300"> Wheelz</span>
                    </button>
                    <div className='mt-4'>
                        <div className='flex items-center gap-2'>
                            <FaLocationArrow className='text-slate-400'></FaLocationArrow>
                            <p>Hill Street, Wangdu, USA</p>
                        </div>
                        <div className='flex text-lg items-center gap-2'>
                            <FaPhoneAlt className='text-slate-400' />
                            <p>+19983478494</p>
                        </div>
                    </div>
                    <footer className="footer footer-center p-4 ">
                        <div>
                            <p>Copyright © 2023 - Toy Wheelz</p>
                        </div>
                    </footer>
                </div>
                <div className=''>
                    <span className="footer-title">Quick Links</span>
                    {navItems}
                </div>
                <div className=''>
                    <span className="footer-title">Social Links</span>
                    <a className="link link-hover inline-flex items-center gap-2 text-lg font-semibold"> <FaFacebook />Facebook</a>
                    <a className="link link-hover inline-flex items-center gap-2 text-lg font-semibold"><FaInstagram />Instagram</a>
                    <a className="link link-hover inline-flex items-center gap-2 text-lg font-semibold"> <FaLinkedin />LinkedIn</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;