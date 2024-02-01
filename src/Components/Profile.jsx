"use client";
import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

const Profile = ({
	openProfile,
	setOpenProfile,
	currentUser,
	getShipmentCount,
	getBalance,
}) => {
	const [count, setCount] = useState("0");
	const [balance, setBalance] = useState(0);

	useEffect(() => {
		getShipmentCount().then((res) => {
			setCount(res);
			console.log(res);
		});
		getBalance().then(res => {
      
      console.log(typeof res);
     let response=res
    
      setBalance(res.slice(0,7));
      console.log(res.slice(0,7));
    });
    
	}, [count, balance]);

	const handleClose = () => {
		setOpenProfile(false);
	};

	return (
		openProfile && (
			<div
				className="fixed inset-0 overflow-y-auto bg-gray-900 flex justify-center items-center"
				style={{ backgroundColor: "rgba(0, 0, 0, 0.35)" }}
			>
				<div
					className="bg-gray-900 z-10  w-[27rem] flex justify-center rounded-xl "
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

						<div className="h-[10rem] w-full flex flex-col justify-center items-center gap-3  ">
							<FaUser className=" h-[4rem] w-[4rem] border rounded-full "></FaUser>
							<div className="">{`${balance} ETH`}</div>
							<div>{currentUser}</div>

							{`number of items : ${count}`}
						</div>
					</div>
				</div>
			</div>
		)
	);
};

export default Profile;
