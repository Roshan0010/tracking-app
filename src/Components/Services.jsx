"use client";
import React, { useContext } from "react";

const Services = ({
	setOpneProfile,
	setCompleteModel,
	setGetModel,
	setStartModel,
}) => {
	const TextArr = [
		"COMP SHIPMENT",
		"GET SHIPMENT",
		"START SHIPMENT",
		"USER PROFILE",
		"SHIPMENT COUNT",
		"SEND SHIPMENT",
	];
	const opnenModelBox = (idx) => {
		if (idx === 1) {
			console.log(idx);
			setCompleteModel(true);
		} else if (idx === 2) {
			console.log(idx);
			setGetModel(true);
		} else if (idx === 3) {
			console.log(idx);
			setStartModel(true);
		} else if (idx === 4) {
			console.log(idx);
			setOpneProfile(true);
		}
	};

	return (
		<div className="h-full  mt-4 flex justify-center ">
			<div className=" w-[90%]  h-full flex flex-wrap gap-10 justify-center items-center  ">
				{TextArr.map((item, idx) => (
					<button
						key={idx}
						className="bg-[#265470] w-[24rem] h-[15rem] rounded-3xl flex 
        items-center justify-center text-4xl "
						onClick={() => opnenModelBox(idx + 1)}
					>
						{item}
					</button>
				))}
			</div>
		</div>
	);
};

export default Services;
