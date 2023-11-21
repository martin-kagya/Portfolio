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
    
    return (
        <div className="flex bg-sky-500 absolute w-full justify-between phone:text-2xs md:text-sm cursor-pointer text-slate-100">
            <div className="container flex p-0.5">
                <a className="mr-1 p-1"><VscSourceControl /></a>main
                <div className="flex p-1 mr-2">
                    <VscSync className="ml-3"/>
                    <VscError className="ml-3"/>
                    <VscWarning className="mr-3"/>
                </div>
            </div>
            <div className="flex p-1">
                <p className="ml-2">ReactJS</p>
                <VscCheckAll className="ml-2"/><p>Prettier</p>
                <VscBell className="ml-2"/>
            </div>
        </div>
        )
}
export default Footer;