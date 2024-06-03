import React from 'react'
import DashboardLayout from 'src/layouts/dashboard'
import { BankingView } from 'src/sections/bankingd/view'

export default function banking() {
  return (
    <div style={{display:'flex'}}>
    <div style={{width:"25%"}}>
      <DashboardLayout/>
    </div>
  <div style={{marginTop:"100px" , width:'75%'}} >
        <BankingView/>
      </div>
      </div>
  )
}
