import {React} from 'react'
import "../index.css"
import Timeline from './Timeline'

function Project ()
{
    return(
        <>
        <div className="height flex items-center justify-center text-slate-50 overflow-hidden">
            <Timeline/>
        </div>
        </>
    )
}
export default Project;