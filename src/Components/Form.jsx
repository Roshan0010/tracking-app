"use client";
import React, { useState } from "react";

const Form = ({
  setCreateShipmentModel,
  createShipmentModel,
  createShipment,
}) => {
  const [shipment, setShipment] = useState({
    receiver: "",
    pickupTime: "",
    distance: "",
    price: "",
  });

  const createItem = async () => {
    try {
      await createShipment(shipment);
      setCreateShipmentModel(false);
    } catch (error) {
      console.log("Something went wrong while creating item");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShipment((prevShipment) => ({
      ...prevShipment,
      [name]: value,
    }));
  };


  return (
    createShipmentModel && (
      <div
        className="fixed inset-0 overflow-y-auto bg-gray-900 flex justify-center items-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.35)" }}
      >
        <div
          className="bg-gray-900 z-10 h-[30rem] w-[35rem] flex justify-center rounded-xl "
          style={{ backgroundColor: "" }}
        >
          <div className="flex flex-col w-[90%]">
            <div className="w-full flex h-10 justify-end items-center">
              <button
                className=" w-6  h-8 item-center text-opacity-40 mt-3 text-gray-300"
                onClick={() => setCreateShipmentModel(false)} // Close the modal
              >
                X
              </button>
            </div>
            <div className="  h-full w-full flex flex-col gap-4">
              <p className=" text-2xl  text-center">
                Track Product, Create Shipment
              </p>
              <p className=" opacity-60 text-sm  text-center">
                Track Product, Create Shipment fhiwfp evoe jv fenenvoei
                viejvpejvowvwivowehvowesoievjos voi ew i ieooevvi vuiwhvue hoso
                hvos
              </p>
              <input
                type="text"
                name="receiver"
                placeholder="Receiver"
                value={shipment.receiver}
                onChange={handleChange}
                className="p-2 rounded-lg bg-gray-700 text-white border-none focus:outline-none hover:border-none"
              />
              <input
                type="date"
                name="pickupTime"
                placeholder="Pickup Time"
                value={shipment.pickupTime}
                onChange={handleChange}
                className="p-2 rounded-lg bg-gray-700 text-white border-none focus:outline-none hover:border-none"
              />
              <input
                type="text"
                name="distance"
                placeholder="Distance"
                value={shipment.distance}
                onChange={handleChange}
                className="p-2 rounded-lg bg-gray-700 text-white border-none focus:outline-none hover:border-none"
              />
              <input
                type="text"
                name="price"
                placeholder="Price"
                value={shipment.price}
                onChange={handleChange}
                className="p-2 rounded-lg bg-gray-700 text-white border-none focus:outline-none hover:border-none"
              />
              <button
                type="button"
                onClick={()=>createItem()}
                className="text-white  bg-[#265470] hover:bg-[#1D3D55] focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Add Tracking
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Form;
