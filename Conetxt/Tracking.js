"use client";
//very important
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import tracking from "../Conetxt/Tracking.json";
import web3Modal from "web3modal";
const ContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const ContractABI = tracking.abi;
// console.log(ContractABI);

const fetchContract = (signerOrProvider) =>
	new ethers.Contract(ContractAddress, ContractABI, signerOrProvider);

export const TrackingContext = React.createContext();

export const TrackingProvider = ({ children }) => {
	//STATE VARIABLE

	const DappName = "Product Tracking Dapp";
	const [currentUser, setCurrentUser] = useState("");

	const createShipment = async (items) => {
		console.log(items);
		const { receiver, pickupTime, distance, price } = items;

		try {
			const web3modal = new web3Modal();
			const connection = await web3modal.connect();
			const provider = new ethers.providers.Web3Provider(connection);
			const signer = provider.getSigner();
			const contract = fetchContract(signer);
			const createItem = await contract.createShipment(
				receiver,
				new Date(pickupTime).getTime(),
				distance,
				ethers.utils.parseUnits(price, 18),
				{
					value: ethers.utils.parseUnits(price, 18),
				}
			);
			await createItem.wait();
			console.log(createItem);
		} catch (error) {
			console.log("error in createShipment");
			console.log(error);
		}
	};
	const getAllShipment = async () => {
		try {
			const provider = new ethers.providers.JsonRpcProvider();
			const contract = fetchContract(provider);
			// console.log(provider.getCode(address))
			// console.log(contract);
			const shipments = await contract.getAllTransactions();
			console.log(shipments);
			const allShipments = shipments.map((shipment) => ({
				sender: shipment.sender,
				receiver: shipment.receiver,
				price: ethers.utils.formatEther(shipment.price.toString()),
				pickupTime: shipment.pickupTime.toNumber(),
				deliverTime: shipment.deliverTime?.toNumber(),
				distance: shipment.distance.toNumber(),
				isPaid: shipment.isPaid,
				status: shipment.status,
			}));
			console.log(`getAllShipment`);
			console.log(allShipments);
			return allShipments;
		} catch (error) {
			console.log("error in getallShipment");
			console.log(error);
		}
	};
	const getShipmentCount = async () => {
		try {
			if (!window.ethereum) return "Install MetaMask";
			const accounts = await window.ethereum.request({
				method: "eth_accounts",
			});
			const provider = new ethers.providers.JsonRpcProvider();

			const contract = fetchContract(provider);
			const shipmentsCount = await contract.getShipmentsCount(accounts[0]);
			console.log(shipmentsCount);
			return shipmentsCount.toNumber();
		} catch (error) {
			console.log(`get all Shipments `);
			console.log(error);
		}
	};
	const completeShipment = async (completeShip) => {
		console.log(completeShip);
		const { receiver, index } = completeShip;

		try {
			if (!window.ethereum) return "Install MetaMask";
			const accounts = await window.ethereum.request({
				method: "eth_accounts",
			});
			const web3modal = new web3Modal();
			const connection = await web3modal.connect();
			const provider = new ethers.providers.Web3Provider(connection);
			const signer = provider.getSigner();
			const contract = fetchContract(signer);

			const transaction = await contract.completeShipment(
				accounts[0],
				receiver,
				index,
				{
					gasLimit: 300000,
				}
			);
			transaction.wait();
			console.log(transaction);
		} catch (error) {
			console.log("wrong completeShipent", error);
		}
	};

	const getShipment = async (index) => {
		console.log(index * 1);
		try {
			if (!window.ethereum) return "Install MetaMask";
			const accounts = await window.ethereum.request({
				method: "eth_accounts",
			});
			const web3modal = new web3Modal();
			const connection = await web3modal.connect();
			console.log("1");
			const provider = new ethers.providers.Web3Provider(connection);
			console.log("2");
			const contract = fetchContract(provider);
			console.log("3");
			console.log(accounts[0]);
			const shipment = await contract.getShipment(accounts[0], index * 1);
			console.log("4");

			const SingleShipment = {
				sender: shipment[0],
				receiver: shipment[1],
				pickupTime: shipment[2].toNumber(),
				deliveryTime: shipment[3].toNumber(),
				distance: shipment[4].toNumber(),
				price: ethers.utils.formatEther(shipment[5].toString()),
				status: shipment[6],
				isPaid: shipment[7],
			};
			return SingleShipment;
		} catch (error) {
			console.log("single shipment error: ", error);
		}
	};

	const startShipment = async (getProduct) => {
		const { receiver, index } = getProduct;
		console.log(getProduct);

		try {
			if (!window.ethereum) return "Install MetaMask";

			const accounts = await window.ethereum.request({
				method: "eth_requestAccounts",
			});
			const web3modal = new web3Modal();
			const connection = await web3modal.connect();
			const provider = new ethers.providers.Web3Provider(connection);
			const signer = provider.getSigner();
			const contract = fetchContract(signer);
			const shipment = await contract.startShipment(
				accounts[0],
				receiver,
				index * 1
			);
			shipment.wait();
			console.log(shipment);
		} catch (error) {
			console.log("sorry no shipment", error);
		}
	};

	//Check wallet
	const checkWalletConnected = async () => {
		try {
			if (!window.ethereum) {
				console.log("Install MetaMask");
				return "Install MetaMask";
			}

			const accounts = await window.ethereum.request({
				method: "eth_requestAccounts",
			});
			// console.log("Accounts:", accounts);

			if (accounts.length) {
				setCurrentUser(accounts[0]);
			}
		} catch (error) {
			console.error("Error in checkWalletConnected:", error);
			throw error; // Rethrow the error or handle it as needed
		}
	};

	const connectWallet = async () => {
		try {
			if (!window.ethereum) return "Install MetaMask";

			const accounts = await window.ethereum.request({
				method: "eth_requestAccounts",
			});
			console.log(accounts);
			setCurrentUser(accounts[0]);
		} catch (error) {
			console.log("error while wallet connection");
			console.log(error);
		}
	};
	const getBalance = async () => {
		try {
			if (!window.ethereum) {
				console.log("Install MetaMask");
				return "Install MetaMask";
			}

			const accounts = await window.ethereum.request({
				method: "eth_requestAccounts",
			});

			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const balance = await provider.getBalance(accounts[0]);

			// Convert the balance to a readable format (in Ether)
			const formattedBalance = ethers.utils.formatEther(balance);

			console.log("Account Balance:", formattedBalance);

			return formattedBalance;
		} catch (error) {
			console.error("Error in getBalance:", error);
			throw error; // Rethrow the error or handle it as needed
		}
	};

	useEffect(() => {
		checkWalletConnected();
	});
	return (
		<TrackingContext.Provider
			value={{
				connectWallet,
				createShipment,
				getAllShipment,
				completeShipment,
				getShipment,
				startShipment,
				getShipmentCount,
				getBalance,
				DappName,
				currentUser,
			}}
		>
			{children}
		</TrackingContext.Provider>
	);
};
