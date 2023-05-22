import React, { useEffect, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import ToyTable from '../ToyTable/ToyTable';

const AllToys = () => {

    const [alltoys, setAllToys] = useState([])
    const [showAll, setShowAll] = useState(false);
    const [asc, setAsc] = useState(true);
    const searchRef = useRef(null);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch(`https://toy-wheelz-server.vercel.app/alltoys?search=${search}&sort=${asc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data);
            });
    }, [asc, search])

    const handleSearch = () => {
        console.log(searchRef.current.value);
        setSearch(searchRef.current.value);
    }

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };
    
    const limitedData = showAll ? alltoys : alltoys.slice(0, 20);

    return (
        <div className='md:w-9/12 md:mx-auto mx-10 my-16'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>All Toy Wheels</h1>
                <p className='text-lg text-slate-500'>Toy Wheelz have been a beloved toy for children around the world for decades. While it is difficult to quantify exactly how much kids love Barbie, it is safe to say that Barbie has had a significant impact and a large fan base.</p>
            </div>

            <div className='my-10 grid gap-5'>

                <div className='flex justify-between items-center'>
                    <div>
                        <button className=" border-2 border-[#000C32]  font-bold  text-[#000C32] rounded px-4 py-1"

                            onClick={() => setAsc(!asc)}
                        >{asc ? 'Price: High to Low' : 'Price: Low to High'}</button>

                        <button  ></button>
                    </div>

                    <div className='flex justify-end items-center relative'>
                        <input ref={searchRef} type="search" name="" id="" className='border-2 py-2 px-4 rounded-full w-full' />

                        <button onClick={handleSearch} className='w-8 h-8 rounded-full text-white flex items-center justify-center bg-[#000C32] absolute right-1.5'> <FaSearch /> </button>
                    </div>
                </div>

                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Toy</th>
                                <th>Toy Name</th>
                                <th>Price</th>
                                <th>Sub Category</th>
                                <th>Available Quantity</th>
                                <th>Seller Name</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        {
                            limitedData.map(alltoy => <ToyTable key={alltoy._id} alltoy={alltoy}></ToyTable>)
                        }
                    </table>

                    {!showAll && (
                        <div colSpan="7" className="text-center">
                            <button
                                className="bg-[#000C32] border-2 border-[#000C32] hover:bg-transparent font-bold text-white hover:text-[#000C32] rounded px-4 py-1"
                                onClick={toggleShowAll}
                                style={{ transition: '0.5s' }}
                            >
                                View All
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllToys;