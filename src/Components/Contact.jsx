import React from 'react'
import '../index.css'


function Contact ()
{
    const contacts = [
        {
            name: "linkedin",
            Link: "https://gh.linkedin.com/in/martin-kagya-agyemang-2122b822a",
            website: "martin-kagya-agyemang",
            id: "linkedin"
        },
        {
            name: "twitter",
            Link: "https://twitter.com/Kagya_Martin",
            website: "martin@twitter",
            id:"twitter"
        },
        {
            name: "github",
            Link: "https://github.com/martin-kagya",
            website: "martin@githib.io",
            id:"github"
        },
        {
            name: "email",
            Link: "mailto:martinkagya777@gmail.com",
            website: "martinkagya777@gmail.com",
            id:"email"
        }
    ]
    return(
        <>
            <div className='height sm:text-sm flex flex-col whitespace-nowrap lg:text-lg md:text-md'>
                <h3 className='text-slate-300 pl-5 pt-12'>Reach out to me Via:</h3>
                <span className='text-slate-300 pt-12 '><span className='p-5 text-zinc-500'>1</span>.Social:</span>
                <div><span className='p-5 text-zinc-500'>2</span><span><span className='text-slate-300'>{`{`}</span></span>
                    {
                        contacts.map((contact, index)=>
                        (
                            <p className='' key={contact.id}><span className='p-5 text-zinc-500'>{index + 3}</span><span className='pl-5 text-sky-500'>{contact.name}<span className='text-slate-300'>:</span> 
                            <a href={contact.Link}><span className='text-orange-300 smallphone:text-xs'>{contact.website}</span></a>
                            <span className='text-slate-300'>;</span>
                            </span></p>
                        ))
                    }
                <span className='p-5 text-zinc-500'>7</span><span className='text-slate-300'>{`}`}</span></div>
            </div>
        </>
    )
}
export default Contact;