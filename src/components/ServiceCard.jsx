import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {_id, img,title,price } = service || {};
  return (
    <div className="card   bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body  ">
        <h2 className="card-title">{title}</h2>
              <p className="text-xl font-medium text-secondary">Price: ${ price}</p>
        <div className="card-actions">
          <Link to={`/checkout/${_id}`}>
          <button className="btn btn-secondary">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
