

// // Main code///////////

// import { lazy, Suspense } from 'react';
// import { Outlet, Navigate, useRoutes } from 'react-router-dom';

// import DashboardLayout from 'src/layouts/dashboard';
// import AdminDashboardLayout from 'src/layouts/admindashboard'; // Import Admin Dashboard Layout
// import FAQS from 'src/sections/faqs/Faqs';
// import { PersonalView } from 'src/sections/personald/view';
// import UserDetails from 'src/sections/userDetails/UserDetails';

// // Import your page components here
// import LoginPage from 'src/pages/login';
// import IndexPage from 'src/pages/app';
// import BlogPage from 'src/pages/blog';
// import PersonalPage from 'src/pages/personal';
// import EducationalPage from 'src/pages/education';
// import ExperiencePage from 'src/pages/experience';
// import BankingPage from 'src/pages/banking';
// import DocumentsPage from 'src/pages/documents';
// import TrainingPage from 'src/pages/training';
// import UserPage from 'src/pages/user';
// import ProductsPage from 'src/pages/products';
// import Page404 from 'src/pages/page-not-found';
// import WelcomePage from 'src/pages/WelcomePage';
// import Tutorial from 'src/sections/traingingd/view/Tutorial';
// import UploadDocuments from 'src/sections/UploadDocuments/View/UploadDocument';
// import { Dashboard } from '@mui/icons-material';
// import Feedback from 'src/sections/feedback/FeedBack';
// import FeedBackAdmin from 'src/sections/feedbackAdmin/view/FeedBackAdmin';
// import AddUser from 'src/sections/AddUser/AddUser';

// // ----------------------------------------------------------------------

// export default function Router() {
//   const role = localStorage.getItem("loginType");
//   console.log(role);
//   const getLayout = () => {
//     if (role === "admin") {
//       console.log("Admin layout selected");
//       return AdminDashboardLayout;
//     } else {
//       console.log("Employee layout selected");
//       return DashboardLayout;
//     }
//   };



//   // Define your routes
//   const routes = useRoutes([
//     {
//       path: '/',
//       element: <LoginPage />,
//     },
//     {
//       element: (
//         <Suspense fallback={<div>Loading...</div>}>
//           {getLayout()}
//           <Outlet />
//         </Suspense>
//       ),
//       children: [
//         { path:"dashboard",element: <IndexPage/> },
//         { path:"admindashboard",element: <AdminDashboardLayout /> },
//         { path: 'user', element: <UserPage /> },
//         { path: 'products', element: <ProductsPage /> },
//         { path: 'blog', element: <BlogPage /> },
//         { path: 'personal', element: <PersonalPage /> },
//         { path: 'education', element: <EducationalPage /> },
//         { path: 'experience', element: <ExperiencePage /> },
//         { path: 'banking', element: <BankingPage /> },
//         { path: 'documents', element: <DocumentsPage /> },
//         { path: 'training', element: <TrainingPage /> },
//         { path: "Tutorial", element : <Tutorial/>},
//         { path: "Faq", element : <FAQS/>},
//         { path: "userDetails", element : <UserDetails/>},
//         { path: "UploadDocuments", element : <UploadDocuments/>},
//         { path: "personal-view", element:<PersonalView/>},
//         { path: "feedback", element:<Feedback/>},
//         { path: "viewFeedbacks", element:<FeedBackAdmin/>},
//         { path: "addUser", element:<AddUser />}
        
//       ],
//     },
//     {
//       path: '404',
//       element: <Page404 />,
//     },
//     {
//       path: '*',
//       element: <Navigate to="/404" replace />,
//     },
//     {
//       path: "/welcome",
//       element: <WelcomePage/>
//     }
//   ]);

//   return routes;
// }
import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from 'src/layouts/dashboard';
import AdminDashboardLayout from 'src/layouts/admindashboard'; // Import Admin Dashboard Layout
import FAQS from 'src/sections/faqs/Faqs';
import { PersonalView } from 'src/sections/personald/view';
import UserDetails from 'src/sections/userDetails/UserDetails';
// Import your page components here
import LoginPage from 'src/pages/login';
import IndexPage from 'src/pages/app';
import BlogPage from 'src/pages/blog';
import PersonalPage from 'src/pages/personal';
import EducationalPage from 'src/pages/education';
import ExperiencePage from 'src/pages/experience';
import BankingPage from 'src/pages/banking';
import DocumentsPage from 'src/pages/documents';
import TrainingPage from 'src/pages/training';
import UserPage from 'src/pages/user';
import ProductsPage from 'src/pages/products';
import Page404 from 'src/pages/page-not-found';
import WelcomePage from 'src/pages/WelcomePage';
import Tutorial from 'src/sections/traingingd/view/Tutorial';
import UploadDocuments from 'src/sections/UploadDocuments/View/UploadDocument';
import Feedback from 'src/sections/feedback/FeedBack';
import AddUser from 'src/sections/AddUser/AddUser';
import FeedBackAdmin from 'src/sections/feedbackAdmin/view/FeedBackAdmin';
import ProtectedRoute from 'src/components/ProtectedRoute'; // Import the ProtectedRoute component

// Loading component
const Loading = () => (
  <div style={{ textAlign: 'center', marginTop: '20%' }}>
    <h2>Loading...</h2>
  </div>
);

// ----------------------------------------------------------------------
export default function Router() {
  const role = localStorage.getItem("loginType");
  console.log(role);
  const getLayout = () => {
    if (role === "admin") {
      console.log("Admin layout selected");
      return AdminDashboardLayout;
    } else {
      console.log("Employee layout selected");
      return DashboardLayout;
    }
  };

  // Define your routes
  const routes = useRoutes([
    {
      path: '/',
      element: <LoginPage />,
    },
    {
      element: (
        <Suspense fallback={<Loading />}>
          {getLayout()}
          <Outlet />
        </Suspense>
      ),
      children: [
        { path: 'dashboard', element: <ProtectedRoute><IndexPage /></ProtectedRoute> },
        { path: 'admindashboard', element: <ProtectedRoute><AdminDashboardLayout /></ProtectedRoute> },
        { path: 'user', element: <ProtectedRoute><UserPage /></ProtectedRoute> },
        { path: 'products', element: <ProtectedRoute><ProductsPage /></ProtectedRoute> },
        { path: 'blog', element: <ProtectedRoute><BlogPage /></ProtectedRoute> },
        { path: 'personal', element: <ProtectedRoute><PersonalPage /></ProtectedRoute> },
        { path: 'education', element: <ProtectedRoute><EducationalPage /></ProtectedRoute> },
        { path: 'experience', element: <ProtectedRoute><ExperiencePage /></ProtectedRoute> },
        { path: 'banking', element: <ProtectedRoute><BankingPage /></ProtectedRoute> },
        { path: 'documents', element: <ProtectedRoute><DocumentsPage /></ProtectedRoute> },
        { path: 'training', element: <ProtectedRoute><TrainingPage /></ProtectedRoute> },
        { path: 'Tutorial', element: <ProtectedRoute><Tutorial /></ProtectedRoute> },
        { path: 'Faq', element: <ProtectedRoute><FAQS /></ProtectedRoute> },
        { path: 'userDetails', element: <ProtectedRoute><UserDetails /></ProtectedRoute> },
        { path: 'UploadDocuments', element: <ProtectedRoute><UploadDocuments /></ProtectedRoute> },
        { path: 'personal-view', element: <ProtectedRoute><PersonalView /></ProtectedRoute> },
        { path: 'feedback', element: <ProtectedRoute><Feedback /></ProtectedRoute> },
        // { path: "feedback", element:<Feedback/>},
        { path: "viewFeedbacks", element:<FeedBackAdmin/>},
        { path: "addUser", element:<AddUser />}
      ],
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
    {
      path: "/welcome",
      element: <WelcomePage />
    }
  ]);

  return (
    <Suspense fallback={<Loading />}>
      {routes}
    </Suspense>
  );
}
