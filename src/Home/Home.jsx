
import { useEffect, useState } from "react";
import CardData from "../CardData/CardData";


const Home = () => {
    const [cards, setCards] = useState([]);
    const [category, setCategory] = useState(null);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                const selectedDonation = data.filter(card => card.category === category);
                setCards(selectedDonation);
                if (selectedDonation.length === 0) {
                    setCards(data)
                }
            });

    }, [cards, category]);

    const onsubmitBtn = (e) => {
        e.preventDefault();
        const categoryName = e.target.donationName.value;
        setCategory(categoryName);
    }
    return (
        <div className="mt-20">
            <div className="text-center bg-[url('')]">
                <h1 className="text-4xl font-bold px-5">I Grow By Helping People In Need</h1>
                <div className="mt-8">
                    <form onSubmit={onsubmitBtn}>
                        <input className="w-[13rem] h-[3rem] md:w-[28rem] border-[2px] border-r-0 rounded-l-lg pl-5 bg-white" type="" name="donationName" id="" placeholder="Search Here" />
                        <button type="submit" className="bg-[#FF444A] h-[3rem] w-[7rem] rounded-r-lg text-white text-base">Search</button>
                    </form>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-7xl mx-auto mt-28 p-5 pb-20">
                {
                    cards.map(card => <CardData key={card.id} card={card}></CardData>)
                }
            </div>
        </div>
    );
};

export default Home;