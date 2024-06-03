import SvgColor from 'src/components/svg-color';
// ----------------------------------------------------------------------
const icon = (url) => (
  <SvgColor src={url} sx={{ width: 1, height: 1 }} />
);
export const navConfigProfile = [
  {
    title: 'personal details',
    path: '/personal',
    icon: icon('https://cdn-icons-png.freepik.com/256/31/31625.png?semt=ais_hybrid'),
  },
  {
    title: 'education details',
    path: '/education',
    icon: icon('https://cdn-icons-png.flaticon.com/512/4729/4729436.png'),
  },
  {
    title: 'banking details',
    path: '/banking',
    icon: icon('https://cdn-icons-png.freepik.com/512/6317/6317814.png'),
  },
  {
    title: 'past work experience',
    path: '/experience',
    icon: icon('https://cdn-icons-png.flaticon.com/128/2345/2345277.png'),
  },
  {
    title: 'upload documents',
    path: '/UploadDocuments',
    icon: icon('https://cdn.iconscout.com/icon/premium/png-256-thumb/upload-resume-job-cv-letter-33804.png'),
  },
];
export const navConfigDocumentation = [
  {
    title: 'Company Documents',
    path: '/documents',
    icon: icon('https://cdn0.iconfinder.com/data/icons/privacy-policy-5/80/private__lock__folder__files_-512.png'),
  },
];
export const navConfigTraining = [
  {
    title: 'Training Modules',
    path: '/training',
    icon: icon('https://cdn-icons-png.freepik.com/256/991/991922.png?semt=ais_hybrid'),
  },
];