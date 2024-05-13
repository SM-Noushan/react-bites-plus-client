import React from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Spinner from "../../components/shared/Spinner";

const catchError = (error) => {
  const errorCode = error.code;
  if (errorCode == "auth/email-already-in-use")
    return toast.error("Account already exists.");
  return toast.error("Unexpected error, please try again.");
};

const errorSign = (
  <div className="absolute inset-y-3 end-0 pointer-events-none pe-3">
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
  const {
    user,
    loading: authLoading,
    setLoading: setAuthLoading,
    createUser,
    updateProfileInfo,
  } = useAuth();
  const [passwordShown, setPasswordShown] = React.useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const handleOnSubmit = (data) => {
    const { name, email, photoURL, password } = data;
    createUser(email, password)
      .then(() => {
        toast.success("Registered successfully.");
        updateProfileInfo(name, photoURL)
          .then(() => {
            setAuthLoading(false);
            navigate("/");
          })
          .catch(() => {
            setAuthLoading(false);
            // toast.warn("Failed to create profile, please try later.");
          });
      })
      .catch((error) => {
        setAuthLoading(false);
        catchError(error);
      });
  };
  if (authLoading) return <Spinner />;
  if (user) return <Navigate to="/" />;
  return (
    <section className="flex flex-wrap md:justify-start md:flex-nowrap py-7 relative max-w-7xl w-full px-4 md:px-6 lg:px-8 mx-auto font-open-sans">
      <Helmet>
        <title>Bites+ | Signup</title>
      </Helmet>
      <div className="my-7 bg-white border border-gray-200 rounded-xl shadow-sm max-w-xl mx-auto w-full">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 font-playfair-display">
              Sign up
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Already have an account yet? &nbsp;
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
            <form onSubmit={handleSubmit(handleOnSubmit)}>
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
                      {...register("name", {
                        required: true,
                        pattern:
                          /(^[a-zA-Z]{2,20}[a-zA-Z\s]{0,20}[a-zA-Z]{0,20}$)/,
                      })}
                    />
                    {errors?.name && errorSign}
                  </div>
                  {errors?.name && (
                    <p className="text-xs text-red-600 mt-2" id="name-error">
                      Please enter a valid name
                    </p>
                  )}
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
                      {...register("email", {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                      })}
                    />
                    {errors?.email && errorSign}
                  </div>
                  {errors?.email && (
                    <p className="text-xs text-red-600 mt-2" id="email-error">
                      Required | Enter a valid email
                    </p>
                  )}
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
                      placeholder="Enter photo url"
                      className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
                      required
                      aria-describedby="photoURL-error"
                      {...register("photoURL", {
                        required: true,
                        pattern:
                          /^(http|https):\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}(\/[a-zA-Z0-9.\-=&?%_+,]*)*$/i,
                      })}
                    />
                    {errors?.photoURL && errorSign}
                  </div>
                  {errors?.photoURL && (
                    <p
                      className="text-xs text-red-600 mt-2"
                      id="photoURL-error"
                    >
                      Please include a valid email address so we can get back to
                      you
                    </p>
                  )}
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
                      type={passwordShown ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
                      required
                      aria-describedby="password-error"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Required",
                        },
                        minLength: {
                          value: 6,
                          message: "Minimum password length is 6",
                        },
                        maxLength: {
                          value: 20,
                          message: "Maximum password length is 20",
                        },
                        pattern: {
                          value: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
                          message:
                            "Requires at least one lowercase and uppercase",
                        },
                      })}
                    />
                    <button
                      onClick={togglePasswordVisiblity}
                      className={
                        errors?.password
                          ? "absolute right-10 top-3"
                          : "absolute right-3 top-3"
                      }
                      type="button"
                    >
                      {passwordShown ? (
                        <FaRegEye className="h-5 w-5" />
                      ) : (
                        <FaRegEyeSlash className="h-5 w-5" />
                      )}
                    </button>
                    {errors?.password && errorSign}
                  </div>
                  {errors?.password?.message && (
                    <p
                      className="text-xs text-red-600 mt-2"
                      id="password-error"
                    >
                      {errors?.password?.message}
                    </p>
                  )}
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
