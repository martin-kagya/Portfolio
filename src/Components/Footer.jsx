import React from "react";
import "../index.css";
import { VscSourceControl } from "react-icons/vsc";
import { VscRemote } from "react-icons/vsc";
import { VscSync } from "react-icons/vsc";
import { VscCheckAll } from "react-icons/vsc";
import { VscError } from "react-icons/vsc";
import { VscWarning } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";
import { PiBracketsCurly } from "react-icons/pi";
import { VscBell } from "react-icons/vsc";

function Footer ()
{
    const github = "https://github.com/martin-kagya/Portfolio.git"
    
    return (
        <div className="flex bg-sky-500 w-full justify-between phone:text-2xs md:text-sm cursor-pointer text-slate-100 absolute">
            <div className="container flex p-0.5 phone:text-2xs phone-pro:text-2xs smallphone:text-2xs">
                <a href={github} className="mr-1 p-1"><VscSourceControl size={15}/></a><p className="p-0.5">main</p>
                <div className="flex p-1 mr-2">
                    <VscSync className="ml-3" size={15}/>
                    <VscError className="ml-2" size={15}/>
                    <VscWarning className="mr-2" size={15}/>
                </div>
            </div>
            <div className="flex p-1 phone:text-2xs phone-pro:text-2xs smallphone:text-2xs">
                <p className="mr-2">Spaces:4</p>
                <p className="ml-2">ReactJS</p>
                <VscCheckAll className="ml-2" size={18}/><p>Prettier</p>
                <VscBell className="ml-2" size={15}/>
            </div>
        </div>
        )
}
export default Footer;