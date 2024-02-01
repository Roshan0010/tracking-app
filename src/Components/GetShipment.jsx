"use client";
import React, { useState } from "react";
//to do if the range is greater then retuen an tost stating that it doesn't hav the id
const GetShipment = ({ getModel, setGetModel, getShipment }) => {
	const [index, setIndex] = useState(0);
	const [singleShipmentData, setSingleShipmentData] = useState(null);
	const statusValue = ["PENDING", "IN_TRANSIT", "DELIVERED"];

	function handleClose() {
		setSingleShipmentData(null);
		setGetModel(false);
	}
	const convertTime = (time) => {
		const newTime = new Date(time);

		const formattedTime = new Intl.DateTimeFormat("en-US", {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
		}).format(newTime);

		return formattedTime;
	};
	const getShipmentData = async () => {
		const getData = await getShipment(index);
		setSingleShipmentData(getData);
		console.log(getData);
	};

	return (
		getModel && (
			<div
				className="fixed inset-0 overflow-y-auto bg-gray-900 flex justify-center items-center"
				style={{ backgroundColor: "rgba(0, 0, 0, 0.35)" }}
			>
				<div
					className="bg-gray-900 z-10  w-[25rem] flex justify-center rounded-xl "
					style={{ backgroundColor: "" }}
				>
					<div className="flex flex-col w-[90%]">
						<div className="w-full flex h-10 justify-end items-center">
							<button
								className=" w-6  h-8 item-center text-opacity-40 mt-3 text-gray-300"
								onClick={() => handleClose()} // Close the modal
							>
								X
							</button>
						</div>
						<div className=" w-full flex flex-col  justify-center items-center gap-3 mt-4">
							<input
								type="number"
								placeholder="Id"
								className="w-[90%] p-2 rounded-lg bg-gray-700"
								onChange={(e) => setIndex(e.target.value)}
							/>

							<button
								type="button"
								onClick={() => getShipmentData()}
								className="text-white bg-[#265470]   hover:bg-[#1D3D55] focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
                mb-3"
							>
								Add Tracking
							</button>
						</div>

						{singleShipmentData && (
							<div
								className={` flex flex-col gap-3 mb-4 transition-opacity duration-500 ease-in-out ${
									singleShipmentData ? "opacity-100 h-full" : "opacity-0 h-0"
								}`}
							>
								<p className=" bg-gray-700 border  rounded-xl p-1 text-sm px-3">
									Sender: {singleShipmentData.sender.slice(0, 25)}...
								</p>
								<p className=" bg-gray-700 border  rounded-xl p-1 text-sm px-3">
									Receiver {singleShipmentData.receiver.slice(0, 25)}...
								</p>
								<p className=" bg-gray-700 border  rounded-xl p-1 text-sm px-3">
									Pick Up Time: {convertTime(singleShipmentData.pickupTime)}
								</p>
								<p className=" bg-gray-700 border  rounded-xl p-1 text-sm px-3">
									Deliverd Time: {convertTime(singleShipmentData.deliveryTime)}
								</p>
								<p className=" bg-gray-700 border  rounded-xl p-1 text-sm px-3">
									Price: {singleShipmentData.price} ETH
								</p>
								<p className=" bg-gray-700 border  rounded-xl p-1 text-sm px-3">
									Status {statusValue[singleShipmentData.status]}
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		)
	);
};

export default GetShipment;
