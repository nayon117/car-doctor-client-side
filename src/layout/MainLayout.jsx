import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <Navbar></Navbar>
           </div>
            <div className="container mx-auto min-h-screen px-4 md:px-8 lg:px-16">
            <Outlet></Outlet>
           </div>
            <div className="container mx-auto px-4 md:px-8 lg:px-16 mt-12">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;