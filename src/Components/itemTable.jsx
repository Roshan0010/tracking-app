import React from "react";

const ItemTableTable = ({ items, rowArray }) => {
	const converTime = (time) => {
		const newTime = new Data(time);
		const dataTime = new Intl.Date.TimeFormat("en-US", {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
		}).format(newTime);
		return dataTime;
	};
	const Row = () => {
		let serialNumber = 1;
		return (
			<div className=" h-full w-full">
				{items?.map((shipment, idx) => (
					<div className="flex">
						<div className="w-[12.5]">{shipment.sender.slice(0, 15)}..</div>
						<div className="w-[12.5]">{shipment.receiver.slice(0, 15)}..</div>
						<div className="w-[12.5]">{converTime(shipment.pickupTime)}</div>
						<div className="w-[12.5]">{shipment.distance}Km</div>
						<div className="w-[12.5]">{shipment.price}..</div>
						<div className="w-[12.5]">{shipment.deliveryTime}..</div>
						<div className="w-[12.5]">
							{shipment.isPaid ? "Completed" : "Not Completed"}
						</div>
						<div className="w-[12.5]">
							{shipment.status == 0
								? "Pending"
								: shipment.status == 1
								? "In_Transist"
								: "Deliverd"}
						</div>
					</div>
				))}
			</div>
		);
	};

	return (
		<div
			className={`w-[100%] h-[57%] overflow-y-scroll flex justify-center bg-gray-800 rounded-lg   `}
		>
			<div className="w-[100%]  ">
				<div className="flex">
					{rowArray.map((item) => (
						<div className="w-[12.5%] px-1 py-2  ">{item}</div>
					))}
				</div>
				<Row className="bg-yellow-400 overflow-y-scroll h-full w-full " />
			</div>
		</div>
	);
};

export default ItemTableTable;
