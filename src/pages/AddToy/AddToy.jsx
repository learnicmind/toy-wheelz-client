import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider';
import Swal from 'sweetalert2'

const AddToy = () => {

    const {user} = useContext(AuthContext);

    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;
        const toyName = form.toyName.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const photoURL = form.photoURL.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const description = form.description.value;

        const addToy = {
            toy_name: toyName,
            sub_category: subCategory,
            price: price,
            rating: rating,
            available_quantity: quantity,
            toy_img: photoURL,
            seller_name: sellerName,
            seller_email: sellerEmail,
            description
        }
        console.log(addToy)

        fetch(`https://toy-wheelz-server.vercel.app/alltoys`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToy)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully Added a Toy',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                })
                form.reset()
            }
        })
        
    }

    return (
        <div className='bg-slate-300'>
            <div className='md:w-9/12 md:mx-auto mx-10  pb-6 '>
            <h1 className='text-3xl text-center font-bold pt-8'>Add A Toy</h1>
            <form onSubmit={handleAddToy} className=' mt-10 rounded-xl w-full '>
                <div className='bg-gradient-to-t from-cyan-100 to-gray-300 p-10 md:p-20 space-y-4'>
                    <div className='grid md:grid-cols-2 gap-8'>

                        <div>
                            <label className='text-lg font-semibold mb-1'>Toy Name</label>
                            <input type="text" name="toyName" placeholder='Toy Name' className='w-full px-4 py-2 rounded-lg block' />
                        </div>

                        <div>
                            <label className='text-lg font-semibold mb-1'>Sub Category</label>
                            <input type="text" name="subCategory" placeholder='Sub Category' className='w-full px-4 py-2 rounded-lg block' />
                        </div>


                        <div>
                            <label className='text-lg font-semibold mb-1'>Price</label>
                            <input type="number" name="price" placeholder='Price $' className='w-full px-4 py-2 rounded-lg block' />
                        </div>

                        <div>
                            <label className='text-lg font-semibold mb-1'>Rating</label>
                            <input type="number" name="rating" placeholder='Rating' className='w-full px-4 py-2 rounded-lg block' />
                        </div>

                        <div>
                            <label className='text-lg font-semibold mb-1'>Availabe Quantity</label>
                            <input type="number" name="quantity" placeholder='Available Quantity' className='w-full px-4 py-2 rounded-lg block' />
                        </div>

                        <div>
                            <label className='text-lg font-semibold mb-1'>Photo URL</label>
                            <input type="text" name="photoURL" placeholder='Photo URL' className='w-full px-4 py-2 rounded-lg block' />
                        </div>

                        <div>
                            <label className='text-lg font-semibold mb-1'>Seller Name</label>
                            <input type="text" name="sellerName" placeholder='Seller Name' className='w-full px-4 py-2 rounded-lg block' />
                        </div>

                        <div>
                            <label className='text-lg font-semibold mb-1'>Seller Email</label>
                            <input type="email" name="sellerEmail" placeholder='Toy Name' className='w-full px-4 py-2 rounded-lg block' />
                        </div>

                        <div>
                            <label className='text-lg font-semibold mb-1'>Description</label>
                            <textarea placeholder='Add a detailed Description About Your Toy...' name="description" rows='5' className='w-full px-4 py-2 rounded-lg block' ></textarea>
                        </div>

                        

                        

                    </div>
                    <input type='submit' value='Add Toy' className='bg-[#000C32] border-2 border-[#000C32] hover:bg-transparent font-bold text-white hover:text-[#000C32] text-center rounded px-4 py-1 cursor-pointer' style={{ transition: '0.5s' }} />
                    <p className='text-md'>View<Link className='text-blue-600 underline'>Terms & Conditions</Link></p>
                </div>
            </form>
        </div>
        </div>
    );
};

export default AddToy;