import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const Main = () => {

    return (
        <div >
            <Navbar></Navbar>
            <br />
            <div className="my-20">
                <Outlet></Outlet>
            </div>
        </div>

    )
};
export default Main;