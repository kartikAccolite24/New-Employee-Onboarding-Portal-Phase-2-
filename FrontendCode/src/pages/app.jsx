import { Helmet } from 'react-helmet-async';
import DashboardLayout from 'src/layouts/dashboard';
import { AppView } from 'src/sections/overview/view';

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
    <div style={{display:'flex'}}>
    <div style={{width:"25%"}}>
      <DashboardLayout/>
    </div>
      <Helmet>
        <title>Bounteous Accolite Onboarding Portal </title>
      </Helmet>
      <div style={{marginTop:"60px" , width:'78%'}} >
        <AppView/>
      </div></div>
    </>
  );
}
