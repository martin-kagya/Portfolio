import React from "react";
import {useState} from 'react'
import "../index.css";

import { MdOutlineContentCopy } from "react-icons/md";
import { VscEdit } from "react-icons/vsc";
import { VscCode } from "react-icons/vsc";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { VscSettingsGear } from "react-icons/vsc";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";
import {BiChevronDown} from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";

function Sidebar() {
    const icons = [
        {
            name: <MdOutlineContentCopy size={25}/>,
            id: "content",
        },
        {
            name: <VscEdit size={25}/>,
            id: "Pencil",
        },
        {
            name: <VscCode size={25}/>,
            id: "Code",
        },
        {
            name: <MdOutlineForwardToInbox size={25}/>,
            id: "Message",
        },
    ]
    const [isSectionHidden, setIsSectionHidden] = useState(false);

    const handleDoubleClick = () => {
        console.log("doubleClicked")
        if (window.innerWidth < 500) {
            setIsSectionHidden(true);
        }
    };
    const show = () =>
    {
        setIsSectionHidden(false)
    }
   
    return(
        <>
        {isSectionHidden ? (
            <div className='absolute top-10 p-2' onClick={show}>
               <TfiLayoutMenuSeparated size={25} className="text-gray-400"/>
            </div>
            ) : null}
        {!isSectionHidden && (
            <section  className="w-16 md:w-80 icon xl:w-96 tablet:text-xl 2xl:text-2xl phone:flex smallphone:hidden 2xl:flex 2xl:basis-4/12 grow lg:flex bg-neutral-800 h-screen float-left text-gray-400 overscroll-y-none relative">
                <div className= "grid grid-cols-5">
                    <div className="flex flex-col p-6 items-center tablet:bg-neutral-700  lg:pl-4 lg:bg-neutral-700 ">
                        {
                            icons.map((icon)=>(
                                <span className="p-5 lg:p-9 tablet:p-9 hover:text-slate-200 active:text-slate-200" onDoubleClick={handleDoubleClick} key={icon.id}>{icon.name}</span>
                            ))
                        }
                        <div className="flex flex-col width-calc gap-9 justify-end">
                            <VscAccount size={25} className="hover:text-slate-200 active:text-slate-200"/>
                            <VscSettingsGear size={25} className="hover:text-slate-200 active:text-slate-200"/>
                        </div>
                    </div>
                    <div className="hidden tablet:flex tablet:flex-col col-span-3 p-10">
                        <p className="text-xs pl-8 pb-2">EXPLORER</p>
                        <Link to='/' className="pl-2 font-semibold flex"><BiChevronDown size={25}/>Project</Link>
                        <Link to='/' className="pl-5 font-thin flex"><BiChevronRight size={25}/>Quiz</Link>
                    </div>
                </div>
            </section>
        )}
        
        </>
    )
}
export default Sidebar;