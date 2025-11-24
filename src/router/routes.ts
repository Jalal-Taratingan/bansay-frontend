import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
<<<<<<< HEAD
=======
      { path: '', redirect: '/login' },

>>>>>>> 36631bc834497f3ac928683885762cf1de016311
      {
        path: 'login',
        component: () => import('pages/login/LoginPage.vue'),
      },
      {
        path: 'register',
        component: () => import('pages/register/RegisterPage.vue'),
      },
<<<<<<< HEAD
    ],
  },

  {
    path: '/login',
    component: () => import('layouts/AuthLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/Auth/LoginRegister.vue') }],
  },

  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      {
        path: '',
        name: 'admin-dashboard',
        component: () => import('src/pages/Admin/AdminDashboard.vue'),
      },
      {
        path: 'user-management',
        component: () => import('src/pages/Admin/UserManagementPage.vue'),
      },
      {
        path: 'pending-approvals',
        component: () => import('src/pages/Admin/PendingApprovalPage.vue'),
      },
    ],
=======

      {
        path: 'student-dashboard',
        component: () => import('pages/student/StudentDashboard.vue'),
      },
      {
        path: 'officer-dashboard',
        component: () => import('pages/Officer/OfficerDashboard.vue'),
      },
      {
        path: 'admin-dashboard',
        component: () => import('pages/Admin/AdminDashboard.vue'),
      },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
>>>>>>> 36631bc834497f3ac928683885762cf1de016311
  },
];

export default routes;
