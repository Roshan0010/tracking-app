import React from "react";
import ItemTableTable from "./itemTable";

const Table = ({ setCreateShipmentModel, allShipmentsData }) => {
	const rowArray = [
		"Sender",
		"Revceiver",
		"Pickup Time",
		"Distance",
		" Price",
		"Delivery Time",
		"Paid",
		"Status",
	];

	// console.log(allShipmentsData);
	return (
		<div className="h-full flex flex-col mx-4 gap-3 mt-4 mb-4">
			<div className="flex justify-between">
				<div className="text-2xl">Create Tracking </div>
				<button
					type="button"
					className="text-white  bg-[#265470] hover:bg-[#1D3D55] focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2   "
					onClick={() => setCreateShipmentModel(true)}
				>
					Add Tracking
				</button>
			</div>
			<div className="mr-[20%] text-sm opacity-70">
				f you don't have Cradit Card/ Debit Card, then you can make payment
				through PhonePe, send email to theblockchaincoders@gmail.com,
				"conditions apply". In email, you have to mention "name Of The Project",
				"Phone No", "Your Name" & "URL of Page (optional)". And will send an
				email, back to you in which you will have details how you have to make
				payment and the Number, Only pay to the Number, is provided in the
				email.
			</div>
			<ItemTableTable allShipmentsData={allShipmentsData} rowArray={rowArray} />
		</div>
	);
};

export default Table;
