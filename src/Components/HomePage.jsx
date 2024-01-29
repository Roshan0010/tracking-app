'use client'
import React, { useContext, useState,useEffect } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { TrackingContext } from '../../Conetxt/Tracking';
import Services from './Services';
import Table from './Table';
import Form from './Form';
import Profile from './Profile';
import CompleteShipment from './CompleteShipment';
import GetShipment from './getShipment';
import StartShipment from './StartShipment';
const HomePage = () => {
  const {
    currentUser,
    createShipment,
    getAllShipment,
    completeShipment,
    getShipment,
    startShipment,
    getShipmentCount,

  }=useContext(TrackingContext);

  //State variable
const [createShipmentModel,setCreateShipmentModel]=useState(false);
const [openProfile,setOpenProfile]=useState(false);
const [startModal,setStartModel]=useState(false);
const [completeModal,setCompleteModel]=useState(false);
const [getModel,setGetModel]=useState(false);

//data state variables
const [allShipmentsData,setAllShipmentsData]=useState(); 

useEffect(() => {
  const fetchData = async () => {
    try {
      const campaignsData = await getAllShipment();
      console.log(campaignsData);
      setAllShipmentsData(campaignsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // fetchData();

}, []);



  return (
    <>
    <Navbar/>
    <Services
      setOpneProfile={setOpenProfile}
      setCompleteModel={setCompleteModel}
      setGetModel={setGetModel}
      setStartModel={setStartModel}
    />
    <Table
      setCreateShipmentModel={setCreateShipmentModel} 
      allShipmentsData={allShipmentsData} 
      />

      <Form
        createShipmentModel={createShipmentModel}
        createShipment={createShipment}
        setCreateShipmentModel={setCreateShipmentModel} 
        />
        <Profile
        openProfile={openProfile}
        setOpenProfile={setOpenProfile}
        currentUser={currentUser}
        getShipmentCount={getShipmentCount}
        />
        <CompleteShipment
        completeModal={completeModal}
        setCompleteModel={setCompleteModel}
        completeShipment={completeShipment}
        />
        <GetShipment
        getModel={getModel}
        setGetModel={setGetModel}
        getShipment={getShipment}
        />
        <StartShipment
          startModal={startModal}
          setStartModel={setStartModel}
          startShipment={startShipment}
        />


    <Footer/>
    </>
  )
}

export default HomePage;