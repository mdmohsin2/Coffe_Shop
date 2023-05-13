import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="hero my-12">
                <div className="hero-content flex-col lg:flex-row">
                    <img alt="" className="h-[480px] w-[450px] rounded-lg shadow-2xl lg:mr-12 ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800" src='https://i.ibb.co/YdP6Dtt/1.jpg' />
                    <div>
                        <h2 className='text-5xl mt-14 font-bold italic'>A TASTE OF EAST
                            <span className='text-red-400'> IN A CUP!</span></h2>
                        <div className='md:w-[550px] mt-10'>
                            <p>Welcome to a coffee store full of flavor! We provide you with fresh and tasty coffee every day from morning to night. In our store you can not only have coffee but also have a fun experience. We are always ready to make your favorite coffee. In our coffee store you can experience a cozy area with your favorite coffee.</p>
                        </div>
                        <div className='mt-6'>
                            <button className='btn btn-warning'><Link to='/'>Contact me</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Banner;