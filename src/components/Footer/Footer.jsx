import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillGitHub,
  AiOutlineInstagram,
} from "react-icons/ai";

const socialLinks = [
  {
    path: "https://www.youtube.com/watch?v=b3KeJ8DFjwQ",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.youtube.com/watch?v=b3KeJ8DFjwQ",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.youtube.com/watch?v=b3KeJ8DFjwQ",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.youtube.com/watch?v=b3KeJ8DFjwQ",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
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
  return <div>Footer</div>;
};

export default Footer;
