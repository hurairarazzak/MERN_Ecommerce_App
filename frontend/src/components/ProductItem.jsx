import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`}>
      <div className="w-full h-64 overflow-hidden bg-white">
        {image && (
          <img
            src={Array.isArray(image) ? image[0] : image}
            alt={name}
            className="w-full h-full object-cover transform scale-100 hover:scale-110 transition-transform duration-300"
          />
        )}
      </div>
      <p className="pt-3 pb-1 text-sm">{name || "Unnamed Product"}</p>
      <p className="text-sm font-medium">
        {currency}
        {price || "N/A"}
      </p>
    </Link>
  );
};

export default ProductItem;
