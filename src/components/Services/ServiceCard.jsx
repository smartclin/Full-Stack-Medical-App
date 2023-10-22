import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import PropTypes from "prop-types";

const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;
  return (
    <div
      className="py-[30px] px-3 lg:px-5 card  
    rounded-md shadow-md w-auto "
    >
      <span
        className="w-[44px] h-[44px] flex backdrop-blur-md
      items-center justify-center text-[18px] 
      font-[600] max-sm:m-auto "
        style={{
          background: `${bgColor}`,
          color: `${textColor}`,
          borderRadius: "6px 0 0 6px",
          marginBottom: "2vh",
        }}
      >
        {index + 1}
      </span>

      <h2
        className="text-[26px] leading-9 
    text-headingColor font-[700] max-sm:text-center"
      >
        {name}
      </h2>
      <p
        className="text-[16px] leading-7 font-[400]
     text-textColor mt-4  max-sm:text-center"
      >
        {desc}
      </p>

      <div
        className="flex sm:items-center justify-between
     mt-[0px] lg:ml-[-24.1vw]"
      >
        <Link
          to="/doctors"
          className="w-[44px] h-[44px] rounded-full
             border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center
             justify-center group hover:bg-primaryColor hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5 flex " />
        </Link>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ServiceCard;
