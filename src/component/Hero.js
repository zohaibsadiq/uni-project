import "../style/style.css";

const Hero = () => {
  return (
    <div className=" hero">
      <section className="">
        <div className="container flex flex-col items-center px-5 py-2 mx-auto md:flex-row">
          <div className="flex flex-col items-center flex-1 mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
            <h1 className="mb-4 text-4xl font-semibold text-[#FF6B35] title-font sm:text-5xl ">
              Skilled Professional At
              <br className="hidden lg:inline-block" />
              <h1 className="text-[#EEF4ED]">Your Doorstep.</h1>
            </h1>
            <p className="flex flex-wrap mb-8 text-xl text-[#EEF4ED]">
              Services Hub delivers a wide range of services prioritizing
              customer satisfaction and safety. We directly employ staff,
              guaranteeing quality and personalized solutions to meet your needs
              effectively.
            </p>
            <div className="flex justify-center">
              <foam className="flex flex-wrap items-center shadow-2xl">
                <select
                  id="small"
                  className="block w-32 h-10 p-2 mb-6 mr-2 text-sm text-[#EEF4ED] bg-gray-900 border bg-opacity-40  focus:ring-orange-500 focus:border-orange-500 "
                >
                  <option selected>Karachi</option>
                  <option value="US">Lahore</option>
                </select>
                <div className="flex">
                  <input
                    type="text"
                    id="search"
                    className="flex-1 block w-64 h-10 p-2 mb-6 text-sm text-[#EEF4ED] bg-gray-900 bg-opacity-40  focus:ring-orange-500 focus:border-orange-500 "
                    placeholder="Search"
                  />
                  <button
                    type="button"
                    className="h-10 px-4 mb-6 ml-2 text-sm text-[#EEF4ED] bg-[#FF6B35] rounded-lg "
                    onclick="handleSearch()"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </button>
                </div>
              </foam>
            </div>
          </div>

          {/* Rigth side */}
          <div className="flex-1 max-w-md p-3 ">
            <form className="max-w-xs p-6 bg-black rounded-lg bg-opacity-70">
              <h1 className="mb-2 text-3xl font-bold text-center text-white">
                Book Your Service
              </h1>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  id="phone-number"
                  name="phone-number"
                  placeholder="Phone Number"
                  className="w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <select
                  id="city"
                  name="city"
                  className="w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                >
                  <option value="karachi" className="hover:bg-orange-700">
                    Karachi
                  </option>
                  <option value="lahore">Lahore</option>
                </select>
              </div>
              <div className="mb-4 ">
                <select
                  id="service"
                  name="service"
                  className="w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm "
                  placeholder="Service"
                >
                  <option value="Ac Repair" disabled selected hidden>
                    Service
                  </option>
                  <option value="Bathing">Bathing</option>
                  <option value="Bathing">Gardening</option>
                  <option value="Bathing">Ac repair</option>
                  <option value="Bathing">Solor fitting</option>
                </select>
              </div>
              <div className="mb-4">
                <textarea
                  id="address"
                  name="address"
                  placeholder="Address"
                  className="w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-white bg-orange-600 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
