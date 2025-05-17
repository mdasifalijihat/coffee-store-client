import React from "react";
import { useLoaderData } from "react-router";

const UpdateCoffee = () => {
  const {_id, name, chef, supplier, taste, details, photoUR, price } =
    useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
    console.log(updatedCoffee)

    // send updated coffee to the db 
    fetch(`https://coffee-store-server-two-omega.vercel.app/coffees/${_id}`, {
        method: "PUT",
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(updatedCoffee)
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount){
            console.log(data);
        alert('update coffee')
        }
    })




  };
  return (
    <div>
      <div className="bg-[#f5f3f0] min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl w-full bg-white p-10 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-[#374151] mb-4">
            Update Coffee
          </h2>
          <form onSubmit={handleUpdateCoffee} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Enter coffee name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
                />
              </div>

              {/* Chef */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Chef
                </label>
                <input
                  type="text"
                  name="chef"
                  defaultValue={chef}
                  placeholder="Enter coffee chef"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
                />
              </div>

              {/* Supplier */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Supplier
                </label>
                <input
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  placeholder="Enter coffee supplier"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
                />
              </div>

              {/* Taste */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Taste
                </label>
                <input
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  placeholder="Enter coffee taste"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="Price"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
                />
              </div>

              {/* Details */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Details
                </label>
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  placeholder="Enter coffee details"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
                />
              </div>
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Photo
              </label>
              <input
                type="text"
                name="photoURL"
                defaultValue={photoUR}
                placeholder="Enter photo URL"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#D2B48C] hover:bg-[#c9a96c] text-[#3c2b1b] font-semibold py-2 px-10 rounded-md border border-[#3c2b1b] shadow"
              >
                Add Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
