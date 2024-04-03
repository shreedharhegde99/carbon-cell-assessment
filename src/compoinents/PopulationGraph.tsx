import { Fragment, useEffect, useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "bottom" as const,
        },
        title: {
            display: true,
            text: "Population Chart",
        },
    },
    scales: {
        y: {
            beginAtZero: false,
        },
    },
};

export default function PopulationGraph() {
    const [graphData, setGraphData] = useState<{
        labels: any[];
        population: any[];
    }>({ labels: [], population: [] });

    const fetchPopulationData = async () => {
        const res = await fetch(
            "https://datausa.io/api/data?drilldowns=Nation&measures=Population",
        )
            .then((r) => r.json())
            .catch((e) => console.log("DEBUG", e?.message));

        const labels = res?.data?.map((el: any) => el?.Year);
        const population: any[] = res?.data?.map((el: any) => el?.Population);

        setGraphData({ labels, population });
    };

    useEffect(() => {
        fetchPopulationData();
    }, []);

    const data = {
        labels: graphData?.labels,
        datasets: [
            {
                data: graphData?.population,
                label: "Population",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    };

    return (
        <Fragment>
            <div className="md:w-1/2">
                <Bar options={{ ...options, scales: {} }} data={data} />
            </div>
        </Fragment>
    );
}
