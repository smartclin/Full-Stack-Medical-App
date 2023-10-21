import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillGithub} from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai"; 

const socialLinks = [
  {
    path: "https://www.youtube.com/watch?v=b3KeJ8DFjwQ",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.youtube.com/watch?v=b3KeJ8DFjwQ",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.youtube.com/watch?v=b3KeJ8DFjwQ",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.youtube.com/watch?v=b3KeJ8DFjwQ",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
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
    <div className="flex flex-col md:flex-row flex-wrap gap-[30px] justify-center items-center">
      <div className="flex flex-col items-center"> {/* Agregamos estas clases */}
        <img src={logo} alt="" />
        <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
          Copyright {year} developed by Maximo Ortelli all rights reserved.
        </p>

        <div className="flex items-center gap-3 mt-4">
          {socialLinks.map((link, index) => (
            <Link
              to={link.path}
              key={index}
              className="w-9 h-9 border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
</footer>
)};

export default Footer;
