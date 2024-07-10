
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="bg-[#FFFFFFF2] min-h-[10vh] p-2 md:p-5">
                <div className="flex justify-between items-center max-w-7xl mx-auto mt-5">
                    <div className="w-[30%]">
                        <img src="https://i.ibb.co/c6z01Fs/Logo.png" alt="" />
                    </div>
                    <nav className="">
                        <ul className="flex gap-4 md:gap-10 text-base md:-p-5 md:text-lg font-semibold">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/donation"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                    }
                                >
                                    Donation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/statistics"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                    }
                                >
                                    Statistics
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;