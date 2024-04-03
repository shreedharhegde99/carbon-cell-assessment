import { Fragment } from "react/jsx-runtime";
import Sidebar from "./compoinents/Sidebar";
import PopulationGraph from "./compoinents/PopulationGraph";
import CurrencyCard from "./compoinents/CurrencyCard";

function App() {
    return (
        <Fragment>
            <div className="min-h-screen gap-6 md:flex">
                <Sidebar />
                <div className="w-full">
                    <PopulationGraph />
                    <CurrencyCard />
                </div>
            </div>
        </Fragment>
    );
}

export default App;
