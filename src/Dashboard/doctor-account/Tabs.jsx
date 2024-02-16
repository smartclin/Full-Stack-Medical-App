/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { BiMenu } from "react-icons/bi";
import { useContext, useState } from "react";
import { authContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Tabs = ({ tab, setTab }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    setTab(buttonName);
  };

  const getButtonClass = (buttonName) => {
    return selectedButton === buttonName
      ? "bg-indigo-500 text-white"
      : "bg-indigo-100 text-primaryColor";
  };

  const {dispatch} = useContext(authContext);
  let navigate = useNavigate();

  const handleLogout = ()=> {
    dispatch({type: "LOGOUT"});
    navigate("/");
  }

  return (
    <div>
      <span className="lg:hidden">
        <BiMenu className="w-6 h-6 cursor-pointer" />
      </span>
      <div
        className="hidden lg:flex flex-col p-[30px]
       shadow-panelShadow items-center h-max rounded-md gap-3"
      >
        <button
          onClick={() => handleButtonClick("overview")}
          className={`${getButtonClass("overview")} w-full btn mt-0 rounded-md`}
        >
          Overview
        </button>
        <button
          onClick={() => handleButtonClick("appointments")}
          className={`${getButtonClass(
            "appointments"
          )} w-full btn mt-0 rounded-md`}
        >
          Appointments
        </button>
        <button
          onClick={() => handleButtonClick("settings")}
          className={`${getButtonClass("settings")} w-full btn mt-0 rounded-md`}
        >
          Settings
        </button>

        <div className="mt-[20px] w-full">
          <button
            onClick={handleLogout}
            className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md
                        text-white"
          >
            Logout
          </button>
          <button className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">
            Delete account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;

