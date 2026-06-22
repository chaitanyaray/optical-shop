import { NavLink } from "react-router-dom";
import {
    FaTachometerAlt,
    FaBox,
    FaShoppingCart,
    FaUsers,
    FaEye,
    FaStar,
    FaTags,
    FaCog,
    FaPlus,
} from "react-icons/fa";

const Sidebar = ({
    sidebarOpen,
    setSidebarOpen,
}) => {

    const menuItems = [
        { name: "Dashboard", path: "/", icon: <FaTachometerAlt /> },
        { name: "Products", path: "/products", icon: <FaBox /> },
        { name: "Add Product", path: "/add-product", icon: <FaPlus /> },
        { name: "Orders", path: "/orders", icon: <FaShoppingCart /> },
        { name: "Customers", path: "/customers", icon: <FaUsers /> },
        { name: "Eye Tests", path: "/eye-tests", icon: <FaEye /> },
        { name: "Reviews", path: "/reviews", icon: <FaStar /> },
        { name: "Coupons", path: "/coupons", icon: <FaTags /> },
        { name: "Settings", path: "/settings", icon: <FaCog /> },
    ];

    return (
        <aside
            className={`
                fixed lg:static
                top-0 left-0
                min-h-screen
                lg:min-h-full
                w-64
                bg-black
                text-white
                z-50
                transform
                transition-transform
                duration-300

                ${sidebarOpen
                    ? "translate-x-0"
                    : "-translate-x-full lg:translate-x-0"
                }
            `}
        >
            <div className="p-6 border-b border-gray-800">
                <h1 className="text-2xl font-bold">
                    Optical Admin
                </h1>
            </div>

            <nav className="p-4">

                <div className="flex flex-col gap-2">

                    {menuItems.map((item) => (

                        <NavLink
                            key={item.name}
                            to={item.path}
                            onClick={() => setSidebarOpen(false)}
                            className={({ isActive }) =>
                                `
                                flex items-center gap-3
                                px-4 py-3 rounded-xl
                                transition

                                ${isActive
                                    ? "bg-yellow-500 text-black"
                                    : "hover:bg-gray-800"
                                }
                                `
                            }
                        >
                            {item.icon}
                            {item.name}
                        </NavLink>

                    ))}

                </div>

            </nav>

        </aside>
    );
};

export default Sidebar;