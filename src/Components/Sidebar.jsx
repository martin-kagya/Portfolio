import React from "react";
import "../index.css";

import { MdOutlineContentCopy } from "react-icons/md";
import { VscEdit } from "react-icons/vsc";
import { VscCode } from "react-icons/vsc";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { VscSettingsGear } from "react-icons/vsc";
import {BiChevronDown} from "react-icons/bi";

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
    return(
        <>
            <section className="w-16 md:w-80 phone:block smallphone:hidden lg:block bg-neutral-800 h-screen float-left text-gray-400 overscroll-y-none relative">
                <div className="flex flex-col items-center lg:inline-block lg:relative">
                    {
                        icons.map((icon) => (
                            <div key={icon.id} className="lg: p-6 hover:bg-stone-900 hover:text-sky-500">
                                {icon.name}
                            </div>
                        ))
                    }
                    <div className="md:hidden lg:hidden width-calc">
                        <div className="flex flex-col gap-6">
                            <VscAccount size={25}/>
                            <VscSettingsGear size={25}/>
                        </div>
                    </div>
                </div>
                <span className="hidden lg:inline-block lg:text-sm  lg:pl-3">EXPLORER</span>
                    <>
                        <Link to="./Projects.jsx" className="hidden lg:flex flex-row gap-2"><BiChevronDown />Projects</Link>
                        <Link to='/' className="hidden lg:flex lg:flex-row gap-2 pl-4"><BiChevronDown />Quiz App</Link>
                    </>
            </section>
        </>
    )
}
export default Sidebar;