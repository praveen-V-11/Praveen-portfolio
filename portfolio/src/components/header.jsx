import praveen from "../images/praveenimage.png";
import "../styles/header.css";
import { HashLink as Link } from "react-router-hash-link";
const Header = () => {
  return (
    <>
      <header className=" flex justify-around font-sans items-center  bg-black text-white h-[705px] ">
        <div className="">
          <h1 className="text-5xl mb-3  gap-20">
            Hi I'm <br />{" "}
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-blue-900 text-8xl">
              Praveen
            </h2>{" "}
            <br />
            <span>
              <span> Python Full-Stack Developer</span>
              <span> Web Developer</span>
              <span> Programmer</span>
              <span>React js Developer </span>
            </span>
          </h1>

          <p className="text-gray-300 mt-4 text-2xl">
            {" "}
            I specialize in building modern and responsive web applications.
          </p>
          <div>
            <Link smooth to={'#contact'}><button className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-tansform duration-300 hover:scale-105 px-5 mt-8 ml-25 py-2 rounded-full">
              Contact Me
            </button></Link>
            
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-tansform duration-300 hover:scale-105 px-5 ml-10 py-2 rounded-full">
              Resume
            </button>
          </div>
        </div>
        <div>
          <img
            className="rounded-6xl animate-pulse  h-[500px] w-[350px]  rounded-full "
            src={praveen}
            alt=""
          />
        </div>
      </header>
      <hr className="text-white" />
    </>
  );
};

export default Header;
