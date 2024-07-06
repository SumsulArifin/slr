// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li className='ms-5' ><Link to="/single">Single Page</Link></li>
        <li className='ms-5'><Link to="/multiple">Multiple Page</Link></li>
        
    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white mb-8">
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-xl">SLR</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal pr-4 ms-5">
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
