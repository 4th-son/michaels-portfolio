import "./App.css";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Resume from "./images/Ogozi Michael TCV.pdf";
import bg1 from "./images/bg1.png";
import about from "./images/aboutt.png";
import MenuIcon from "@mui/icons-material/Menu";
import DropDownMenu from "./dropDownMenu";
import { useState } from "react";

function Home() {
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div className=" bg-bg2">
      <div className=" hero-section bg-bg2 md:bg-bg4 h-[100vh] w-[100vw] bg-center bg-cover md:pt-10 md:px-10">
        <nav className=" flex items-center justify-between ">
          <div className="logo text-2xl text-red-600 font-bold md:ml-32 ml-10 md:mt-0 mt-5">
            Portfolio
          </div>
          <ul className="hidden md:flex mr-32 ">
            <li className=" px-3 font-bold capitalize text-white hover:text-red-600">
              <a href="">Home</a>
            </li>
            <li className=" px-3 font-bold capitalize text-white hover:text-red-600 ">
              <a href="">About Me</a>
            </li>
            <li className=" px-3 font-bold capitalize text-white hover:text-red-600 ">
              <a href="">Skills</a>
            </li>
            <li className=" px-3 font-bold capitalize text-white hover:text-red-600 ">
              <a href=""> projects</a>
            </li>
            <li className=" px-3 font-bold capitalize text-white hover:text-red-600 ">
              <a href="">Contact Me</a>
            </li>
          </ul>
          <div className=" md:hidden text-red-600 mt-5 mr-9">
            <button onClick={() => setOpenDropdown((prev) => !prev)}>
              <MenuIcon />
            </button>
            {openDropdown && <DropDownMenu />}
          </div>
        </nav>

        <div className="">
          <div className="intro text-white md:text-zinc-400 md:absolute top-60 left-40 text-center">
            <h4 className=" md:mt-0 mt-9 md:text-xl  md:mb-4 font-serif md:font-sans">
              HELLO, my name is
            </h4>
            <h1 className=" md:font-semibold md:text-6xl text-2xl font-medium">
              Michael Ogozi
            </h1>
            <h3 className="md:text-2xl md:font-semibold mt-4 font-sans font-medium">
              I`am a Front-End Developer
            </h3>

            <a href={Resume} download="Ogozi Michael TCV.pdf">
              <button className="bn5 hidden md:inline-block mt-5  ">
                Download Resume <FileDownloadIcon />
              </button>
              <button className=" text-gray-30 bg-transparent  border-2 md:hidden border-red-300 cursor-pointer px-4 py-2 mt-3 rounded-md">
                Download Resume <FileDownloadIcon />
              </button>
            </a>
          </div>
          <div className="image-container flex items-center justify-center">
            <img
              className=" md:hidden h-[350px] w-[350px] rounded-full items-center justify-center"
              src={bg1}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className=" flex md:flex-row mt-40 flex-col-reverse  md:justify-evenly items-center justify-center">
        <img
          className=" md:h-[400px] h-[350px]  rounded-md md:ml-16"
          src={about}
          alt=""
        />
        <div className=" text-white md:text-start md:w-1/4 md:mr-16 mb-20 text-center ">
          <h1 className=" md:text-5xl text-2xl mb-5 font-semibold">About Me</h1>
          <h3 className=" font-bold mb-5">
            Front-End Developer{" "}
            <span className="text-red-500"> & Designer</span>
          </h3>
          <p className=" px-5 md:px-0">
            {" "}
            I`m passionate about creating beautiful and user-friendly web
            experiences. With a strong foundation in both design principles and
            coding, I strive to bridge the gap between aesthetics and
            functionality.
          </p>
        </div>
      </div>
      <h1 className=" text-white md:text-5xl  text-2xl mt-16 font-semibold text-center">
        {" "}
        Skills
      </h1>
      <div className="bn54"> javascript</div>
    </div>
  );
}

export default Home;
