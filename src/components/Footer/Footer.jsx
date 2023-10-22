import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillGithub} from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai"; 

const socialLinks = [
  {
    path: "https://www.youtube.com/watch?v=b3KeJ8DFjwQ",
    icon: <AiFillYoutube className="group-hover:text-white w-7 h-7" />,
  },
  {
    path: "https://www.youtube.com/watch?v=b3KeJ8DFjwQ",
    icon: <AiOutlineInstagram className="group-hover:text-white w-7 h-7" />,
  },
  {
    path: "https://www.youtube.com/watch?v=b3KeJ8DFjwQ",
    icon: <RiLinkedinFill className="group-hover:text-white w-7 h-7" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];

const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Request an Appointment",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get a Opinion",
  },
];

const quickLinks03 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const Footer = () => {
const year = new Date().getFullYear();

  return (
    <footer className="pb-[-100px] mb-[-50px]">
  <div className="container">
    
    <div className="flex lg:justify-between sm:flex-col md:flex-row flex-wrap gap-[30px] msm:justify-center sm:items-center">
      
      <div className="flex flex-col items-center"> {/* Agregamos estas clases */}
        
        <img src={logo} alt="" className="lg:ml-[-18vw]"/>
        
        <p className="text-[16px] leading-7 font-[600] text-textColor lg:pl-[100px] mt-4 ">
          Copyright {year} developed by Maximo Ortelli all rights reserved.
        </p>

        <div className="flex items-center gap-3 mt-4 lg:ml-[-20vw]">
          {socialLinks.map((link, index) => (
            <Link
              to={link.path}
              key={index}
              className="border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
            >
              {link.icon}
            </Link>
          ))}
        </div>
        
      </div>

    <div className="lg:pl-[19%] max-sm:m-auto">
      <h2 className="text-[20px] leading-[30px]  font-[700] mb-6 text-headingColor ">
        Quick Links
      </h2>

      <ul>
        {quickLinks01.map((item, index)=> ( 
        <li key={index} className="mb-4 justify-center text-center"> 
            <Link to={item.path}
              className="text-[16px] leading-7
              font-[400] text-textColor"
            >
              {item.display}
            </Link>
        </li> 
        ))}
      </ul>
    </div>

    <div className="lg:pr-[5vw] max-sm:m-auto">
      <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-center text-headingColor ">
        Sections
      </h2>

      <ul>
        {quickLinks02.map((item, index)=> ( 
        <li key={index} className="mb-4 justify-center text-center"> 
            <Link to={item.path}
              className="text-[16px] leading-7
              font-[400] text-textColor"
            >
              {item.display}
            </Link>
        </li> 
        ))}
      </ul>

    </div>

    </div>

  </div>
</footer>
)};

export default Footer;
