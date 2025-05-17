import React from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import { Link } from "react-router";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, price, photoURL } = coffee;

  const handleDeleted = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // start deleting the coffee
        fetch(`https://coffee-store-server-two-omega.vercel.app/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              console.log(data);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              // remove the coffee from the state 
              const remainingCoffees = coffees.filter( cof => cof._id !== _id);
              setCoffees(remainingCoffees)
            }
          });
      }
    });
  };

  return (
    <div className=" p-4 ">
      <div className="bg-[#F5F4F1] p-2  flex flex-col lg:flex-row items-center justify-between shadow-md">
        {/* Image */}
        <div className="w-full lg:w-[200px] flex justify-center mb-4  lg:mb-0">
          <img
            src={photoURL}
            alt={name}
            className="h-[200px] rounded object-contain"
          />
        </div>

        {/* Info */}
        <div className="flex-1 px-6 text-center lg:text-left space-y-1">
          <p className="text-lg text-gray-800 font-medium">
            <span className="font-semibold">Name:</span> {name}
          </p>
          <p className="text-md text-gray-700">
            <span className="font-semibold">Chef:</span> {chef}
          </p>
          <p className="text-md text-gray-700">
            <span className="font-semibold">Price:</span> {price} Taka
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex lg:flex-col items-center gap-2 mt-4 lg:mt-0">
          <Link to={`/coffee/${_id}`}>
          <button className="bg-[#D2B48C] hover:bg-[#bc9c72] p-2 rounded-md">
            <Eye className="text-white w-5 h-5" />
          </button>
          </Link>
         <Link to={`/updateCoffee/${_id}`}>
          <button className="bg-[#3C3C3C] hover:bg-[#2e2e2e] p-2 rounded-md">
            <Pencil className="text-white w-5 h-5" />
          </button>
         </Link>

          <button
            onClick={() => handleDeleted(_id)}
            className="bg-[#EA4744] hover:bg-red-600 p-2 rounded-md"
          >
            <Trash2 className="text-white w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
