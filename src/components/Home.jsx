import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const InitialCoffees = useLoaderData();

  const [coffees, setCoffees]= useState(InitialCoffees);


  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 p-6">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} 
          coffees={coffees} setCoffees={setCoffees} ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
