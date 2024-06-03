import React from 'react'
import DashboardLayout from 'src/layouts/dashboard'
import { TrainingView } from 'src/sections/traingingd/view'

export default function training() {
  return (
    <div style={{display:'flex'}}>
    <div style={{width:"25%"}}>
      <DashboardLayout/>
    </div>
  <div style={{marginTop:"100px" , width:'78%'}} >
        <TrainingView/>
      </div>
      </div>
  )
}
