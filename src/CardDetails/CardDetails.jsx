import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonateCategory } from "../Utility/LocalStorage";


const CardDetails = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    const card = cards.find(card => card.id === intId);

    const handleDonate = () => {
        saveDonateCategory(intId);
        toast('You have Donate successfully!!!')
    }
    return (
        <div className="p-2 md:p-5">
            <div className="relative card card-compact bg-base-100 max-w-7xl mx-auto mt-5 max-h-[90vh] pb-32">
                <figure className="relative">
                    <img className="w-full h-auto" src={card.picture} alt="Shoes" />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-black opacity-50">
                        <button onClick={handleDonate} className="absolute left-4 bottom-5 bg-[#FF444A] text-white text-xl font-semibold px-4 py-2 rounded-md">Donate {card.price}</button>
                    </div>
                </figure>
                <div className="card-body relative z-10">
                    <h2 className="card-title text-4xl font-bold text-[#0B0B0B]">{card.title}</h2>
                    <p className="text-base font-normal">{card.description}</p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default CardDetails;