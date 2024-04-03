import { useEffect, useState } from "react";
import { Fragment } from "react/jsx-runtime";

export default function CurrencyCard() {
    const [currencyData, setCurrencyData] = useState<any[]>([]);

    const fetchCurrencyData = async () => {
        const res = await fetch(
            "https://api.coindesk.com/v1/bpi/currentprice.json",
        )
            .then((r) => r.json())
            .then((r) => r.bpi)
            .catch((e) => console.log("DEBUG", e?.message));
        const data = [];
        for (let el in res) {
            const { rate_float, ...rest } = res[el];
            data.push(rest);
        }

        setCurrencyData(data);
    };

    useEffect(() => {
        fetchCurrencyData();
    }, []);

    return (
        <Fragment>
            <div className="gap-6 p-4 md:mt-10 md:flex">
                {currencyData.map((el) => (
                    <div
                        key={el?.code}
                        className="relative mx-auto mt-10 w-full max-w-52 cursor-pointer rounded-lg border border-slate-300 p-4 pb-14 shadow-2xl transition-all hover:scale-105 md:m-0"
                    >
                        <p className="py-3 text-xl">{el?.code}</p>
                        <p>{el?.description}</p>
                        <p className="text-lg font-semibold">
                            {el?.rate}
                            {"  "}
                            <span
                                dangerouslySetInnerHTML={{ __html: el?.symbol }}
                            ></span>
                        </p>

                        <div className="absolute bottom-4 right-4  w-full text-right">
                            <button className="rounded-md bg-green-600 p-1 px-4 text-sm text-white  hover:bg-green-700">
                                Trade
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    );
}
