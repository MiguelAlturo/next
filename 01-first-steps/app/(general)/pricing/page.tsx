import type { Metadata } from "next";

export const metadata:Metadata = {
    title:'Seo Pricing',
    description: 'Seo Pricing',
    keywords:['Pricing page','Miguel','otros']
};

export default function Pricing(){
    return(
        <span className="text-5xl">Pricing page</span>
    )
}