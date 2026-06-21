import MainLayout from "../../layouts/MainLayout";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaWhatsapp,
    FaClock,
} from "react-icons/fa";

const Contact = () => {
    return (
        <MainLayout>

            {/* Hero */}
            <section className="bg-black text-white py-20">

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">

                    <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold">
                        Contact Optical House
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold mt-6">
                        We're Here To Help
                    </h1>

                    <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-lg">
                        Need assistance with eyewear, prescription lenses,
                        contact lenses or eye test appointments?
                        Our team is ready to help.
                    </p>

                </div>

            </section>

            {/* Contact Info + Form */}
            <section className="py-20">

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Left */}
                        <div>

                            <h2 className="text-4xl font-bold">
                                Get In Touch
                            </h2>

                            <p className="mt-5 text-gray-600">
                                Contact our experts for product recommendations,
                                eye test bookings and prescription assistance.
                            </p>

                            <div className="mt-10 space-y-6">

                                <div className="flex items-start gap-4">

                                    <FaPhoneAlt
                                        className="text-yellow-500 mt-1"
                                        size={20}
                                    />

                                    <div>
                                        <h4 className="font-semibold">
                                            Phone
                                        </h4>

                                        <p className="text-gray-600">
                                            +91 98765 43210
                                        </p>
                                    </div>

                                </div>

                                <div className="flex items-start gap-4">

                                    <FaEnvelope
                                        className="text-yellow-500 mt-1"
                                        size={20}
                                    />

                                    <div>
                                        <h4 className="font-semibold">
                                            Email
                                        </h4>

                                        <p className="text-gray-600">
                                            support@opticalhouse.com
                                        </p>
                                    </div>

                                </div>

                                <div className="flex items-start gap-4">

                                    <FaMapMarkerAlt
                                        className="text-yellow-500 mt-1"
                                        size={20}
                                    />

                                    <div>
                                        <h4 className="font-semibold">
                                            Address
                                        </h4>

                                        <p className="text-gray-600">
                                            Vijayawada, Andhra Pradesh,
                                            India
                                        </p>
                                    </div>

                                </div>

                                <div className="flex items-start gap-4">

                                    <FaClock
                                        className="text-yellow-500 mt-1"
                                        size={20}
                                    />

                                    <div>
                                        <h4 className="font-semibold">
                                            Business Hours
                                        </h4>

                                        <p className="text-gray-600">
                                            Mon - Sat : 9 AM - 9 PM
                                        </p>
                                    </div>

                                </div>

                            </div>

                            {/* WhatsApp */}
                            <button
                                className="
                mt-10
                bg-green-500
                text-white
                px-8
                py-4
                rounded-full
                flex
                items-center
                gap-3
                font-semibold
                "
                            >
                                <FaWhatsapp />
                                Chat On WhatsApp
                            </button>

                        </div>

                        {/* Right Form */}
                        <div>

                            <div className="bg-white rounded-3xl shadow-lg p-8">

                                <h3 className="text-3xl font-bold">
                                    Send Message
                                </h3>

                                <form className="mt-8 space-y-5">

                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="
                    w-full
                    border
                    p-4
                    rounded-xl
                    "
                                    />

                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="
                    w-full
                    border
                    p-4
                    rounded-xl
                    "
                                    />

                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="
                    w-full
                    border
                    p-4
                    rounded-xl
                    "
                                    />

                                    <textarea
                                        rows="5"
                                        placeholder="Your Message"
                                        className="
                    w-full
                    border
                    p-4
                    rounded-xl
                    "
                                    />

                                    <button
                                        className="
                    w-full
                    bg-black
                    text-white
                    py-4
                    rounded-xl
                    font-semibold
                    "
                                    >
                                        Send Message
                                    </button>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Map Section */}
            <section className="pb-20">

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="rounded-3xl overflow-hidden shadow-lg">

                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps?q=Vijayawada&output=embed"
                            width="100%"
                            height="450"
                            loading="lazy"
                        />

                    </div>

                </div>

            </section>

        </MainLayout>
    );
};

export default Contact;