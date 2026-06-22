import { FaBars } from "react-icons/fa";

const Header = () => {
    return (
        <header
            className="
            bg-white
            border-b
            h-16 md:h-20
            flex
            items-center
            justify-between
            px-4 md:px-6
            "
        >

            {/* Left Side */}
            <div className="flex items-center gap-3">

                {/* Mobile Menu Button */}
                <button
                    className="
                    lg:hidden
                    text-xl
                    "
                >
                    <FaBars />
                </button>

                <h2
                    className="
                    text-lg
                    md:text-2xl
                    font-bold
                    "
                >
                    Dashboard
                </h2>

            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">

                <div className="hidden sm:block text-right">

                    <h3 className="font-semibold">
                        Chaitanya
                    </h3>

                    <p className="text-xs md:text-sm text-gray-500">
                        Administrator
                    </p>

                </div>

                <div
                    className="
                    w-9
                    h-9
                    md:w-10
                    md:h-10
                    rounded-full
                    bg-yellow-500
                    flex
                    items-center
                    justify-center
                    font-bold
                    "
                >
                    C
                </div>

            </div>

        </header>
    );
};

export default Header;