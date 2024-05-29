import type { Metadata } from "next";


export const metadata : Metadata = {
 title: 'Contact',
 description: 'Contact Page',
 keywords: ['Contact Page', 'Pablo', 'contact','...']
};



export default function ContactPage(){

    return (
        <>
        <span className="text-7xl">Contact Page</span>
        </>
    )
    }