import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password)

        signIn(email, password)
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
                            src="https://img.freepik.com/free-photo/fun-trex-3d-illustration_183364-81257.jpg?w=740&t=st=1684514562~exp=1684515162~hmac=9889292ceb7944ced55fc7404c20f71b9434ace138eddceab0290775eaba60aa"
                            alt="Your Image"
                        />
                    </div>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin}>
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
                                <input className="btn" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='my-4 font-bold text-center'>New to toy wheelz?<Link className='text-slate-700 underline hover:text-slate-900' to='/register'> Sign Up</Link></p>
                        <div>
                            <div className="divider">OR</div>
                            <div className='flex justify-center items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png?w=740&t=st=1684515791~exp=1684516391~hmac=78bd410c2b0e36b23e2860af1bcecec28887f6d349d8a7c61999ca793088da6e" alt="" className='w-8 h-8 cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;