import React from 'react';

const Home = () => {
    return (
        <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('pooja.jpg')" }}>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="text-center">
                    <div className='flex gap-4 items-center justify-center'>
                        <img src='/domy.jpg' alt="Example" className='h-10 w-10 rounded rounded-full' />
                        <h1 className='text-white font-bold'>Ayush</h1>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className="text-4xl font-bold mt-6 text-[#22d3ee]">COMING SOON</h1>
                        <div className='items-center px-48'>
                            <p className="text-3xl mt-4 text-center font-semibold justify-center text-gray-300 px-32">We are preparing something amazing and exciting for you. We also have a special surprise for our subscribers.</p>
                        </div>
                        <div className='items-center mt-6 text-gray-300 font-semibold flex gap-1'>IMAGE FROM 
                            <p className='underline '>FREEPIK</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;