import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider';
import MyToy from './MyToys';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])
    // console.log(myToys);

    const url = `https://toy-wheelz-server.vercel.app/myToys?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })
    }, [user, url])

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-wheelz-server.vercel.app/myToys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(myToy => myToy._id !== id)
                            setMyToys(remaining)
                        }

                    })
            }
        })
    }

    

    return (
        <div className='md:w-9/12 md:mx-auto mx-10'>
            <h1 className='text-3xl text-center font-bold my-5'>You Added : {myToys.length} Toys</h1>

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
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        myToys.map(toy => <MyToy key={toy._id} toy={toy} handleDelete={handleDelete}></MyToy>)
                    }
                </table>
            </div>
        </div>
    );
};

export default MyToys;