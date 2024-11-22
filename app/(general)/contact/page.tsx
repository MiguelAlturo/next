import type { Metadata } from "next";

export const metadata:Metadata = {
    title:'Seo contact',
    description: 'Seo contact',
    keywords:['contact page','Miguel','otros']
};

export default function Contact(){
    return(
        <span className="text-5xl">Contact Page</span>
    )
}