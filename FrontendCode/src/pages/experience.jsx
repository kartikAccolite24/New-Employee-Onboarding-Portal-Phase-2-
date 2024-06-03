import React from 'react'
import DashboardLayout from 'src/layouts/dashboard'
import {EmployeeExperienceForm} from 'src/sections/experience'

export default function experience() {
  return (
    <div style={{display:'flex'}}>
    <div style={{width:"25%"}}>
      <DashboardLayout/>
    </div>
  <div style={{marginTop:"100px" , width:'75%'}} >
        <EmployeeExperienceForm/>
      </div>
      </div>
  )
}