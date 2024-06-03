import { Helmet } from 'react-helmet-async';
import AdminDashboardLayout from 'src/layouts/admindashboard'
import { UserView } from 'src/sections/user/view';

// -------------------------------------------------z---------------------

export default function UserPage() {
  return (
    <>
    <div style={{display:'flex'}}>
    <div style={{width:"25%"}}>
      <AdminDashboardLayout/>
    </div>
      <div style={{marginTop:"60px" , width:'78%'}}>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>
      <UserView /></div></div>
    </>
  );
}
