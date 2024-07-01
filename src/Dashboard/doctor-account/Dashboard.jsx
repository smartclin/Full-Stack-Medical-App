import { useState } from 'react';
import { BASE_URL } from '../../../config';
import imgPerfil from '../../assets/images/about.png';
import starIcon from '../../assets/images/Star.png';
import useGetProfile from '../../hooks/useFetchData';
import DoctorAbout from './../../pages/Doctors/DoctorAbout';
import Appointments from './Appointments';
import Profile from './Profile';
import Tabs from './Tabs';

const Dashboard = () => {
  const { data } = useGetProfile(`${BASE_URL}/doctors/profile/me`);

  const [tab, setTab] = useState('overview');

  /* Comprobamos si los datos están cargados
  if (!data) {
    return <div>Loading...</div>;
  }*/

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
          <Tabs tab={tab} setTab={setTab} />
          <div className="lg:col-span-2">
            <div
              className="flex p-4 mb-4 text-yellow-800
              bg-yellow-50 rounded-lg"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9
                    9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                ></path>
              </svg>

              <span className="sr-only">Info</span>
              <div className="ml-3 text-sm font-medium">
                To get approval please complete your profile. We will review manually and approve within 3days.
              </div>
            </div>

            <div className="mt-8">
              {tab === 'overview' && (
                <div>
                  <div className="flex items-center gap-4 mb-10">
                    <figure className="max-w-[200px] max-h-[200px]">
                      <img src={imgPerfil} alt="" className="w-full" />
                    </figure>

                    <div className="mt-[-80px]">
                      <span
                        className="bg-[#CCF0F3] text-irisBlueColor py-1 px-4
                       lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-[16px]
                       lg:leading-6 font-semibold"
                      >
                        Surgeon
                      </span>

                      <h3
                        className="text-[22px] leading-9 font-bold 
                       text-headingColor mt-3"
                      >
                        Dr. Muhibur Rahman
                      </h3>

                      <div className="flex items-center gap-[6px]">
                        <span
                          className="flex items-center gap-[6px] text-headingColor
                         text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold"
                        >
                          <img src={starIcon} alt="" />
                          4.5
                        </span>
                        <span
                          className="text-textColor
                         text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold"
                        >
                          (125)
                        </span>
                      </div>
                    </div>
                  </div>
                  <DoctorAbout
                    name={data.name}
                    about={data.about}
                    qualifications={data.qualifications}
                    experiences={data.experiences}
                  />
                </div>
              )}
              {tab === 'settings' && <Profile doctorData={data} />}
              {tab === 'appointments' && <Appointments Appointments={data.appointments} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
