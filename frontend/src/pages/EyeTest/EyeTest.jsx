import MainLayout from "../../layouts/MainLayout";

const EyeTest = () => {
    return (
        <MainLayout>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-black to-gray-800 text-white py-20">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="max-w-3xl">
                        <span className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold">
                            Professional Eye Care
                        </span>

                        <h1 className="text-4xl md:text-6xl font-bold mt-6">
                            Book Your Eye Test
                        </h1>

                        <p className="mt-6 text-lg text-gray-300">
                            Get your eyes checked by experienced optometrists.
                            Accurate prescription, advanced equipment and
                            expert consultation.
                        </p>
                    </div>

                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-gray-50">

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div className="bg-white p-8 rounded-3xl shadow-md">
                            <h3 className="text-xl font-bold">
                                Advanced Equipment
                            </h3>

                            <p className="mt-4 text-gray-600">
                                Latest eye testing technology for precise diagnosis.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-md">
                            <h3 className="text-xl font-bold">
                                Expert Optometrists
                            </h3>

                            <p className="mt-4 text-gray-600">
                                Experienced professionals for accurate prescriptions.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-md">
                            <h3 className="text-xl font-bold">
                                Quick Appointment
                            </h3>

                            <p className="mt-4 text-gray-600">
                                Easy online booking with flexible time slots.
                            </p>
                        </div>

                    </div>

                </div>

            </section>

            {/* Booking Form */}
            <section className="py-20">

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left Content */}
                        <div>

                            <h2 className="text-4xl font-bold">
                                Schedule Your Appointment
                            </h2>

                            <p className="mt-6 text-gray-600 text-lg">
                                Choose your preferred date and time.
                                Our team will confirm your appointment shortly.
                            </p>

                            <div className="mt-10 space-y-5">

                                <div className="flex gap-4">
                                    <div className="w-4 h-4 rounded-full bg-green-500 mt-1"></div>
                                    <p>Free Eye Checkup with Frame Purchase</p>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-4 h-4 rounded-full bg-green-500 mt-1"></div>
                                    <p>Digital Prescription Report</p>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-4 h-4 rounded-full bg-green-500 mt-1"></div>
                                    <p>Contact Lens Consultation Available</p>
                                </div>

                            </div>

                        </div>

                        {/* Form */}
                        <div>

                            <div className="bg-white shadow-xl rounded-3xl p-6 md:p-10">

                                <h3 className="text-2xl font-bold mb-8">
                                    Book Appointment
                                </h3>

                                <form className="space-y-5">

                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full border p-4 rounded-xl"
                                    />

                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full border p-4 rounded-xl"
                                    />

                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full border p-4 rounded-xl"
                                    />

                                    <select
                                        className="w-full border p-4 rounded-xl"
                                    >
                                        <option>Select Branch</option>
                                        <option>Main Branch</option>
                                        <option>Hyderabad Branch</option>
                                        <option>Mumbai Branch</option>
                                    </select>

                                    <input
                                        type="date"
                                        className="w-full border p-4 rounded-xl"
                                    />

                                    <select
                                        className="w-full border p-4 rounded-xl"
                                    >
                                        <option>Select Time Slot</option>
                                        <option>10:00 AM</option>
                                        <option>11:00 AM</option>
                                        <option>12:00 PM</option>
                                        <option>02:00 PM</option>
                                        <option>03:00 PM</option>
                                        <option>04:00 PM</option>
                                    </select>

                                    <textarea
                                        rows="4"
                                        placeholder="Additional Notes"
                                        className="w-full border p-4 rounded-xl"
                                    />

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
                                        Book Eye Test
                                    </button>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </MainLayout>
    );
};

export default EyeTest;