import SvgColor from 'src/components/svg-color';
import profile from  '../../../public/assets/icons/navbar/profile.png';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

 export const navConfigProfile = [
  
  {
    title: 'personal details',
    path: '/personal  ',
    icon: icon('ic_analytics'),
  },
  {
    title: 'education details',
    path: '/education  ',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Past Work Experience',
    path: '/experience  ',
    icon: icon('ic_analytics'),
  },
  {
    title: 'banking details',
    path: '/banking  ',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Upload Documents',
    path: '/UploadDocuments  ',
    icon: icon('ic_analytics'),
  },
  
  
];
 export const navConfigDocumentation = [

  

  {
    title: 'Company Documents',
    path: '/documents  ',
    icon: icon('ic_analytics'),
  },
  
  
];
 export const navConfigTraining = [
  
  
  {
    title: 'Training Modules',
    path: '/training  ',
    icon: icon('ic_analytics'),
  },
 
  // {
  //   title: 'faqs',
  //   path: '/FAQ',
  //   icon: icon('ic_cart'),
  // },
  
];
 
// export { navConfigProfile, navConfigDocumentation, navConfigTraining};
