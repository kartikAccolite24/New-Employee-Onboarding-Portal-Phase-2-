import React from 'react'
import DashboardLayout from 'src/layouts/dashboard'
import EducationView from 'src/sections/educationald/view/education-view'

export default function education() {
  return (
    <div style={{display:'flex'}}>
    <div style={{width:"25%"}}>
      <DashboardLayout/>
    </div>
  <div style={{marginTop:"100px" , width:'85%'}} >
        <EducationView/>
      </div>
      </div>
  )
}
