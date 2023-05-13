import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuCard from './MenuCard';

const MenuItem = () => {
    const [menuItem, setMenuItem] = useState([])
    const [sliceItem, setSliceItem] = useState([])

    useEffect(() => {
        fetch(`https://dolpin-server.vercel.app/items`)
            .then(res => res.json())
            .then(data => setMenuItem(data))
    }, [])

    useEffect(() => {
       const sliceItem = menuItem.slice(0,3);
       setSliceItem(sliceItem)
    }, [menuItem])


    return (
        <div>
            <h2 className='text-2xl font-bold italic text-gray-600 text-center'>MENU ITEM</h2>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    sliceItem.map(item => <MenuCard
                        key={item.id}
                        item={item}
                    >
                    </MenuCard>)
                }
            </div>
            <div className='text-center my-12'>
                {
                    <button className="btn btn-warning btn-large">
                        <Link to='/menu'>
                            see More  
                        </Link>
                    </button>
                }
            </div>

        </div>
    );
};

export default MenuItem;