import type { Metadata } from "next";


export const metadata : Metadata = {
 title: 'Price',
 description: 'Price Page',
 keywords: ['Price Page', 'Pablo', 'price','...']
};


export default function PricePage(){

    return (
        <>
        <span className="text-7xl">Price Page</span>
        </>
    )
    }