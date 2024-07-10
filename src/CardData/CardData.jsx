import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const CardData = ({ card }) => {

    const { id, picture, title, category, text_c, category_bg, card_bg } = card;

    return (
        <div className="flex justify-center">
            <div style={{ backgroundColor: card_bg }} className="card bg-base-100 shadow-xl">
                <Link to={`/card/${id}`}>
                    <figure><img src={picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 style={{ color: text_c, backgroundColor: category_bg }} className="text-sm font-medium max-w-fit py-1 px-2 rounded">
                            {category}
                        </h2>
                        <div className="flex-grow">
                            <p className="text-xl font-semibold">{title}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

CardData.propTypes = {
    card: PropTypes.object.isRequired
}
export default CardData;
