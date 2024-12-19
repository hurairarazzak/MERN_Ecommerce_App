import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => { // Correct destructuring here
    const { currency } = useContext(ShopContext);

    return (
        <Link to={`/product/${id}`}>
            <div className='overflow-hidden'>
                {/* Check if image exists */}
                {image && <img className="transform scale-100 hover:scale-110 transition-transform duration-300" src={image[0]} alt={name} />}
            </div>
            <p className='pt-3 pb-1 text-sm'>{name || "Unnamed Product"}</p>
            <p className='text-sm font-medium'>{currency}{price || "N/A"}</p>
        </Link>
    );
};

export default ProductItem;