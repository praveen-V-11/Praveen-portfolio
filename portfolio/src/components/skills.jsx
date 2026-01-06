import Html from '../images/html.png'
import css from '../images/css-3.png'
import js from '../images/javascript.png'
import reactlogo  from  '../images/React.jpg'
import python from '../images/python.png'
import sql from '../images/sql.jpg'
import django from '../images/Django.png'
const Skills = () => {
    return ( 
        <>
        <div className="font-sans items-center  bg-black text-white h-[600px]">
            <h1 className="flex justify-center mt-10  text-white text-5xl font-bold ">Skills</h1>
            <section className='flex mx-50 my-20 justify-around'>
                <div className="bg-black- transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-125 hover:bg-black ... rounded-full">
                <img src={Html} alt="" className='h-[80px] rounded-full' />
                <h1 className='text-2xl mx-5 mt-1'>HTML</h1>
            </div>
            <div className="bg-black- transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-125 hover:bg-black ... rounded-full">
                <img src={css} alt="" className='h-[80px] rounded-full' />
                <h1 className='text-2xl mx-12 mt-1'>CSS</h1>
            </div>
            <div className="bg-black- transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-125 hover:bg-black ... rounded-full">
                <img src={js} alt="" className='h-[80px] rounded-full' />
                <h1 className='text-2xl mx-6 mt-1'>JavaScript</h1>
            </div>
            <div className="bg-black- transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-125 hover:bg-black ... rounded-full">
                <img src={reactlogo} alt="" className='h-[80px] rounded-full' />
                <h1 className='text-2xl mx-3 mt-1'>React</h1>
            </div>
            </section>
            <section className='flex mx-70 my-5 '>
                <div className="mx-35 mt-10 bg-black- transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-125 hover:bg-black ... rounded-full">
                <img src={python} alt="" className='h-[80px] rounded-full' />
                <h1 className='text-2xl mx-2 mt-1'>Python</h1>
                </div>
                <div className="mx-25 mt-10 bg-black- transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-125 hover:bg-black ... rounded-full">
                <img src={sql} alt="" className='h-[80px] rounded-full' />
                <h1 className='text-2xl mx-2 mt-1'>SQL</h1>
            </div>
            <div className="mx-25 mt-10 bg-black- transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-125 hover:bg-black ... rounded-full">
                <img src={django} alt="" className='h-[80px] rounded-full' />
                <h1 className='text-2xl mx-8 mt-1'>Django</h1>
            </div>
            
            </section>
                        <section className='flex mx-70 my-5 justify-start'>
                
            </section>
        </div>
        <hr className='text-white' />
        </>
     );
}
 
export default Skills;