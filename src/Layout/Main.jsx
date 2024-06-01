import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";


const Main = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;