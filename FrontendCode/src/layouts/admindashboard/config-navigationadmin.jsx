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
    title: 'Employee Requests',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'View Feedbacks',
    path: '/viewFeedbacks',
    icon: icon('ic_blog'),
  },
  {
    title: 'Approved Employees',
    path: '/approvedEmployees',
    icon: icon('ic_lock'),
  },
  {
    title: 'Rejected Employees',
    path: '/rejectedEmployees',
    icon: icon('ic_lock'),
  },
  {
    title: 'Under Review Applications',
    path: '/underReview',
    icon: icon('ic_lock'),
  },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfigadmin;
