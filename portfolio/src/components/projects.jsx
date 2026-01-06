import salesproject from '../images/Salesprojects.png'
import Ecommerce from '../images/ecommercereact.png'
import taskmanager from '../images/Taskmanager.png'
import { Link } from 'react-router-dom'
const Projects = () => {
    return ( 
        <>
        <div className="font-sans items-center  bg-black text-white h-[800px]">
            <h1 className="text-white flex justify-center text-5xl font-bold  mb-10 mt-5 ">Projects</h1>

            <section className='flex justify-around warp mx-20'>
                <div className='bg-black- transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black ... rounded-full' >
                    <Link to={"https://github.com/praveen-V-11/DriveTime---Sales-Conseltancy---django"} >
                     <img src={salesproject} alt="" className='h-[250px] w-[350px]  rounded-1xl' />
                <h1 className='mt-2' >Sales And conseltancy Project 
                    using Django . 
                </h1>
                    </Link>
               
            </div>
            <div className='bg-black- transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black ... rounded-full'>
                <img src={Ecommerce} alt=""  className='h-[250px] w-[350px] rounded-1xl' />
                <h1 className=' mt-2'  >E-commerce website Project using React Js . 
                </h1>
            </div>
            <div className='bg-black- transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black ... rounded-full'>
                <img src={taskmanager} alt=""className='h-[250px] w-[350px] rounded-1xl'  />
                <h1 className=' mt-2' >To-Do-LIST Project using Django . 
                </h1>
            </div>
            </section>
            
            <section className='flex justify-around warp mx-20 my-15'>
                <div className='bg-black- transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black ... rounded-full'>
                <img src={salesproject} alt="" className='h-[250px] w-[350px] rounded-1xl' />
                <h1 className='mt-2' >Sales And conseltancy Project 
                    using Django . 
                </h1>
            </div>
            <div className='bg-black- transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black ... rounded-full'>
                <img src={Ecommerce} alt=""  className='h-[250px] w-[350px] rounded-1xl' />
                <h1 className=' mt-2'  >E-commerce website Project using React Js . 
                </h1>
            </div>
            <div className='bg-black- transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black ... rounded-full'>
                <img src={taskmanager} alt=""className='h-[250px] w-[350px] rounded-1xl'  />
                <h1 className=' mt-2' >To-Do-LIST Project using Django . 
                </h1>
            </div>
            </section>
        </div>
        <hr className='text-white' />
        </>
     );
}
 
export default Projects