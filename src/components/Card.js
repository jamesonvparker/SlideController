import React from "react";
import { Link } from "react-router-dom";

function Card() {
  return (
    <Link to="/listing/123">
      <div className="card">
        <div className="card-image">
          <figure className="image is-2by1">
            <img
              src="https://bulma.io/images/placeholders/640x320.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Listing Name</p>
              <p className="subtitle is-6">10m away</p>
            </div>
          </div>

          <div className="content">
            Short Description of Business or Listing
            <br />
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
