import React from "react";

const Card = ({ beer }) => {
  const { name, tagline, image_url, abv, ibu, description, food_pairing } = beer;

  return (
    <div className="max-w-xs rounded-xl overflow-hidden shadow-lg bg-white m-4 px-10 flex flex-col justify-center items-center">
      <img className="w-full mb-4" src={image_url} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base mb-2">{tagline}</p>
        <p className="text-gray-700 text-sm">
          <strong>ABV:</strong> {abv}% | <strong>IBU:</strong> {ibu}
        </p>
        <p className="text-gray-700 text-base mt-2">{description}</p>
        <div className="mt-4">
          <strong>Food Pairing:</strong>
          <ul className="list-disc pl-5">
            {food_pairing.map((pairing, index) => (
              <li key={index} className="text-gray-700">
                {pairing}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
