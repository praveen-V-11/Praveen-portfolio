import praveen  from "../images/praveenimg2.png"
const About = () => {
    return ( 
        <>
        
        <div className="flex justify-center  "> 
            <h1 className="text-white text-4xl font-bold mt-5" >About Me</h1>
        </div>
        <section  >
            <div className="flex justify-around  px-35 py-15">
            <img  className="rounded-4xl h-[500px] w-[350px] animate-pulse" src={praveen} alt="" />
            <h1 className="text-white text-2xl ml-30 mt-9  " >I am a passionate full-stack developer with a focus on building modern and responsive web applications.
                 With a strong foundation in both frontend and backend technologies, I strive to create seamless and efficient user 
                 experiences . <h1 className="text-white text-2xl mt-9">
                    My skills include HTML, CSS, JavaScript, React.js, Python, Django, REST API, 
  SQL, and modern frameworks like Bootstrap and Tailwind. I have experience in 
  developing end-to-end solutions, from designing user interfaces to managing 
  databases and server-side logic.
                 </h1></h1><br /><br />
                 

        </div>
        
        
        </section>
        <hr className="text-white" />
        
        </>
     );
}
 
export default About;