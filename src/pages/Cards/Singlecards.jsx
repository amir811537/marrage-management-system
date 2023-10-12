import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect } from "react";

const Singlecards = ({ singleService }) => {
  const { id, Name, Image, Price, Button } = singleService;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="card w-full bg-base-100 shadow-xl"
      data-aos="zoom-in-right"
      onMouseEnter={() => AOS.refresh()}
    >
      <figure>
        <img src={Image} alt={Name} />
      </figure>
      <div className="card-body">
        <div>
          <h2 className="card-title">
            <span className="font-extrabold">Category:</span> {Name}
          </h2>
          <p className="text-xl text-left">
            <span className="font-bold">Price:</span> {Price}
          </p>
        </div>
      </div>
      <Link to={`/carddetails/${id}`}>
        <button className="btn bg-pink-500 text-white">{Button}</button>
      </Link>
    </div>
  );
};

export default Singlecards;
