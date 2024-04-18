import "../style/style.css";
import link from "react";   

const Hero = () => {
  return (
    <div className=" hero">
      <section className="text-gray-600 body-font">
        <div className="container flex flex-col items-center px-5 py-2 mx-auto md:flex-row">
          <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
            <h1 className="mb-4 text-3xl font-semibold text-orange-300 title-font sm:text-5xl ">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="flex flex-wrap mb-8 text-xl text-white">
              Services Hub delivers a wide range of services prioritizing
              customer satisfaction and safety. We directly employ staff,
              guaranteeing quality and personalized solutions to meet your needs
              effectively.
            </p>
            <div className="flex justify-center">
              <form>
              <div class="flex items-center flex-wrap">
  <select
    id="small"
    class="block w-32 h-10 p-2 mb-6 text-sm text-white border   bg-gray-900 bg-opacity-40 
     "
  >
    <option selected>Choose</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
  <input
    type="text"
    id="search"
    class="block flex-1 h-10 p-2 mb-6  text-sm text-white    bg-gray-900 bg-opacity-40 "
    placeholder="Search"
  />
  <button
    type="button"
    class="h-10 px-4 mb-6 text-sm text-white bg-orange-300 ml-2"
    onclick="handleSearch()"
  >
    Search
  </button>


</div>

              </form>

              {/* <button className="inline-flex px-6 py-2 text-lg text-white bg-orange-500 border-0 rounded-3xl ">
          Button
        </button>
        <button className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200">
          Button
        </button> */}
            </div>
          </div>
          <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
