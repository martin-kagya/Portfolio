
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
            name: "PYTHON",
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
            <section className="bg-stone-900 max-w-sm md:max-w-md lg:max-2xl: text-slate-300 flex flex-col gap-2 text-justify
            smallphone:max-w-screen-phone">
                <h3 className="font-semibold text-lg pl-5 tablet:text-xl">ABOUT ME<hr></hr></h3>
                <p className='text-sm p-5 tablet:text-xl'>
                    My name is Martin Kagya Agyemang, a level 300 student of computer engineering at 
                    the Kwame Nkrumah University of Science and Technology. I am a self-taught web developer
                    with a passion for learning and building web applications. I am a team player and I am
                    always eager to learn new things.I have the passion to build with new Technology. 
                    I am currently looking for an internship opportunity
                    and also junior engineering roles.
                </p>
                <h3 className="font-semibold text-lg pl-5 tablet:text-xl">MY SKILLS<hr></hr></h3>
                <div className='p-5'>
                   {
                          skills.map((skill, index) => (
                            <div key={index} className="text-sm md:text-md lg:text-lg flex justify-between items-center tablet:text-sm">
                                 <p className='tablet:text-xl'>{skill.name}</p>
                                 <div className='bg-stone-300 h-2 rounded-lg' style={{width: "40%"}}>
                                    <div className='h-full bg-sky-500 rounded-lg' style={{width: skill.level}}>
                                        
                                    </div>
                                 </div>
                            </div>
                          ))
                   }
                </div>
            </section>
        </div>
        </>
    )
}
export default About;