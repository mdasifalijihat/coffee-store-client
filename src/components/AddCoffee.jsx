import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const fromData = new FormData(form);
    const newCoffee = Object.fromEntries(fromData.entries());
    console.log(newCoffee);

    // send data to the db
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log(data);
          Swal.fire({
            title: "Coffee added successfully",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  return (
    <div className="bg-[#f5f3f0] min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-[#374151] mb-4">
          Add New Coffee
        </h2>
        <p className="text-center text-sm text-gray-600 mb-10">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        <form onSubmit={handleAddCoffee} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
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
  );
};

export default AddCoffee;
