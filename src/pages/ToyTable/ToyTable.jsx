import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ToyTable = ({ alltoy }) => {

    const { _id, seller_name, toy_img, toy_name, price, available_quantity, sub_category } = alltoy;

    const handleDelete = (_id) => {
        console.log(_id)

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
                fetch(`http://localhost:5000/mytoys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                            const remaining = alltoy.filter(toy => toy._id !== id)
                            setAlltoys(remaining)
                        }
                    })

            }
        })
    }

    return (
        <tbody>
            {/* row 1 */}
            <tr>
                <th></th>
                <td>
                    <div className='flex items-center space-x-3'>
                        <div className='avatar'>
                            <div className='mask rounded w-12 h-12'>

                            </div>
                        </div>
                    </div>
                </td>
                <td>{toy_name}</td>
                <td>{price}</td>
                <td>{sub_category}</td>
                <td>{available_quantity}</td>
                <td>{seller_name}</td>
                <td><button onClick={() => handleDelete(_id)} className='bg-[#000C32] w-7 h-7 text-white rounded-full'>X</button></td>
                <td><Link to={`/toydetail/${_id}`} className='bg-[#000C32] border-2 border-[#000C32] px-2 py-2 rounded hover:bg-transparent font-bold text-white hover:text-[#000C32]' style={{ transition: '0.3s' }}>View Details</Link></td>
            </tr>
        </tbody>
    );
};

export default ToyTable;