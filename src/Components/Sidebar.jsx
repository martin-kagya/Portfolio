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
            name: <MdOutlineContentCopy />,
            id: "content",
        },
        {
            name: <VscEdit />,
            id: "Pencil",
        },
        {
            name: <VscCode />,
            id: "Code",
        },
        {
            name: <MdOutlineForwardToInbox />,
            id: "Message",
        },
    ]
    return(
        <>
            <section className="w-16 md:w-80 lg:block bg-neutral-800 h-screen float-left text-white overscroll-y-none relative">
                <div className="flex flex-col items-center">
                    {
                        icons.map((icon) => (
                            <div key={icon.id} className="lg:hidden md:hidden p-6 hover:bg-stone-900 hover:text-sky-500">
                                {icon.name}
                            </div>
                        ))
                    }
                    <div className="md:hidden lg:hidden flex flex-col gap-5">
                        <VscAccount/>
                        <VscSettingsGear/>
                    </div>
                </div>
                <span className="hidden lg:block lg:text-sm lg:pt-6 lg:pl-3">EXPLORER</span>
                    <>
                        <Link to="./Projects.jsx" className="hidden lg:flex flex-row gap-2"><BiChevronDown />Projects</Link>
                        <Link to='/' className="hidden lg:flex lg:flex-row gap-2 pl-4"><BiChevronDown />Quiz App</Link>
                    </>
            </section>
        </>
    )
}
export default Sidebar;