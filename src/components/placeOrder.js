import React from "react";
import { useLocation } from "react-router-dom";
import numberPic from "../Assets/number.png"; // Import your assets
import {
  applianceRepair,
  carpenterServices,
  cctvServices,
  cleaningServices,
  electricalServices,
  pestControl,
  plumbingServices,
} from "../Data/singleServiceData"; // Importing all services data

// Component for the booking form
const BookingForm = () => {
  return (
    <form className="max-w-sm p-6 bg-[#EEF4ED] rounded-lg mx-auto mt-8">
      <h1 className="mb-2 text-3xl font-bold text-center text-black">
        Please Fill The Form Below
      </h1>
      <div className="mb-2">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className="w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-[#FF6B35] focus:border-[#FF6B35] sm:text-sm bg-[#EEF4ED] placeholder-black"
        />
      </div>
      <div className="mb-2">
        <input
          type="tel"
          id="phone-number"
          name="phone-number"
          placeholder="03111111111"
          className="w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-[#FF6B35] focus:border-[#FF6B35] sm:text-sm bg-[#EEF4ED] placeholder-black"
        />
      </div>
      <div className="mb-2">
        <select
          id="city"
          name="city"
          className="w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-[#FF6B35] focus:border-[#FF6B35] sm:text-sm bg-[#EEF4ED]"
        >
          <option value="karachi">Karachi</option>
          <option value="lahore">Lahore</option>
        </select>
      </div>
      <div className="mb-2">
        <textarea
          id="address"
          name="address"
          placeholder="Address"
          className="w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-[#FF6B35] focus:border-[#FF6B35] sm:text-sm bg-[#EEF4ED] placeholder-black"
        ></textarea>
      </div>
      <div className="flex justify-end gap-2">
        <button className="w-full px-4 py-2 text-white bg-[#FF6B35] rounded-lg text-md font-semibold">
          Submit
        </button>
      </div>
    </form>
  );
};

// Component for displaying a specific service
const PlaceOrderComponent = ({ service }) => (
  <section className="my-12 text-black body-font">
    <div className="container flex flex-col px-5 mx-auto md:flex-row">
      <div className="flex flex-col lg:flex-grow lg:w-1/2 lg:pr-24 md:pr-16 md:text-left md:mb-0">
        <h1 className="mb-2 text-3xl font-bold text-center text-black md:text-start">
          {service.title}
        </h1>
        <p className="mt-2 text-lg">{service.discreption}</p>
        <img
          src={Object.values(service.img)[0]} // Fetch the correct image
          alt={service.title}
          className="rounded-lg h-96"
        />
      </div>
      <div>
        <BookingForm />
        <h2 className="mt-10 text-xl font-bold text-center">
          Please explain your problem (optional)
        </h2>
        <textarea className="p-2 border-gray-300 shadow-sm focus:ring-[#FF6B35] focus:border-[#FF6B35] sm:text-sm bg-[#EEF4ED] placeholder-black sm:w-80 md:mx-20 h-28 mt-2 w-64 mx-10 sm:mx-32"></textarea>
        <h2 className="p-5 text-4xl font-bold text-center">OR</h2>
        <div className="flex justify-center m-4 mx-auto">
          <img src={numberPic} alt="Phone Number" />
        </div>
      </div>
    </div>
  </section>
);

// Main component for rendering based on URL
const PlaceOrder = () => {
  const location = useLocation(); // Get the current URL location
  const route = location.pathname.split("/")[2]; // Extract the route segment

  // Combine all services into one array for easier searching
  const allServices = [
    ...cleaningServices,
    ...applianceRepair,
    ...electricalServices,
    ...cctvServices,
    ...plumbingServices,
    ...pestControl,
    ...carpenterServices,
  ];

  // Find the correct service based on the URL
  const service = allServices.find((s) => s.url === `service/${route}`);

  if (!service) {
    return <div>Service not found</div>; // Fallback if no service matches
  }

  return (
    <div>
      <div className="bg-[#EEF4ED]">
        <div className="mx-5 text-black md:mx-20 md:text-center">
          <h1 className="text-3xl font-bold py-7">{service.title}</h1>
          <p className="pb-10 text-lg">
            Services Hub offers top-notch repair and maintenance services for
            all your home and business needs. From plumbing and pest control to
            CCTV installation and general repairs, our team of skilled in-house
            professionals is ready to address any problem with speed and
            efficiency.
          </p>
        </div>
      </div>
      <PlaceOrderComponent service={service} />
    </div>
  );
};

export default PlaceOrder;
