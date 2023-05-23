import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='p-10 bg-slate-300'>
            <Helmet>
                <title>404 | Error</title>
            </Helmet>
            <div>
                <img className='h-[500px] w-full rounded-lg' src="https://freefrontend.com/assets/img/html-funny-404-pages/HTML-404-Error-Page.gif" alt="" />
            </div>
            <div className='flex justify-center items-center mt-4'>
                <Link to='/'><button className="btn btn-error">Back to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;