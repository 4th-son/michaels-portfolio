import "./App.css";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Resume from "./images/Michael_Ogozi_CV.pdf";
import bg1 from "./images/bg1.png";
import about from "./images/aboutt.png";
import project1 from "./images/project1.png";
import link from "./images/lucky.png";
import im2 from "./images/B.C.png";
import idimg from "./images/idimg.png";
import MenuIcon from "@mui/icons-material/Menu";
import DropDownMenu from "./dropDownMenu";
import { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Home() {
  const [openDropdown, setOpenDropdown] = useState(false);

  const redirectToGitHub = () => {
    const githubUrl = "https://real-estate-project-three.vercel.app/";
    window.open(githubUrl, "_blank"); // Open the link in a new tab
  };
  const directToGitHub = () => {
    const githubUrl = "https://github.com/4th-son/Real_estate_project";
    window.open(githubUrl, "_blank"); // Open the link in a new tab
  };
  const ToGitHub = () => {
    const githubUrl = "https://github.com/4th-son/school-website";
    window.open(githubUrl, "_blank"); // Open the link in a new tab
  };
  const Towebsite = () => {
    const githubUrl = "https://Luckytrinityjuniorschool.com";
    window.open(githubUrl, "_blank"); // Open the link in a new tab
  };
  const github = () => {
    const githubUrl = "https://github.com/4th-son/Family-first";
    window.open(githubUrl, "_blank"); // Open the link in a new tab
  };
  const site = () => {
    const githubUrl = "https://booking-app-clone-nu.vercel.app/";
    window.open(githubUrl, "_blank"); // Open the link in a new tab
  };
  const newProjectGithub = () => {
    const githubUrl = "https://github.com/4th-son/Digital_ID";
    window.open(githubUrl, "_blank");
  };
  const newProjectDemo = () => {
    const demoUrl = "https://digital-id-phi.vercel.app/";
    window.open(demoUrl, "_blank");
  };
  return (
    <div className=" bg-bg2 mx-auto min-h-screen antialiased">
      <div className=" hero-section bg-bg2 md:bg-bg4 md:h-[100vh] bg-center bg-cover md:pt-10 md:px-10">
        <nav className="relative flex items-center justify-between ">
          <div
            id="home"
            className="logo text-2xl text-red-600 font-bold md:ml-32 ml-10 md:mt-0 mt-5"
          >
            4th-Son
          </div>
          <ul className="hidden md:flex mr-32 ">
            <li className=" px-3 font-bold capitalize text-white hover:text-red-600">
              <a href="#home">Home</a>
            </li>
            <li className=" px-3 font-bold capitalize text-white hover:text-red-600 ">
              <a href="#About me">About Me</a>
            </li>
            <li className=" px-3 font-bold capitalize text-white hover:text-red-600 ">
              <a href="#skills">Skills</a>
            </li>
            <li className=" px-3 font-bold capitalize text-white hover:text-red-600 ">
              <a href="#projects"> projects</a>
            </li>
            <li className=" px-3 font-bold capitalize text-white hover:text-red-600 ">
              <a href="#contact me">Contact Me</a>
            </li>
          </ul>
          <div className=" md:hidden text-red-600 mt-5 mr-9">
            <button
              aria-expanded={openDropdown}
              aria-controls="mobile-menu"
              onClick={() => setOpenDropdown((prev) => !prev)}
            >
              <MenuIcon />
            </button>
            {openDropdown && (
              <DropDownMenu onClose={() => setOpenDropdown(false)} />
            )}
          </div>
        </nav>

        <div className="">
          <div className="intro text-white md:text-zinc-400 md:absolute top-60 left-40 text-center">
            <h4 className="md:mt-0 mt-9 md:text-lg text-base md:mb-4 font-heading">
              HELLO, my name is
            </h4>
            <h1 className="md:font-semibold md:text-4xl text-xl font-heading font-semibold">
              Michael Ogozi
            </h1>
            <h3 className="md:text-xl md:font-semibold mt-4 font-heading font-medium">
              I`am a Full-Stack Developer
            </h3>
            <div className="socials  flex md:justify-evenly  mt-5 items-center justify-center">
              {" "}
              <a href="https://www.linkedin.com/in/michael-ogozi/">
                <FaLinkedin style={{ fontSize: "34px", marginRight: "10px" }} />
              </a>{" "}
              <a href="https://www.facebook.com/micheal.ogozi?mibextid=ZbWKwL">
                <FaFacebookSquare
                  style={{ fontSize: "34px", marginRight: "10px" }}
                />
              </a>{" "}
              <a href="https://twitter.com/michaelogozi">
                <FaTwitterSquare
                  style={{ fontSize: "34px", marginRight: "10px" }}
                />
              </a>
              <a href="https://instagram.com/4th__son?igshid=OGQ5ZDc2ODk2ZA==">
                <FaSquareInstagram
                  style={{ fontSize: "34px", marginRight: "10px" }}
                />
              </a>
            </div>

            <a href={Resume} download="MICHAEL OGOZI-CV ">
              <button className="btn glow hidden md:inline-block mt-5">
                Download Resume <FileDownloadIcon />
              </button>
              <button className="btn md:hidden bg-transparent border-2 border-red-300 text-red-300 px-4 py-2 mt-3 rounded-md">
                Download Resume <FileDownloadIcon />
              </button>
            </a>
          </div>
          <div className="image-container flex items-center justify-center">
            <img
              className=" md:hidden h-[350px] w-[350px] rounded-full items-center justify-center mx-auto"
              src={bg1}
              alt="Michael portrait"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>

      <section id="About me"></section>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center mt-20 md:mt-32 space-y-10 md:space-y-0 md:space-x-10">
        <img
          className="md:h-[350px] h-[300px] rounded-md"
          src={about}
          alt="About illustration"
          loading="lazy"
          decoding="async"
        />
        <div
          id="About me"
          className="text-white text-center md:text-left max-w-md"
        >
          <h1 className="md:text-3xl text-2xl mb-4 font-heading font-semibold">
            About Me
          </h1>
          <h3 className="font-bold mb-4">
            Full-Stack Developer{" "}
            <span className="text-red-500">& Designer</span>
          </h3>
          <p className="w-72 mx-auto md:mx-0">
            I'm a passionate Full Stack Developer dedicated to building
            beautiful, user-friendly, and high-performing web experiences. With
            a strong foundation in both front-end design principles and back-end
            development, I bridge the gap between aesthetics and functionality
            to deliver complete, seamless digital solutions.
          </p>
        </div>
      </div>

      <h1
        id="skills"
        className="text-white md:text-3xl text-xl font-heading font-semibold text-center mt-48"
      >
        Skills
      </h1>

      <div className=" flex mx-auto justify-around items-center w-4/5 mt-10 flex-wrap gap-3 ">
        <img
          className=" px-1"
          src="data:image/png;base64,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"
          alt="bootstrap"
          width="60"
          height="60"
          loading="lazy"
          decoding="async"
        />
        <img
          className=" px-1"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
          alt="css3"
          width="60"
          height="60"
          loading="lazy"
          decoding="async"
        />
        <img
          className=" px-1"
          src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
          alt="figma"
          width="60"
          height="60"
          loading="lazy"
          decoding="async"
        />
        <img
          className=" px-1"
          src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
          alt="firebase"
          width="60"
          height="60"
          loading="lazy"
          decoding="async"
        />
        <img
          className=" px-1"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
          alt="html5"
          width="60"
          height="60"
          loading="lazy"
          decoding="async"
        />
        <img
          className=" px-1"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
          alt="javascript"
          width="60"
          height="60"
          loading="lazy"
          decoding="async"
        />
        <img
          className=" px-1"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
          alt="postgresql"
          width="60"
          height="60"
          loading="lazy"
          decoding="async"
        />{" "}
        <img
          className=" px-1"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
          alt="react"
          width="60"
          height="60"
          loading="lazy"
          decoding="async"
        />
        <img
          className=" px-1"
          src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
          alt="tailwind"
          width="60"
          height="60"
          loading="lazy"
          decoding="async"
        />
        <img
          className=" px-1"
          src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
          alt="Redux"
          width="70"
          height="70"
          loading="lazy"
          decoding="async"
        />
        <img
          className=" px-1"
          src="https://www.cdnlogo.com/logos/t/85/typescript.svg"
          alt="Typescript"
          width="70"
          height="70"
          loading="lazy"
          decoding="async"
        />
        <img
          className=" px-1"
          src="data:image/png;base64,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"
          alt="vscode"
          width="70"
          height="70"
        />
        <img
          className=" px-1"
          src="https://pbs.twimg.com/media/FAXymZJXIAkERod.jpg"
          alt="Next.js"
          width="70"
          height="70"
          loading="lazy"
          decoding="async"
        />
        <img
          className=" px-1"
          src="https://static.vecteezy.com/system/resources/previews/016/833/880/non_2x/github-logo-git-hub-icon-with-text-on-white-background-free-vector.jpg"
          alt="Github"
          width="70"
          height="70"
          loading="lazy"
          decoding="async"
        />
        <img
          className=" px-1"
          src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"
          alt="express"
          width="70"
          height="70"
          loading="lazy"
          decoding="async"
        />
      </div>
      <h2
        id="projects"
        className="text-white md:text-3xl text-xl font-heading font-semibold text-center mt-28 mb-14"
      >
        Projects
      </h2>
      <div className="projects_container flex flex-wrap justify-center gap-8 mt-16">
        {/* Project Card Template */}
        {[
          {
            img: idimg,
            title: "Digital ID-Card Generator",
            github: newProjectGithub,
            demo: newProjectDemo,
          },
          {
            img: project1,
            title: "Real Estate",
            github: directToGitHub,
            demo: redirectToGitHub,
          },
          {
            img: link,
            title: "Lucky Trinity School",
            github: ToGitHub,
            demo: Towebsite,
          },
          {
            img: im2,
            title: "Booking Clone",
            github: github,
            demo: site,
          },
        ].map((project, index) => (
          <div
            key={index}
            className="project bg-white rounded-2xl shadow-md transform transition-all hover:scale-105 flex flex-col items-center w-[90%] sm:w-[320px] md:w-[350px] h-[400px]"
          >
            <img
              src={project.img}
              alt={project.title}
              className="rounded-md h-[250px] w-[90%] object-cover mt-4"
              loading="lazy"
              decoding="async"
            />
            <h3 className="text-2xl text-black font-bold text-center mt-5 mb-4">
              {project.title}
            </h3>
            <div className="flex justify-evenly w-full mt-auto mb-6">
              <button className="btn glow" onClick={project.github}>
                Github <GitHubIcon style={{ fontSize: "16px" }} />
              </button>
              <button className="btn glow" onClick={project.demo}>
                Demo <LanguageIcon style={{ fontSize: "16px" }} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2
        id="contact me"
        className="text-white md:text-3xl text-xl font-heading font-semibold text-center mt-28 md:mb-10"
      >
        Contact me
      </h2>

      <div className=" justify-center items-center flex md:flex-row flex-col pb-10  ">
        <button className="btn glow px-7 ">
          <h2 className=" md:text-2xl text-violet-100 mr-5">
            <a href="mailto:michealogozi@gmail">michealogozi@gmail.com</a>
          </h2>
        </button>{" "}
        <button className=" btn glow ml-5 mt-3 md:mt-0">
          <a href="https://wa.me/254792272017">
            {" "}
            <MdOutlineWhatsapp style={{ fontSize: "34px" }} />{" "}
          </a>
        </button>
      </div>
    </div>
  );
}

export default Home;
