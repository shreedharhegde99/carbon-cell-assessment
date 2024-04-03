import { Fragment } from "react/jsx-runtime";
import menuIcon from "../assets/images/menu_icon.svg";
import closeIcon from "../assets/images/close.svg";
import homeIcon from "../assets/images/home.svg";
import assetIcon from "../assets/images/asset.png";
import walletIcon from "../assets/images/wallet.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    return (
        <Fragment>
            <div
                className={`${open ? "slidein h-screen w-full shadow-2xl" : "overflow-hidden"} fixed left-0 top-0 z-10 w-screen select-none border-slate-600 bg-white  transition-all md:sticky md:h-screen md:w-40 md:max-w-40 md:border-r md:shadow-none [&_img]:w-5`}
            >
                <div className="w-max px-4 py-4 md:hidden">
                    {open ? (
                        <img
                            src={closeIcon}
                            alt="Close"
                            className="cursor-pointer"
                            onClick={() => setOpen(false)}
                        />
                    ) : (
                        <img
                            src={menuIcon}
                            alt="Menu"
                            className="cursor-pointer"
                            onClick={() => setOpen(true)}
                        />
                    )}
                </div>
                <Fragment>
                    <Link to="/">
                        <div className="flex items-center gap-2 px-2 py-4">
                            {" "}
                            <img src={homeIcon} alt="Home" /> <span> Home</span>{" "}
                        </div>
                    </Link>
                    <Link to="/asset">
                        <div className="flex items-center gap-2 px-2 py-4">
                            {" "}
                            <img src={assetIcon} alt="Assets" />{" "}
                            <span> Assets</span>{" "}
                        </div>
                    </Link>
                    <Link to="/wallet">
                        <div className="flex items-center gap-2 px-2 py-4">
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
