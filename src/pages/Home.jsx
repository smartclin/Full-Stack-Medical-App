import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";

const Home = () => {
  return (
    <>
      {/*=== Hero Section ===*/}
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* === hero content === */}
            <div>
              <div className="lg:w-[570px]">
                <h1
                  className="text-[36px] leading-[46px] 
                   text-headingColor font-[800] 
                     md:text-[50px] md:leading-[70px] max-sm:text-[40px] max-sm:text-center
                     max-sm:pb-10"
                >
                  We help patients live a healthy, longer life.
                </h1>

                <p className="text-para max-sm:text-[15px] max-sm:text-center  ">
                  Lorem ipsum dolor sit amet consectetur <br />
                  adipisicing elit. Aut iste accusamus qui <br />
                  necessitatibus id similique quod quaerat <br />
                  expedita facilis beatae eum ex impedit,
                  <br /> eius molestiae rem.
                </p>

                <button
                  className="btn w-[350px] px-2 py-2 flex justify-center 
                  items-center max-sm:w-[290px] max-sm:py-2 max-sm:m-auto
                  max-sm:mt-5"
                >
                  Request an Appoinment
                </button>
              </div>

              {/*=== hero counter ===*/}
              <div
                className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]
               text-center justify-center items-center "
              >
                <div>
                  <h2
                    className="text-[36px] leading-[56px] 
                          lg:text-[44px] lg:heading-[54px] font-[700] text-headingColor"
                  >
                    30+
                  </h2>
                  <span className="w-[150px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Years of Experience</p>
                </div>

                <div>
                  <h2
                    className="text-[36px] leading-[56px] 
                          lg:text-[44px] lg:heading-[54px] font-[700] text-headingColor"
                  >
                    15+
                  </h2>
                  <span className="w-[150px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Clinic Location</p>
                </div>

                <div>
                  <h2
                    className="text-[36px] leading-[56px] 
                          lg:text-[44px] lg:heading-[54px] font-[700] text-headingColor"
                  >
                    100%
                  </h2>
                  <span className="w-[150px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Patient Satisfaction</p>
                </div>
              </div>
            </div>
            {/*=== hero counter ===*/}

            <div className="flex gap-[30px] justify-end">
              <div>
                <img
                  className="w-full mt-[6vh]"
                  src={heroImg01}
                  alt="medicImg1"
                />
              </div>

              <div className="mt-[30px]">
                <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*=== Hero Section end ===*/}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services.
            </h2>
            <p className="text_para text-center">
              World-class care for everyone. Our health System offers
              unmatched,expert health care.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]"
          >
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="dibujo medica mesa" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  {" "}
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-400 mt-4 text-center">
                  World-class care for everyone. Our health System offers
                  unmatched, expert health care. From the lab to the clinic.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full
                  border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center
                  justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="dibujo medica mesa" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book appoinment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-400 mt-4 text-center">
                  World-class care for everyone. Our health System offers
                  unmatched, expert health care. From the lab to the clinic.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full
                 border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center
                 justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="dibujo medica mesa" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  {" "}
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-400 mt-4 text-center">
                  World-class care for everyone. Our health System offers
                  unmatched, expert health care. From the lab to the clinic.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full
                  border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center
                  justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*=== About Section start ===*/}
      <About />

      {/*=== Services Section ===*/}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our medical services</h2>
            <p className="text_para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>

          <ServiceList />
        </div>
      </section>
      {/*=== Services Section end ===*/}
    </>
  );
};

export default Home;
