// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const navOptions = <>
        {/* <li className='ms-5 text-xl'><Link to="/">Home</Link></li> */}
        <li className='mx-2 text-lg'  ><Link to="/single">Single Sentence</Link></li>
        <li className=' text-lg'><Link to="/multiple">Bulk Sentence</Link></li>

    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-lime-900 text-white p-0  mt-2 rounded-lg ">
                <div className="navbar-start ">
                    <div className=' border-red-950 ml-5'>
                        <button className="btn bg-lime-900 btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-full  z-10 bg-opacity-20 "><Link to="/">SLR</Link></button>

                    </div>

                    {/* <a className="btn btn-ghost normal-case text-xl">SLR</a> */}
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal ">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">

                </div>
            </div>
        </>
    );
};
//     return (
//         <nav>

//             <div className="navbar bg-base-100">
//                 <ul>
//                     <li><Link to="/single">Single Page</Link></li>
//                     <li><Link to="/multiple">Multiple Page</Link></li>
//                 </ul>
//             </div>

//         </nav>
//     );
// };

export default Navbar;
