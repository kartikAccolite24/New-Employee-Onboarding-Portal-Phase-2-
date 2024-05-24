import {  useLocation } from 'react-router-dom';

import YoutubeEmbed from "./YoutubeEmbed";

function Tutorial() {
  
  const links=["gzHNnaydONM","os80yN3cW4Q","hiYfCcQwKZI","n-Ag-sLziuA","rMnI_r_9rPo","jJruaiOf3T8","eIrMbAQSU34","_uQrJ0TkZlc","HVjjoMvutj4","hXSFdwIOfnE","QbdeIHJuZ4Q","1vbXmCrkT3Y"]
  const location=useLocation();
  const {n}=location.state;
  return (
    <div style={{width:"100%",height:"90vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      
      
      <YoutubeEmbed embedId= {links[n]}/>
      
    </div>
  );
}

export default Tutorial;