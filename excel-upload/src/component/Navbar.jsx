// src/components/Navbar.jsx


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navOptions = (
        <>
            <li className="mx-2 text-lg">
                <NavLink
                    to="/single"
                    className={({ isActive }) =>
                        isActive ? "text-lime-900" : "hover:text-lime-400 transition duration-300"
                    }
                >
                    Single Sentence
                </NavLink>
            </li>
            <li className="mx-2 text-lg">
                <NavLink
                    to="/multiple"
                    className={({ isActive }) =>
                        isActive ? "text-lime-900" : "hover:text-lime-400 transition duration-300"
                    }
                >
                    Bulk Sentence
                </NavLink>
            </li>
        </>
    );

    return (
        <nav className="fixed top-0 z-10 w-full mx-5 me-5 bg-lime-900 bg-opacity-30 text-white">
            <div className="flex justify-between items-center  ">
                <div className="flex items-center">
                    <NavLink
                        to="/"
                        className="font-bold text-lg bg-lime-900 btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-full bg-opacity-20 ml-5 p-2"
                    >
                        SLR
                    </NavLink>
                    <button
                        className="lg:hidden ml-4 p-2 rounded text-white hover:text-lime-400 focus:outline-none transition duration-300"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
                <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} flex-col lg:flex-row lg:items-center`}>
                    <ul className="flex flex-col lg:flex-row items-center lg:space-x-2">
                        {navOptions}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;








// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     const navOptions = (
//         <>
//             <li className="mx-2 text-lg hover:text-lime-900 transition duration-300">
//                 <Link to="/single">Single Sentence</Link>
//             </li>
//             <li className="mx-2 text-lg hover:text-lime-900 transition duration-300">
//                 <Link to="/multiple">Bulk Sentence</Link>
//             </li>
//         </>
//     );

//     return (
//         <nav className="fixed z-10 w-full bg-lime-900 bg-opacity-30 text-white">
//             <div className="max-w-screen-xl mx-auto  flex justify-between items-center">
//                 <div className="flex items-center">
//                     <button
//                         className="lg:hidden ml-4 p-2 rounded text-white hover:text-lime-400 focus:outline-none transition duration-300"
//                         onClick={toggleMenu}
//                     >
//                         <svg
//                             className="w-6 "
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M4 6h16M4 12h16M4 18h16"
//                             />
//                         </svg>
//                     </button>
//                     <button className="btn bg-lime-900 btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-full bg-opacity-20 ml-5">
//                         <Link to="/" className="font-bold text-lg">SLR</Link>
//                     </button>
//                 </div>
//                 <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} flex-col lg:flex-row lg:items-center`}>
//                     <ul className="flex flex-col lg:flex-row items-center lg:space-x-4">
//                         {navOptions}
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


////////////////














// import React from 'react';
// import { Link } from 'react-router-dom';


// const Navbar = () => {

//     const navOptions = <>
//         {/* <li className='ms-5 text-xl'><Link to="/">Home</Link></li> */}
//         <li className='mx-2 text-lg'  ><Link to="/single">Single Sentence</Link></li>
//         <li className=' text-lg'><Link to="/multiple">Bulk Sentence</Link></li>

//     </>

//     return (
//         <>
//             <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-lime-900 text-white p-0  mt-2 rounded-lg ">
//                 <div className="navbar-start ">
//                     <div className=' border-red-950 ml-5'>
//                         <button className="btn bg-lime-900 btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-full  z-10 bg-opacity-20 "><Link to="/">SLR</Link></button>

//                     </div>

//                     {/* <a className="btn btn-ghost normal-case text-xl">SLR</a> */}
//                 </div>
//                 <div className="navbar-center hidden lg:flex ">
//                     <ul className="menu menu-horizontal ">
//                         {navOptions}
//                     </ul>
//                 </div>
//                 <div className="navbar-end">

//                 </div>
//             </div>
//         </>
//     );
// };

// export default Navbar;
