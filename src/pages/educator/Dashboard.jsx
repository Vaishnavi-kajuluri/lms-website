import React, { useContext } from 'react'
import { useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { dummyDashboardData } from '../../assets/assets'

const Dashboard = () => {
 const {currency} =useContext(AppContext)
  const [dashboardData,setDashboardData] =useState(null)
  const fetchDashboardData=async () =>{
    setDashboardData(dummyDashboardData)
  }
  return (
    <div>
        <h1> Educator Dashboard</h1>
       </div>
  )
}

export default Dashboard