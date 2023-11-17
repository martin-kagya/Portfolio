import {React} from 'react';
import "../index.css";
import Typewriter from "./Typewriter";

function Home ()
{
   
    return(
        <>
        <div className="height flex items-center justify-center text-slate-300">
            <section className="bg-stone-900 text-justify max-w-2xl">
            <h3 className="font-semibold text-2xl">My name is,</h3>
                <p>
                    <span className="uppercase font-bold text-3xl">Martin Kagya Agyemang</span><br></br>
                    <span><Typewriter text="A FRONT END ENGINEER" speed={90} /></span><br></br>
                    <button className="border rounded-lg p-2">CHECK MY RESUME</button>
                </p>
            </section>
        </div>
        </>
    )
}
export default Home;