import "./App.css";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Resume from "./images/Ogozi Michael TCV.pdf";

function home() {
  return (
    <div className=" hero-section  bg-bg4  h-[100vh] w-full bg-cover bg-center pt-10 px-10">
      <nav className=" flex items-center justify-between ">
        <div className="logo text-2xl text-amber-400 font-bold ml-32">
          Portfolio
        </div>
        <ul className="flex">
          <li className=" px-3 font-bold capitalize text-white hover:text-amber-400">
            <a href="">Home</a>
          </li>
          <li className=" px-3 font-bold capitalize text-white hover:text-amber-400 ">
            <a href="">About us</a>
          </li>
          <li className=" px-3 font-bold capitalize text-white hover:text-amber-400 ">
            <a href="">Services</a>
          </li>
          <li className=" px-3 font-bold capitalize text-white hover:text-amber-400 ">
            <a href="">Skills</a>
          </li>
          <li className=" px-3 font-bold capitalize text-white hover:text-amber-400 ">
            <a href="">Contact us</a>
          </li>
        </ul>
        <button className="bn5">Subscribe</button>
      </nav>
      <div className="intro text-white  absolute top-60 left-40">
        <h4 className="text-xl font-bold  mb-4">HELLO, my name is</h4>
        <h1 className=" font-semibold text-6xl">Michael Ogozi</h1>
        <h3 className="text-2xl font-bold mt-4">I`am a Front-End Developer</h3>

        <a href={Resume} download="Ogozi Michael TCV.pdf">
          <button className="bn5 mt-5">
            Download Resume <FileDownloadIcon />
          </button>
        </a>
      </div>
    </div>
  );
}

export default home;
