import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonateCategory } from "../Utility/LocalStorage";
import AllDonations from "../AllDonations/AllDonations";


const Donation = () => {
    const donations = useLoaderData();

    const [seeAllBtn, setSeeAllBtn] = useState(4);

    const [getDonation, setGetDonation] = useState([]);

    useEffect(() => {
        const storedDonationIds = getDonateCategory();

        if (donations.length > 0) {
            const donationsApplied = donations.filter(donation => storedDonationIds.includes(donation.id));
            setGetDonation(donationsApplied);
        }

    }, [donations]);
    return (
        <div>
            <div className="grid grid-cols-1 p-2 md:p-5 md:grid-cols-2 lg:px-0 gap-6 max-w-7xl mx-auto mt-12">
                {
                    getDonation.slice(0, seeAllBtn).map(donation => <AllDonations key={donation.id}
                        donation={donation}
                    ></AllDonations>)
                }
            </div>
            <div className={seeAllBtn === getDonation.length ? 'hidden' : 'block text-center pt-4 md:pt-8 pb-20'}>
                <button onClick={() => setSeeAllBtn(getDonation.length)} className="bg-[#009444] text-white text-lg font-semibold px-4 py-2 rounded-lg">See All</button>
            </div>
        </div>
    );
};

export default Donation;