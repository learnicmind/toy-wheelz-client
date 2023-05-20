import { FaSearch } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import ToyTable from '../ToyTable/ToyTable';

const AllToys = () => {

    const [alltoys, setAlltoys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/alltoys')
        .then(res => res.json())
        .then(data => setAlltoys(data))
    }, [])

    return (
        <div className='mx-auto md:w-[1300px] my-10'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>All Toy Wheelz</h1>
                <p className='text-lg text-slate-500'>
                At Car Wheelz, we offer an extensive selection of high-quality wheels from leading brands, ensuring that you'll find the perfect match for your vehicle. Whether you're looking for sleek and sporty designs, rugged off-road wheels, or elegant and luxurious options, we have it all. Our wide range of sizes, finishes, and styles allows you to customize your car's look to suit your personal taste and driving preferences.
                </p>
            </div>
            <div className='my-10 grid gap-5'>
                <div className='flex justify-end items-center relative'>
                    <input type="search" className='border py-2 px-4 rounded-full md:w1/3' name="" id="" />
                    <button className='w-8 h-8 rounded-full text-white flex items-center justify-center bg-[#000C32] absolute right-1'><FaSearch></FaSearch></button>
                </div>
                <div className='overflow-x-auto w-full'>
                    <table className='table w-full'>
                        {/* thead */}
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>Toy</th>
                                <th>Toy Name</th>
                                <th>Price</th>
                                <th>Sub Category</th>
                                <th>Available Quantity</th>
                                <th>Seller Name</th>
                                <th></th>
                            </tr>
                        </thead>
                        {
                            alltoys.map(alltoy => <ToyTable key={alltoy._id} alltoy={alltoy}></ToyTable>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToys;