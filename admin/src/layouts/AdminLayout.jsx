import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const AdminLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">

            <div className="flex items-stretch">

                {/* Mobile Overlay */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                {/* Sidebar */}
                <Sidebar
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />

                {/* Main Content */}
                <div className="flex-1 min-w-0">

                    <Header
                        setSidebarOpen={setSidebarOpen}
                    />

                    <main className="p-4 md:p-6">
                        {children}
                    </main>

                </div>

            </div>

        </div>
    );
};

export default AdminLayout;