import React from "react";
import { Link } from "react-router-dom";

const Card = ({ listing }) => {
  return (
    <Link to={`/listing/${listing.id}`}>
      <div className="card">
        <div className="card-image">
          <figure
            className="image is-2by1"
            style={{
              backgroundImage: `url(${listing?.headerImgUrl})`,
              backgroundSize: "cover"
            }}
          />
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{listing.name}</p>
              <p className="subtitle is-6">{listing.address}</p>
            </div>
          </div>

          <div className="content">
            {listing.category}
            {/* {listing.hours} */}
            <br />
            {/* <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
