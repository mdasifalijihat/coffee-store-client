import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const { _id, name, chef, supplier, taste, details, photoURL, price } = useLoaderData();

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <div className="flex justify-center mb-6">
                <img
                    src={photoURL}
                    alt={name}
                    className="w-64 h-64 object-cover rounded-full border-4 border-gray-200"
                />
            </div>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">{name}</h2>
            <div className="text-lg text-gray-700">
                <p className="mb-2"><strong className="font-semibold">Chef:</strong> {chef}</p>
                <p className="mb-2"><strong className="font-semibold">Supplier:</strong> {supplier}</p>
                <p className="mb-2"><strong className="font-semibold">Taste:</strong> {taste}</p>
                <p className="mb-2"><strong className="font-semibold">Details:</strong> {details}</p>
                <p className="mt-4 text-xl font-semibold text-green-500"><strong>Price:</strong> ${price}</p>
            </div>
        </div>
    );
};

export default CoffeeDetails;
