import { Link } from "react-router-dom";

const slide = (highlight, label, desc) => {
  return (
    <div className="hs-carousel-slide">
      <div className="flex flex-col justify-center h-full px-6">
        {/* <!-- Title --> */}
        <div className="mt- max-w-2xl">
          <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
            <span className="text-lime-600">{highlight}</span> {label}
          </h1>
        </div>
        {/* <!-- End Title --> */}
        <div className="mt-5 max-w-3xl">
          <p className="text-lg text-gray-600">{desc}</p>
        </div>
        {/* <!-- Buttons --> */}
        <div className="mt-8 gap-3">
          <Link
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-lime-600 text-white hover:bg-lime-700 disabled:opacity-50 disabled:pointer-events-none"
            to="/foods"
          >
            Browse Foods
            <svg
              className="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>
        {/* <!-- End Buttons --> */}
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <section>
      {/* <!-- Hero --> */}
      <div className="relative overflow-hidden">
        {/* <!-- Slider --> */}
        <div
          data-hs-carousel='{"loadingClasses": "opacity-0","isAutoPlay": true, "speed":  1500}'
          className="relative"
        >
          {/* <!-- Gradients --> */}
          <div
            aria-hidden="true"
            className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
          >
            <div className="bg-gradient-to-r from-emerald-300/50 to-lime-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]"></div>
            <div className="bg-gradient-to-tl from-lime-50 via-green-100 to-emerald-50  blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem]"></div>
          </div>
          {/* <!-- End Gradients --> */}

          <div className="relative z-10">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
              <div className="max-w-2xl text-center mx-auto">
                <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent">
                  BitesPlus: A vision for 2024
                </p>
                <div className="hs-carousel relative overflow-hidden w-full min-h-96  rounded-lg">
                  <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                    {slide(
                      "Feed",
                      "More, Waste Less",
                      "Join us to share surplus food and reduce waste while ensuring no one goes hungry. Together, let's make a sustainable impact!"
                    )}
                    {slide(
                      "Connect",
                      ", Share, Thrive",
                      "Transform your excess food into meaningful connections and positive change with BitesPlus. Share, connect, and thrive"
                    )}
                    {slide(
                      "Excess",
                      "to Access",
                      "We are your bridge from food surplus to those in need. Join us in transforming excess into access for all!"
                    )}
                    {slide(
                      "Nourish",
                      "Communities Together",
                      "Every shared meal nourishes communities and fosters solidarity. Join our platform to share the goodness!"
                    )}
                    {slide(
                      "Fight",
                      "Against Food Waste",
                      "Take a stand against food waste and make a difference with BitesPlus. Join us in the fight for a more sustainable future!"
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-s-lg"
                >
                  <span className="text-2xl" aria-hidden="true">
                    <svg
                      className="flex-shrink-0 size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                  </span>
                  <span className="sr-only">Previous</span>
                </button>
                <button
                  type="button"
                  className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-e-lg"
                >
                  <span className="sr-only">Next</span>
                  <span className="text-2xl" aria-hidden="true">
                    <svg
                      className="flex-shrink-0 size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Slider --> */}
      </div>
      {/* <!-- End Hero --> */}
    </section>
  );
};

export default Banner;
