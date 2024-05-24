import React, { useState } from 'react';
import DashboardLayout from 'src/layouts/dashboard'
import FAQ from './Faq';
import {FaqData} from './FaqData';
import style from './faqs.module.css';


export default function FAQS() {

  const [faqs]=useState(FaqData);

  return (
    <>
     <div style={{display:'flex'}}>
    <div style={{width:"25%"}}>
      <DashboardLayout/>
    </div>
      <div style={{marginTop:"100px" , width:'85%'}}>
      <h3>FAQS</h3>
    {/* <main className={style.container}> */}
        <section className={style.faqs}>
            {faqs.map((faq)=> (
                <FAQ key={faq.id} {...faq}/>
            ))}

        </section>
      </div>
      </div>
    
    {/* </main> */}
    </>
  )
}