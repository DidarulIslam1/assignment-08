import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="h-[40vh]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;