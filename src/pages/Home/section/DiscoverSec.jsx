import React from 'react';

const DiscoverSec = () => {
    return (
        <div className='my-10 mx-auto md:w-[1300px]'>
            <section className="bg-blue-500 py-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl text-white font-bold mb-6">Discover Toy Wheelz</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h2 className="text-4xl text-white font-bold mb-4">
                                Welcome to Toy Wheelz!
                            </h2>
                            <p className="text-white text-lg mb-6">
                                We offer a wide range of high-quality toy vehicles for kids of all
                                ages. From remote-controlled cars to pedal-powered bikes, we have
                                it all.
                            </p>
                            <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded">
                                Shop Now
                            </button>
                        </div>
                        <div>
                            <div className="grid grid-cols-2 gap-4">
                                <img
                                    src="https://img.freepik.com/free-photo/kindergarten-concept-with-wooden-blocks-kid-toys-wooden-grungy-background-side-view_176474-7732.jpg?size=626&ext=jpg&ga=GA1.2.1458484269.1673886849&semt=ais"
                                    alt="Toy 1"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <img
                                    src="https://img.freepik.com/premium-photo/self-driving-tour-concept-car-model-destination_1205-2701.jpg?size=626&ext=jpg&ga=GA1.1.1458484269.1673886849&semt=ais"
                                    alt="Toy 2"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <img
                                    src="https://img.freepik.com/premium-photo/transportation-travel-concept_93675-1091.jpg?size=626&ext=jpg&ga=GA1.2.1458484269.1673886849&semt=ais"
                                    alt="Toy 3"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <img
                                    src="https://img.freepik.com/premium-photo/funny-illustrated-car-painted-rainbow-colors_183364-23794.jpg?size=626&ext=jpg&ga=GA1.2.1458484269.1673886849&semt=ais"
                                    alt="Toy 4"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DiscoverSec;