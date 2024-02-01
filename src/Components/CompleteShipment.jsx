"use client";
import React, { useState } from "react";

const CompleteShipment = ({
	completeModal,
	setCompleteModel,
	completeShipment,
}) => {
	const [getProduct, setGetProduct] = useState({});
	const handleSubmit = async () => {
		// todo logic for validating id and receiverAddress
		try {
			await completeShipment(getProduct);
			setCompleteModel(false);
		} catch (error) {
			console.log("complete shipment error");
			console.log(error);
		}
	};
	const handleClose = () => {
		setCompleteModel(false);
	};

	return (
		completeModal && (
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
								type="text"
								placeholder="receiver address"
								className="w-[90%] p-2 rounded-lg bg-gray-700"
								onChange={(e) =>
									setGetProduct({
										...getProduct,
										receiver: e.target.value.trim(),
									})
								}
							/>
							<input
								type="number"
								placeholder="Id"
								className="w-[90%] p-2 rounded-lg bg-gray-700"
								onChange={(e) =>
									setGetProduct({ ...getProduct, index: e.target.value })
								}
							/>

							<button
								type="button"
								onClick={() => handleSubmit()}
								className="text-white bg-[#265470]   hover:bg-[#1D3D55] focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
              mb-3"
							>
							finish shipment
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	);
};

export default CompleteShipment;
