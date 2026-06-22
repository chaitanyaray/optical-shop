import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const AdminLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100">

            <div className="flex">

                {/* Desktop Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <div className="flex-1 min-w-0">

                    <Header />

                    <main
                        className="
                        p-4
                        md:p-6
                        "
                    >
                        {children}
                    </main>

                </div>

            </div>

        </div>
    );
};

export default AdminLayout;