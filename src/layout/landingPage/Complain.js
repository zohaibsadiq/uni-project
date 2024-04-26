import Link from "react-router-dom";

const Complaint = () => {
  return (
    <section className="text-gray-600 body-font bg-[#EEF4ED] ">
      <div className="container flex flex-wrap items-center px-5 py-8 mx-auto">
        <div className="pb-10 mb-10 border-b border-gray-200 md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 md:mb-0">
          <h1 className="mb-2 text-3xl font-medium text-center text-black sm:text-5xl title-font">
          Resolving your complaints!
          </h1>
          <p className="mt-5 leading-relaxed text-center text-black text-md">
          Your feedback helps us understand where we can improve and ultimately provides a better experience for you and others. Please leave your complaint below, including as much detail as possible. Your input is valuable, and we appreciate you taking the time to share your thoughts with us.
          </p>
         
        </div>
        <div className="flex flex-col md:w-1/2 md:pl-12 w-[100%] mx-auto">
          <div className="w-[100%] sm:max-w-sm md:max-w-md  p-6 mx-auto mt-10 bg-white rounded-lg shadow-md ">
            <form >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-black"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border rounded-md focus:ring-[#FF6B35] focus:border-[#FF6B35] sm:text-sm bg-[#EEF4ED] placeholder-black"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-black"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border rounded-md focus:ring-[#FF6B35] focus:border-[#FF6B35] sm:text-sm bg-[#EEF4ED] placeholder-black"
                  placeholder="Your phone number"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-2 border rounded-md focus:ring-[#FF6B35] focus:border-[#FF6B35] sm:text-sm bg-[#EEF4ED] placeholder-black"
                  placeholder="Your message"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 text-white  rounded-md focus:ring-[#FF6B35] focus:border-[#FF6B35] text-md  placeholder-black bg-[#FF6B35]"
              >
                Submit 
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Complaint;
