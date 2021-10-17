import React from 'react';
import Rating from 'react-rating';

const Services = ({ service }) => {
    const { title, features, description, star, ratings, price, img } = service
  

    return (
        <div>
            <div className="p-5">

                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={img} alt="Mountain" />
                    <div className="px-6 py-4">
                        <h6 className="font-bold text-lg mb-2">{title}</h6>
                        <p className="text-gray-700 text-base">
                            <li>{features}</li>
                        </p>
                        <p className="text-gray-700 text-base">
                            {description}
                        </p>
                        <h1 className="text-3xl mt-4">${price}</h1>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            <Rating
                                emptySymbol="fa fa-star-o"
                                fullSymbol="fa fa-star"
                                readonly
                                initialRating={star}
                            />
                        </span>
                        <span className="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{star}/{ratings}</span>
                        <span className="inline-block w-full  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            <button className="w-full italic bg-gray-800 text-white py-2 mt-5 font-medium">BookThis</button>
                        </span>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;