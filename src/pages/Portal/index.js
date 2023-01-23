import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import WorkOnProgress from '../../components/workOnProgress'
import SideMenu from '../../components/PortalComps/sideMenu'
import Dashboard from './dashboard'
import PatientPool from './patientPool'
import PatientTransfer from './patientTransfer'
import Consultations from './consultation'
import Digitalized from './digitalized'

export default function Portal() {
  return (
    <div>
      <div className="grid grid-cols-6 gap-2">
        <SideMenu></SideMenu>
        
        <div className="col-span-5 p-4 m-4">
        <Outlet></Outlet>
        </div>
        

      </div>
      

    {/* <WorkOnProgress></WorkOnProgress> */}

    </div>
  )
}
