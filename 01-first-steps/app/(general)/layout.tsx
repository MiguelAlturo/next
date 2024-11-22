import { NavBar } from "@/components"



export default function  AboutLayout({
    children
}:{
    children:React.ReactNode
}){
    return(
        <>
        <NavBar/>
         <div>
            <h1>Hello root layout About</h1>
            {children}
        </div>
        </>
       
    )
}