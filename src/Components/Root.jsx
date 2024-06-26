import { Outlet } from "react-router-dom";
import Footer from "./Shared/Footer";

const Root = () => {
    return (
        <div className="font-inter">
            <div className="min-h-[calc(100vh-306px)]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;