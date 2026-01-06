import {HashLink as Link } from "react-router-hash-link"
const Navbar = () => {
    return ( 
        <>
        <nav className="flex justify-between px-15 bg-black py-5 text-white text-1xl font-sans ">
            <div>
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-4xl">Portfolio</h1>
        </div>
        <div>
            
           <Link smooth to={"#home"}> <a href="" className="px-5 text-2xl ">Home</a></Link> 
           <Link smooth to={"#about"}> <a href="" className="px-5 text-2xl ">About Me</a></Link> 
           <Link smooth to={"#skills"}> <a href="" className="px-5  text-2xl">Skills</a></Link> 
           <Link smooth to={"#projects"}> <a href="" className="px-5 text-2xl ">Projects</a></Link> 
           <Link smooth to={"#contact"}> <a href="" className="px-5 text-2xl ">Contact</a></Link> 
        </div>
                <div>
           <Link smooth to={"#contact"} ><button className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-tansform duration-300 hover:scale-105 px-4 py-2 rounded-full" >Connect Me</button> </Link> 
        </div>
        </nav>
        <hr className="text-white" />
        
        </>
     );
}
 
export default Navbar;