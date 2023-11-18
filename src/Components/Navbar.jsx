import {React, useState} from 'react';
import "../index.css";
import {Link} from "react-router-dom";



function Navbar ()
{
    const navLinks = [
        {
            name: "Home.jsx",
            id: "Home",
            path: "/Home"
            
        },
        {
            name: "About.jsx",
            id: "About",
            path: "/About"
            
        },
        {
            name: "Experience.jsx",
            id: "Projects",
            path: "/Projects"
            
        },
        {
            name: "Contact.jsx",
            id: "Contact",
            path: "/Contact"
        }
    ];
    return(
        <>
        <div className="w-full whitespace-nowrap 2xl:text-xl">
            <nav className='bg-neutral-700 overflow-y-hidden pb-2 pt-2 overflow-x-auto border-neutral-700'>
            {
                navLinks.map((link) => 
                    (
                     <Link to={link.path} key={link.id} className=" p-9 text-white hover:bg-stone-900 hover:border hover:border-t-2 hover:border-sky-500 border border-stone-900"><span className="text-yellow-400 text-xs font-semibold focus:bg-stone-900 active:bg-stone-900 sticky top-0" >JS</span> {link.name}</Link> 
                    )
                )
            }
            </nav>
        </div>
        </>
    )
}
export default Navbar;