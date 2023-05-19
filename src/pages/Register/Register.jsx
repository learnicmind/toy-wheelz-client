import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value

        console.log(name, photo, email, password)

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            console.log(error)
        })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row md:gap-40">
                <div className="relative text-center lg:text-left w-1/2 ">
                    <div className="bg-gray-200 h-[585px] w-[600px]
                    rounded-full p-10">
                        <img
                            className="mx-auto h-[500px] w-[500px] rounded-full"
                            src="https://img.freepik.com/premium-photo/funny-illustrated-car-painted-rainbow-colors_183364-23794.jpg?size=626&ext=jpg&ga=GA1.1.1458484269.1673886849&semt=ais"
                            alt="Your Image"
                        />
                    </div>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Register</h1>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input name='photo' type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn" type="submit" value="Register" />
                            </div>
                        </form>
                        <p className='my-4 font-bold text-center'>Already have an account?<Link className='text-slate-700 underline hover:text-slate-900' to='/login'> Login</Link></p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;