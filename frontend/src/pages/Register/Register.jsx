import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";

const Register = () => {
    return (
        <MainLayout>
            <section className="min-h-screen flex items-center py-12 bg-gray-50">

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left Side */}
                        <div className="hidden lg:block">

                            <span className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold">
                                Join Optical House
                            </span>

                            <h1 className="mt-6 text-5xl font-bold leading-tight">
                                Create Your Account
                            </h1>

                            <p className="mt-6 text-lg text-gray-600">
                                Access premium eyewear collections,
                                manage prescriptions, book eye tests,
                                track orders and enjoy a seamless shopping experience.
                            </p>

                            <div className="mt-10 space-y-4">

                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                                    <span>Manage Prescriptions</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                                    <span>Track Orders Easily</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                                    <span>Book Eye Tests Online</span>
                                </div>

                            </div>

                        </div>

                        {/* Register Card */}
                        <div>

                            <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10">

                                <div className="text-center">

                                    <h2 className="text-3xl font-bold">
                                        Register
                                    </h2>

                                    <p className="text-gray-500 mt-2">
                                        Create your Optical House account
                                    </p>

                                </div>

                                <form className="mt-8 space-y-5">

                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Full Name
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Enter your full name"
                                            className="
                      w-full
                      border
                      border-gray-300
                      rounded-xl
                      px-4
                      py-3
                      focus:outline-none
                      focus:ring-2
                      focus:ring-yellow-500
                      "
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="
                      w-full
                      border
                      border-gray-300
                      rounded-xl
                      px-4
                      py-3
                      focus:outline-none
                      focus:ring-2
                      focus:ring-yellow-500
                      "
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Phone Number
                                        </label>

                                        <input
                                            type="tel"
                                            placeholder="Enter phone number"
                                            className="
                      w-full
                      border
                      border-gray-300
                      rounded-xl
                      px-4
                      py-3
                      focus:outline-none
                      focus:ring-2
                      focus:ring-yellow-500
                      "
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Password
                                        </label>

                                        <input
                                            type="password"
                                            placeholder="Create password"
                                            className="
                      w-full
                      border
                      border-gray-300
                      rounded-xl
                      px-4
                      py-3
                      focus:outline-none
                      focus:ring-2
                      focus:ring-yellow-500
                      "
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Confirm Password
                                        </label>

                                        <input
                                            type="password"
                                            placeholder="Confirm password"
                                            className="
                      w-full
                      border
                      border-gray-300
                      rounded-xl
                      px-4
                      py-3
                      focus:outline-none
                      focus:ring-2
                      focus:ring-yellow-500
                      "
                                        />
                                    </div>

                                    <div className="flex items-start gap-3">

                                        <input
                                            type="checkbox"
                                            className="mt-1"
                                        />

                                        <p className="text-sm text-gray-600">
                                            I agree to the Terms &
                                            Conditions and Privacy Policy
                                        </p>

                                    </div>

                                    <button
                                        type="submit"
                                        className="
                    w-full
                    bg-black
                    text-white
                    py-4
                    rounded-xl
                    font-semibold
                    hover:opacity-90
                    transition
                    "
                                    >
                                        Create Account
                                    </button>

                                </form>

                                <p className="text-center mt-6 text-gray-600">

                                    Already have an account?

                                    <Link
                                        to="/login"
                                        className="
                    ml-2
                    text-yellow-600
                    font-semibold
                    "
                                    >
                                        Login
                                    </Link>

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </MainLayout>
    );
};

export default Register;