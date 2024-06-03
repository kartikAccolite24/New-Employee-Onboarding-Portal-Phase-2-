import { Dashboard } from '@mui/icons-material'
import React from 'react'
import DashboardLayout from 'src/layouts/dashboard'

import { PersonalView } from 'src/sections/personald/view'

export default function personal() {
  return (
    <>
    <div style={{display:'flex'}}>
  <div style={{width:"25%"}}>
    <DashboardLayout/>
  </div>
<div style={{marginTop:"100px" , width:'75%'}} >
      <PersonalView/>
    </div>
    </div>
</>
  )
}
