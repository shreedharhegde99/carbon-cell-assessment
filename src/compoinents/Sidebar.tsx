import { Fragment } from "react/jsx-runtime";
import menuIcon from "../assets/images/menu_icon.svg";
import closeIcon from "../assets/images/close.svg";
import homeIcon from "../assets/images/home.svg";
import assetIcon from "../assets/images/asset.png";
import walletIcon from "../assets/images/wallet.png";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();
    const path = pathname.split("/").slice(-1)[0];

    return (
        <Fragment>
            <div className="sticky left-0 top-0 z-20 bg-white px-4 py-4  md:hidden">
                <img
                    src={open ? `${closeIcon}` : `${menuIcon}`}
                    alt={open ? "Close" : "Menu"}
                    className="h-7 cursor-pointer"
                    onClick={() => setOpen(!open)}
                />
            </div>
            <div
                className={`   ${open ? "slidein left-0 shadow-2xl" : "-left-2/4"} fixed top-14 z-10 h-screen  w-1/2   select-none border-slate-600 bg-white py-2  transition-all md:sticky md:top-0 md:h-screen md:min-w-40 md:max-w-40 md:border-r md:shadow-none [&_img]:w-5`}
            >
                <Fragment>
                    <Link to="/">
                        <div
                            title="home"
                            className={` flex items-center gap-2 px-2 py-4 font-medium  ${path === "" && "bg-slate-400/20 text-blue-700 "} `}
                        >
                            {" "}
                            <img src={homeIcon} alt="Home" /> <span> Home</span>{" "}
                        </div>
                    </Link>
                    <Link to="/asset">
                        <div
                            title="assets"
                            className={` flex items-center gap-2 px-2 py-4 font-medium  ${path === "asset" && "bg-slate-400/20 text-blue-700 "} `}
                        >
                            {" "}
                            <img src={assetIcon} alt="Assets" />{" "}
                            <span> Assets</span>{" "}
                        </div>
                    </Link>
                    <Link to="/wallet">
                        <div
                            title="wallet"
                            className={` flex items-center gap-2 px-2 py-4 font-medium  ${path === "wallet" && "bg-slate-400/20 text-blue-700 "} `}
                        >
                            {" "}
                            <img src={walletIcon} alt="Wallet" />{" "}
                            <span> Wallet</span>
                        </div>
                    </Link>
                </Fragment>
            </div>
        </Fragment>
    );
}
