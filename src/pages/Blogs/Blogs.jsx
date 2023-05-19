import React from 'react';

const Blogs = () => {


    return (
        <div className='bg-slate-200 pb-10'>

            <div className='text-center'>
                <h2 className='text-4xl font-bold py-6'>Blog Page</h2>
            </div>

            <div className='p-4'>
                <div className='border-2 rounded-lg border-slate-900 md:w-[1300px] mx-auto md:px-20 py-4 text-center md:text-left'>
                    <h2 className='font-bold text-lg text-center pb-2'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4'>
                        <div>
                            <p className='font-bold text-center'>Access Token: </p>
                            <p>An access token is a credential that is used to access protected resources, such as APIs or server endpoints. Access tokens are issued to a client a web or mobile application by an authentication server after the client successfully authenticates itself.
                                The client includes the access token in each request to the server to access protected resources.
                                <br />
                                Access tokens should be stored in a secure manner, such as in an HTTP-only cookie or in the browser's local storage.
                            </p>
                        </div>

                        <div>
                            <p className='font-bold text-center'>Refresh Token: </p>
                            <p>A refresh token is a credential used to obtain a new access token without having to reauthenticate the user. It has a longer lifetime compared to an access token and is typically stored securely on the client-side.
                                The authentication server verifies the refresh token and, if valid, issues a new access token.
                                <br />
                                Refresh tokens, being more sensitive and long-lived, should be stored securely, preferably in an HTTP-only cookie with the 'secure' flag set or in a secure client-side storage mechanism.
                            </p>
                        </div>
                    </div>
                    {/* question 2 */}
                    <div className='text-center md:text-left'>
                        <h2 className='font-bold text-lg text-center pt-6 px-4'>2. Compare SQL and NoSQL databases?</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4'>
                            <div>
                                <p className='font-bold text-center px-4'>SQL: </p>
                                <p>SQL databases use a structured data model based on tables, rows, and columns. SQL databases are vertically scalable, which means they can handle increased workload by adding more powerful hardware upgrading CPU or RAM. However, scaling beyond the capabilities of a single machine can be challenging.</p>
                            </div>

                            <div>
                                <p className='font-bold text-center px-4'>NoSQL: </p>
                                <p>NoSQL databases use a variety of data models, including key-value pairs, document-oriented, columnar, and graph-based models. They provide more flexibility and allow for unstructured and semi-structured data. NoSQL databases are horizontally scalable, allowing data to be distributed across multiple servers or nodes. They are designed to handle large amounts of data and high traffic loads by adding more servers to the cluster.</p>
                            </div>
                        </div>
                    </div>

                    {/* question 3 */}
                    <div className='text-center md:text-left'>
                        <h2 className='font-bold text-lg text-center pt-6 px-4'>3. What is express js? What is Nest JS?</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4'>
                            <div>
                                <p className='font-bold text-center  px-4'>Express JS: </p>
                                <p>Express.js is a popular web application framework for Node.js. It provides a minimal and flexible set of features for building web applications and APIs. Express.js is known for its simplicity and ease of use, allowing developers to quickly set up server-side applications.</p>
                            </div>

                            <div>
                                <p className='font-bold text-center px-4'>Nest JS: </p>
                                <p>Nest.js is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. It is built with TypeScript and heavily inspired by Angular's architecture and concepts. Nest.js aims to provide a structured and opinionated approach to building server-side applications while leveraging the power of TypeScript.</p>
                            </div>
                        </div>
                    </div>

                    {/* question 4 */}
                    <div className='text-center md:text-left'>
                        <h2 className='font-bold text-lg text-center pt-6 pb-2 px-4'>4. What is MongoDB aggregate and how does it work?</h2>
                        <div className='grid grid-cols-1  px-4'>
                            <div>
                                <p>MongoDB Aggregation uses an aggregate() method to perform the aggregation operations. Basically, this aggregation operation practices data records and provides calculated results. The aggregation operations assemble values from various documents together and are able to execute a range of operations, such as average, sum, maximum, minimum, etc., on the assembled data to provide only a result. A corresponding of MongoDB Aggregation in SQL is count(*) and with the group by. MongoDB Aggregation is identical to the aggregate function provided in SQL.</p>
                            </div>


                        </div>
                    </div>
                </div>



            </div>


        </div>
    );
};

export default Blogs;