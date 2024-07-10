import PropTypes from 'prop-types';

const AllDonations = ({ donation }) => {
    const { picture, price, category, title, text_c, category_bg, card_bg } = donation;
    return (
        <div className="">
            <div style={{ backgroundColor: card_bg }} className="card card-side bg-slate-400 shadow-xl">
                <figure className="w-[280px]">
                    <img className="h-[15rem]" src={picture} alt="Movie" />
                </figure>
                <div className="flex flex-col p-4 w-full">
                    <h2 style={{ color: text_c, backgroundColor: category_bg }} className="text-sm font-medium max-w-fit py-1 px-2 rounded mb-2">
                        {category}
                    </h2>
                    <h2 className="text-2xl font-semibold text-[#0B0B0B] mb-2">{title}</h2>

                    <p style={{ color: text_c }} className="mt-auto mb-2 text-base font-semibold">${price}</p>
                    <div className="card-actions">
                        <button style={{ backgroundColor: text_c }} className="text-white text-lg font-semibold px-4 py-2 rounded-md ">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
AllDonations.propTypes = {
    donation: PropTypes.object.isRequired
}
export default AllDonations;