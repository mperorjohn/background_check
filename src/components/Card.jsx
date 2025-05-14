import React from 'react'
const Card = ({ image, alt, heading, details, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={image} alt={alt} className="w-full h-48 object-cover rounded-t-lg" />
      <h3 className="font-bold text-xl mt-2">{heading}</h3>
      <p className="text-black/70 mt-2 line-clamp-3">{details}</p>
      <p className="text-blue-700 font-bold mt-2">₦{Number(price).toLocaleString()}</p>
    </div>
  );
};
export default Card
