import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfigadmin = [
  {
    title: 'Add User',
    path: '/addUser',
    icon: icon('ic_lock'),
  },
  {
    title: 'Employee List',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'View Feedbacks',
    path: '/viewFeedbacks',
    icon: icon('ic_blog'),
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfigadmin;
