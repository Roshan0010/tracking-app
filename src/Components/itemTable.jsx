import React from "react";

const ItemTableTable = ({ allShipmentsData, rowArray }) => {
	// console.log(allShipmentsData);
	const statusValue = ["PENDING", "IN_TRANSIT", "DELIVERED"];
	const convertTime = (time) => {
		const newTime = new Date(time);

		const formattedTime = new Intl.DateTimeFormat("en-US", {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
		}).format(newTime);

		return formattedTime;
	};

	const Row = () => {
		let serialNumber = 1;
		return (
			<div className=" h-full w-full">
				{allShipmentsData?.map((shipment, idx) => (
					<div className="flex">
						<div className="w-[12.5%]">{shipment.sender.slice(0, 15)}..</div>
						<div className="w-[12.5%]">{shipment.receiver.slice(0, 15)}..</div>
						<div className="w-[12.5%]">{convertTime(shipment.pickupTime)}</div>
						<div className="w-[12.5%]">{shipment.distance}Km</div>
						<div className="w-[12.5%]">{shipment.price}..</div>
						<div className="w-[12.5%]">{convertTime(shipment.deliverTime)}</div>
						<div className="w-[12.5%]">{shipment.isPaid ? "Yes" : "No"}</div>
						<div className="w-[12.5]">{statusValue[shipment.status]}</div>
					</div>
				))}
			</div>
		);
	};

	return (
		<div
			className={`w-[100%] h-[57%]  flex justify-center bg-gray-800 rounded-lg   `}
		>
			<div className="w-[100%]  ">
				<div className="flex">
					{rowArray.map((item, idx) => (
						<div key={idx} className="w-[12.5%] px-1 py-2  ">
							{item}
						</div>
					))}
				</div>
				<Row className="bg-yellow-400 overflow-y-scroll h-full w-full " />
			</div>
		</div>
	);
};

export default ItemTableTable;
