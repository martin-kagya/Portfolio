import React from "react";
import "../index.css";
import {useState} from "react";
import { SlArrowUp } from "react-icons/sl";
import { AiOutlinePlus } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
function Made (){
    const [sectionHidden, setSectionHidden] = useState(false);
    const projects = [
        {
            name: "Quiz App",
            id: "quiz",
            description: "A quiz app built with react",
            link: "https://generaltrivia.netlify.app"
        },
        {
            name: "Weather App",
            id: "weather",
            description: "A weather app built with react",
            link: "https://main--getweatherhere.netlify.app"
        }
    ]

    function showTerminal () {
        setSectionHidden(true)
    }
    return (
        <>
         <div className="project height text-slate-300 w-full">
            <p className="text-green-500/50 text-justify">/**You will need to run the function below
            on your own**/
            </p>
            <p className=""><span className="text-sky-500">function </span> 
            <span className="text-yellow-200">listProjects </span>
                <span className="text-sky-500">{`(){`}</span><br></br>
                <span className="ml-4">
                    <span className="text-sky-500">let </span> 
                    <span className="text-sky-300">Projects</span>
                    <span className="text-slate-300"> = </span> 
                    <span className="text-pink-400">[<br></br>
                        <span>{
                        projects.map((project) => (
                            <span className="text-sky-300 ml-8">{project.name}<br></br></span>
                        ))
                    }</span>]</span>;<br></br>
                    <span className="text-pink-400 ml-4">for{`(`}<span className="text-sky-300"><span className="text-sky-500">let </span>i=0; i{`<`}Projects.length; i++<span className="text-pink-400">{`)`}</span></span>
                    </span>
                    <span className="text-sky-500 ml-4">{`{`}</span><br></br>
                    <span className="ml-10">
                        <span className="text-sky-500">console</span>
                        <span className="text-yellow-200">.log</span>
                        <span className="text-sky-500">{`(`}</span>
                        <span className="text-sky-300">Projects</span>
                        <span className="text-sky-300">[i]</span>
                        <span className="text-sky-500">{`)`}</span>
                        <span className="text-slate-300">;</span>
                        <br></br><span className="ml-4 text-sky-500">{`}`}</span>
                </span><br></br>
                <span className="text-sky-500">{`}`}</span>
            </span>
            </p>
            <p className="text-green-500/50 translate-y-12">//Click on the button below to run the function</p>
            <button onClick={showTerminal} className="ml-4 translate-y-24 cursor-pointer border rounded-md p-3 border-slate-300"><span className="text-yellow-200">listProjects</span><span className="text-sky-500">()</span></button>
            {sectionHidden && (
                    <div className="translate-y-52">
                        <section className="ml-6 text-slate-300 flex justify-between relative">
                                <div>

                                </div>
                                <div className="flex flex-row text-xs gap-3">
                                    <BsTrash3 size={15} className="cursor-pointer"/>
                                    <p>node</p>
                                    <AiOutlinePlus size={15} className="cursor-pointer"/>
                                    <SlArrowUp size={15} className="cursor-pointer"/>
                                </div>
                        </section>
                            {projects.map((project) => (
                                <a className="ml-5 text-sky-500" href={project.link}>{`Live Demo of ${project.name}`}<br></br></a>
                            ))}
                    </div>
        )}
         </div>
        </>
    )
}
export default Made;