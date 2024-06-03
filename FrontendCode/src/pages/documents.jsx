import React from 'react'
import DashboardLayout from 'src/layouts/dashboard'
import DocumentsView from 'src/sections/documents/view/documents-view'

export default function documents() {
  return (
    <div style={{display:'flex'}}>
    <div style={{width:"25%"}}>
      <DashboardLayout/>
    </div>
  <div style={{marginTop:"100px" , width:'78%'}} >
        <DocumentsView/>
      </div>
      </div>
  )
}
