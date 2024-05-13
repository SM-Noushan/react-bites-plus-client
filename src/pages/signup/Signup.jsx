import React from "react";
import { Link } from "react-router-dom";

const errorSign = (
  <div className="absolute inset-y-2.5 end-0 pointer-events-none pe-3">
    <svg
      className="size-5 text-red-500"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
    </svg>
  </div>
);

const Signup = () => {
  return (
    <section className="flex flex-wrap md:justify-start md:flex-nowrap py-7 relative max-w-7xl w-full px-4 md:px-6 lg:px-8 mx-auto font-open-sans">
      <div className="my-7 bg-white border border-gray-200 rounded-xl shadow-sm max-w-xl mx-auto w-full">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 font-playfair-display">
              Sign up
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Already have an account yet?
              <Link
                className="text-blue-600 decoration-2 hover:underline font-medium"
                to="/signin"
              >
                Sign in here
              </Link>
            </p>
          </div>

          <div className="mt-5">
            {/* <!-- Form --> */}
            <form>
              <div className="grid gap-y-4">
                {/* <!-- Form Group --> */}
                <div>
                  <label htmlFor="name" className="block text-sm mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
                      required
                      aria-describedby="name-error"
                    />
                    {errorSign}
                  </div>
                  <p className="text-xs text-red-600 mt-2" id="name-error">
                    Please enter a valid name
                  </p>
                </div>
                {/* <!-- End Form Group --> */}

                {/* <!-- Form Group --> */}
                <div>
                  <label htmlFor="email" className="block text-sm mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
                      required
                      aria-describedby="email-error"
                    />
                    {errorSign}
                  </div>
                  <p className="text-xs text-red-600 mt-2" id="email-error">
                    Please include a valid email address so we can get back to
                    you
                  </p>
                </div>
                {/* <!-- End Form Group --> */}

                {/* <!-- Form Group --> */}
                <div>
                  <div className="flex justify-between items-center">
                    <label htmlFor="password" className="block text-sm mb-2">
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
                      required
                      aria-describedby="password-error"
                    />
                    {errorSign}
                  </div>
                  <p className="text-xs text-red-600 mt-2" id="password-error">
                    8+ characters required
                  </p>
                </div>
                {/* <!-- End Form Group --> */}

                {/* <!-- Form Group --> */}
                <div>
                  <label htmlFor="photoURL" className="block text-sm mb-2">
                    PhotoURL
                  </label>
                  <div className="relative">
                    <input
                      type="url"
                      id="photoURL"
                      name="photoURL"
                      className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
                      required
                      aria-describedby="photoURL-error"
                    />
                    {errorSign}
                  </div>
                  <p
                    className="text-xs text-red-600 mt-2"
                    id="photoURL-error"
                  >
                    Please include a valid email address so we can get back to
                    you
                  </p>
                </div>
                {/* <!-- End Form Group --> */}

                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-lime-600 text-white hover:bg-lime-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Sign up
                </button>
              </div>
            </form>
            {/* <!-- End Form --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
