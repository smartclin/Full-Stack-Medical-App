//import { BASE_URL } from "../../../config";
//import DoctorCard from "../../components/Doctors/DoctorCard";
//import useFetchData from "../../hooks/useFetchData";

const MyBookings = () => {
  /* const { data: appointments, loading, error } = useFetchData(
    `${BASE_URL}/users/appointments/my-appointments`
  );*/

  return (
    <div>
      {/* {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {appointments.map((doctor) => (
            <DoctorCard doctor={doctor} key={doctor._id} />
          ))}
        </div>
          )} */}

      <h2 className="mt-5 text-[20px] font-semibold text-primaryColor">You did not book any doctor yet!</h2>

      {/*
      {error && (
        <div className="mt-5 text-center leading-7 text-[20px] font-semibold text-red-500">
          Error fetching data. Please try again later.
        </div>
      )}*/}
    </div>
  );
};

export default MyBookings;
