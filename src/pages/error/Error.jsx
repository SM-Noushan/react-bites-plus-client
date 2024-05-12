import { Link } from "react-router-dom";
import errorImage from "/assets/404.gif";

const Error = () => {
  return (
    <section className="max-w-[50rem] flex flex-col mx-auto size-full">
      {/* <!-- ========== HEADER ========== --> */}
      <header className="mb-auto flex justify-center z-50 w-full py-4">
        <nav className="px-4 sm:px-6 lg:px-8" aria-label="Global">
          <Link
            to="/"
            className="flex-none rounded-xl text-xl lg:text-3xl font-semibold focus:outline-none focus:opacity-80 flex items-center font-playfair-display"
            aria-label="BitePlus"
          >
            <svg
              className="size-8 lg:size-10"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 32 32"
            >
              <style type="text/css">
                {
                  "\n\t.st0{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n"
                }
              </style>
              <path d="M29,10c-0.6,0-1,0.4-1,1v1c0,6.6-5.4,12-12,12S4,18.6,4,12v-1c0-0.6-0.4-1-1-1s-1,0.4-1,1v1c0,7.7,6.3,14,14,14 s14-6.3,14-14v-1C30,10.4,29.6,10,29,10z" />
              <path d="M25,11H14.9c-0.5,0-0.9,0.3-1,0.8c-0.1,0.7-0.8,1.2-1.5,1.2s-1.3-0.5-1.5-1.2c-0.1-0.5-0.5-0.8-1-0.8H7c-0.6,0-1,0.4-1,1 c0,5.5,4.5,10,10,10s10-4.5,10-10C26,11.4,25.6,11,25,11z M17,18c0,0.6-0.4,1-1,1s-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1V18z  M21,17c0,0.6-0.4,1-1,1s-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1V17z" />
            </svg>
            <p>
              Bites<span className="text-lime-400">Plus</span>
            </p>
          </Link>
        </nav>
      </header>
      {/* <!-- ========== END HEADER ========== --> */}

      {/* <!-- ========== MAIN CONTENT ========== --> */}
      <main id="content">
        <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
          <img src={errorImage} alt="" className="w-full" />
          <p className="mt-3 text-gray-600 text-2xl font-semibold">
            Oops, something went wrong.
          </p>
          <p className="text-gray-600 text-lg font-medium">
            Sorry, we couldn&apos;t find your page.
          </p>
          <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <Link
              className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-lime-600 text-white hover:bg-lime-700 disabled:opacity-50 disabled:pointer-events-none"
              to="/"
            >
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
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      {/* <!-- ========== END MAIN CONTENT ========== --> */}

      {/* <!-- ========== FOOTER ========== --> */}
      <footer className="mt-auto text-center py-5">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500">© All Rights Reserved. 2024.</p>
        </div>
      </footer>
      {/* <!-- ========== END FOOTER ========== --> */}
    </section>
  );
};

export default Error;
