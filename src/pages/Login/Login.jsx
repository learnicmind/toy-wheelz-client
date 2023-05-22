import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider';

const Login = () => {

    const { signIn, handleGoogleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'
    console.log(location)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                event.target.reset()
                navigate(from,{replace: true})
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleIn = () => {
        handleGoogleSignIn();

    }


    return (
        <div className="hero min-h-screen bg-gradient-to-t from-cyan-100 to-gray-300 flex items-center justify-center">
            <div className="hero-content flex-col lg:flex-row md:gap-40 ">
                <div className="relative text-center lg:text-left w-1/2 ">

                    <img
                        className="mx-auto h-[500px] w-[500px] rounded-xl"
                        src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=740&t=st=1684610646~exp=1684611246~hmac=c9d43d2f33f1f867f8d5029533ccc772353d234cf2819878adad1100ab96d24a"
                        alt="Your Image"
                    />

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <div className="card-body bg-transparent">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' required type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' required type="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-emerald-500 hover:bg-emerald-600" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='my-4 font-bold text-center'>New to toy wheelz?<Link className='text-slate-700 underline hover:text-slate-900' to='/register'> Sign Up</Link></p>
                        <div>
                            <div className="divider">OR</div>
                            <div className='flex justify-center items-center'>
                                <img onClick={handleGoogleIn} src="https://cdn-icons-png.flaticon.com/512/281/281764.png?w=740&t=st=1684515791~exp=1684516391~hmac=78bd410c2b0e36b23e2860af1bcecec28887f6d349d8a7c61999ca793088da6e" alt="" className='w-8 h-8 cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;