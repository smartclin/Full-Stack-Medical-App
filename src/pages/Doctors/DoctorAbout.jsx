import PropTypes from 'prop-types';
import { formateDate } from '../../utils/formateDate';
/* eslint-disable no-unused-vars */
const DoctorAbout = ({ name, abou, experiences }) => {
  return (
    <div>
      <div>
        <h3
          className="text-[20px] leading-[30px] text-headingColor 
             font-semibold flex items-center gap-2"
        >
          About of
          <span
            className="text-irisBlueColor font-bold text-[24px]
                 leading-9"
          >
            Muhibur Rahman
          </span>
        </h3>
        <p className="text_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sequi sunt deserunt, quos incidunt facilis
          quasi molestias eligendi delectus accusantium nam dolores dolore, tempora dolor? Minus blanditiis consequatur
          amet ut.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Education</h3>

        <ul className="pt-4">
          <li
            className="flex flex-col sm:flex-row sm:justify-between
                sm:items-end md:gap-5 mb-[30px]"
          >
            <div>
              <span
                className="text-irisBlueColor text-[15px]
                        leading-6 font-semibold"
              >
                {formateDate('9-03-2014')} - {formateDate('2-15-2016')}
              </span>
              <p className="text-[15px] leading-6 font-medium text-textColor">PHD in Surgeon</p>
              <p className="text-[14px] leading-6 font-bold text-textColor">New Apollo Hospital, New York.</p>
            </div>
          </li>

          <li
            className="flex flex-col sm:flex-row sm:justify-between
                sm:items-end md:gap-5 mb-[30px]"
          >
            <div>
              <span
                className="text-irisBlueColor text-[15px]
                        leading-6 font-semibold"
              >
                {formateDate('5-02-2010')} - {formateDate('9-13-2014')}
              </span>
              <p className="text-[15px] leading-6 font-medium text-textColor">PHD in Surgeon</p>
              <p className="text-[14px] leading-6 font-bold text-textColor">New Apollo Hospital, New York.</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Experience</h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 ">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formateDate('9-03-2014')} - {formateDate('2-15-2016')}
            </span>
            <p className="text-[15px] leading-6 font-medium text-textColor">Sr. Surgeon</p>

            <p className="text-[14px] leading-6 font-bold text-textColor">New Apollo Hospital, New York.</p>
          </li>

          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formateDate('9-03-2014')} - {formateDate('2-15-2016')}
            </span>
            <p className="text-[15px] leading-6 font-medium text-textColor">Sr. Surgeon</p>

            <p className="text-[14px] leading-6 font-bold text-textColor">New Apollo Hospital, New York.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

DoctorAbout.propTypes = {
  name: PropTypes.string.isRequired,
  abou: PropTypes.string.isRequired,
  experiences: PropTypes.array.isRequired,
};

export default DoctorAbout;
