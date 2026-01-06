import { toast } from "react-toastify";
const Contact = () => {
    function Handleform() {
        toast.success('Submited Sucessfully !!!')
    }
    return ( 
        <>
        <div className="font-sans items-center  bg-black text-white h-[600px]">
            <div className="flex justify-center  ">
                <h1 className="text-5xl font-bold my-5">Contact Me</h1>
            </div>
            <div className="flex justify-center  ">
                <form action="" className=" bg-white text-black h-[380px] w-[600px] rounded  mt-5">
                <label htmlFor="" className="text-3xl ml-15  ">
                    Name :</label> 
                    <input type="text" placeholder="Enter your name... " required className="border rounded  mt-8 text-2xl w-[350px] p-1 px-2 ml-4"/><br />
                <label htmlFor="" className="text-3xl ml-17  ">
                    Email  :</label>
                    <input type="text" placeholder="Enter your Email.. " required className="border rounded  mt-8 text-2xl w-[350px] p-1 px-2 ml-4"/><br />
                   <div>
                     
                    <h2  className="text-3xl ml-8 mt-4  " >Message : </h2>
                    <textarea name="" id="text" required className="  p-2 text-2xl h-[150px] w-[350px] text-black" style={{border: '1px solid black' , marginLeft:'175px', borderRadius: '10px'}} ></textarea></div>
                <button onClick={Handleform} className="mx-60 my-10 border px-8 py-1 rounded text-2xl bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-tansform duration-300 hover:scale-105">Submit</button>
            </form>
            </div>
        </div>
        </>
     );
}
 
export default Contact;
