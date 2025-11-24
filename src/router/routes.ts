import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'login',
        component: () => import('pages/login/LoginPage.vue'),
      },
      {
        path: 'register',
        component: () => import('pages/register/RegisterPage.vue'),
      },
    ],
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
  },
];

export default routes;
