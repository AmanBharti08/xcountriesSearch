import React from "react";

const CountryCard = ({ img, title }) => {
  return (
    <div className="countryCard">
      <img src={img} alt="" />
      <p>{title}</p>
    </div>
  );
};

export default CountryCard;
