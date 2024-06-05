import { BsPostcardHeart } from "react-icons/bs";

import { FaHome } from "react-icons/fa";
import { MdOutlinePendingActions, MdOutlinePostAdd } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {

    

    return (
        <div className="flex">
        {/* dashboard side bar */}
        <div className="w-2/6 md:w-64 min-h-screen bg-[#6aa8a5]">
            <ul className="menu p-4">
                <li><NavLink to="/dashboard/addContest"><MdOutlinePostAdd className="text-xl" /> Add Contest</NavLink></li>
                <li><NavLink to="/dashboard/createdContest"><MdOutlinePendingActions className="text-xl" /> My Created Contest</NavLink></li>
                <li><NavLink to="/dashboard/myPost"><BsPostcardHeart className="text-xl" /> Contest submitted</NavLink></li>

                {/* {
                    isAdmin ? <>
                        <li><NavLink to="/dashboard/adminHome"><FaHome /> Admin Home</NavLink></li>
                        <li><NavLink to="/dashboard/addItems"><FaUtensils /> Add Items</NavLink></li>
                        <li><NavLink to="/dashboard/manageItems"><FaList /> Manage Items</NavLink></li>
                        <li><NavLink to="/dashboard/bookings"><FaBook /> Manage Bookings</NavLink></li>
                        <li><NavLink to="/dashboard/users"><FaUsers /> All Users</NavLink></li>
                    </>
                        :
                        <>
                            <li><NavLink to="/dashboard/userHome"><FaHome /> User Home</NavLink></li>
                            <li><NavLink to="/dashboard/reservation"><FaCalendarAlt /> Reservation</NavLink></li>
                            <li><NavLink to="/dashboard/cart"><FaShoppingCart /> My Cart ({cart.length})</NavLink></li>
                            <li><NavLink to="/dashboard/review"><MdReviews /> Add Review</NavLink></li>
                            <li><NavLink to="/dashboard/paymentHistory"><MdLaptopChromebook /> Payment History</NavLink></li>
                        </>
                } */}

                {/* shared nav links */}
                <div className="divider"></div>
                <li><NavLink to="/"><FaHome className="text-xl" /> Home</NavLink></li>
            </ul>
        </div>
        {/* dashboard content */}
        <div className="flex-1 p-8">
            <Outlet></Outlet>
        </div>
    </div>
    );
};

export default DashBoard;