const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/LoginRegister.vue') }],
  },

  {
    path: '/student-dashboard',
    component: () => import('src/pages/Students/StudentDashboard.vue'),
  },
  {
    path: '/officer-dashboard',
    component: () => import('src/pages/Officer/OfficerDashboard.vue'),
  },
  {
    path: '/admin-dashboard',
    component: () => import('pages/AdminDashboard.vue'),
  },
];

export default routes;
