import React, { useEffect, useState } from 'react';
import MenuCard from './MenuCard';

const Menu = () => {
    const [menuItem, setMenuItem] = useState([])

    useEffect(() => {
        fetch(`AllMenu.json`)
            .then(res => res.json())
            .then(data => setMenuItem(data))
    }, [])
    return (
        <div className='my-10'>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    menuItem.map(item => <MenuCard
                        key={item.id}
                        item={item}
                    >
                    </MenuCard>)
                }
            </div>
        </div>
    );
};

export default Menu;