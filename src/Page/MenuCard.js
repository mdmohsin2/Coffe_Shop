import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';

const MenuCard = ({ item }) => {
    const { title, picture, Price, description } = item
    const { loading } = useContext(AuthContext)
    if (loading) {
        return <button type="button" class="bg-indigo-500 ..." disabled>
            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
            Loading...
        </button>
    }
    return (
        <div className="p-5 mx-auto card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={picture} className='h-52'  alt="Shoes" /></figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <h2 className="card-title">Name : {title}</h2>
                    <h2 className="card-title"> price : {Price}</h2>
                </div>
                <p>{description}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;