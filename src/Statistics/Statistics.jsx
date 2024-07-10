import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import { useLoaderData } from "react-router-dom";
import { getDonateCategory } from "../Utility/LocalStorage";


const Statistics = () => {

    const [localDataLength, setLocalDataLength] = useState(0);
    const donations = useLoaderData();
    const donationsLength = donations.length;

    useEffect(() => {
        const localData = getDonateCategory();
        setLocalDataLength(localData.length);
    }, []);

    const restData = donationsLength - localDataLength;

    const data = [
        ["Remaining Donation", "Donation Given"],
        ["Total Donation", restData],
        ["Your Donation", localDataLength],
    ];
    const options = {
        title: "Here you can see the total donation statistics",
    };
    return (
        <div className="">
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
            />
        </div>
    );
};

export default Statistics;
