
import {React} from 'react';
import "../index.css";
import Footer from "./Footer"


function About ()
{
    
    const skills = 
    [
        {
            name: "HTML",
            level: "90%"
        },
        {
            name: "CSS",
            level: "70%"
        },
        {
            name: "JAVASCRIPT",
            level: "60%"
        },
        {
            name: "REACT",
            level: "50%"
        },
        {
            name: "GIT",
            level: "60%"
        },
        {
            name: "FIGMA",
            level: "50%"
        },
        {
            name: "BOOTSTRAP",
            level: "60%"
        },
        {
            name: "TAILWIND CSS",
            level: "70%"
        },
    ]
    return(
        <>
        <div className="height flex items-center justify-center">
            <section className="bg-stone-900 max-w-2xl text-slate-300 flex flex-col gap-2 text-justify">
                <h3 className="font-semibold text-lg">ABOUT ME<hr></hr></h3>
                <p>
                    My name is Martin Kagya Agyemang, a level 300 student of computer engineering at 
                    the Kwame Nkrumah University of Science and Technology. I am a self-taught web developer
                    with a passion for learning and building web applications. I am a team player and I am
                    always eager to learn new things.I have the passion to build with new Technology. 
                    I am currently looking for an internship opportunity
                    and also junior engineering roles.
                </p>
                <h3 className="font-semibold text-lg">MY SKILLS<hr></hr></h3>
                <p>
                   {
                          skills.map((skill, index) => (
                            <div key={index} className="flex justify-between items-center">
                                 <p>{skill.name}</p>
                                 <div className='bg-stone-300 h-5 rounded-lg' style={{width: "40%"}}>
                                    <div className='h-full bg-stone-800 rounded-lg' style={{ width: skill.level }}>
                                        {skill.level}
                                    </div>
                                 </div>
                            </div>
                          ))
                   }
                </p>
            </section>
        </div>
        </>
    )
}
export default About;