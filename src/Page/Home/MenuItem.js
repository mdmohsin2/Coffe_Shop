// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const MenuItem = () => {
//     const [menuItem, setMenuItem] = useState([])
//     useEffect(() => {
//         fetch(`MenuItem.json`)
//             .then(res => res.json())
//             .then(data => setMenuItem(data))
//     }, [])
//     return (
//         <div>
//             <h2 className='text-2xl font-bold italic text-gray-600 text-center'>MENU ITEM {menuItem.length}</h2>

//             <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
//                 {/* {
//                     menuItem.map(service => <ServicesCard
//                         key={service._id}
//                         service={service}
//                     ></ServicesCard>)
//                 } */}
//             </div>
//             <div className='text-center my-12'>
//                 {
//                     <button className="btn btn-outline btn-warning">
//                         <Link to='/menu'>
//                             see More
//                         </Link>
//                     </button>
//                 }
//             </div>

//         </div>
//     );
// };

// export default MenuItem;