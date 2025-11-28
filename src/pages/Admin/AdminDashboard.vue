<template>
  <q-layout view="hHh lpR fFf">
    <!-- Header -->
    <q-header elevated class="bg-red-8 text-white">
      <q-toolbar>
        <q-btn flat dense round icon="menu" @click="leftDrawer = !leftDrawer" />
        <q-toolbar-title>Admin Dashboard</q-toolbar-title>
        <q-btn flat round icon="logout" @click="logout" />
      </q-toolbar>
    </q-header>

    <!-- Drawer -->
    <q-drawer v-model="leftDrawer" show-if-above bordered class="bg-grey-1">
      <q-scroll-area class="fit">
        <div class="q-pa-md"></div>

        <!-- Dashboard Cards -->
        <div class="col-12 col-md-4">
          <q-card class="dashboard-card">
            <q-card-section>
              <div class="text-h6">User Management</div>
              <div class="text-caption text-grey-7">
                Manage user accounts and permissions.
              </div>
            </q-card-section>
            <q-card-actions align="left">
              <q-btn
                color="red-8"
                label="Manage Users"
                flat
                @click="selectCard('User Management')"
              />
            </q-card-actions>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card class="dashboard-card">
            <q-card-section>
              <div class="text-h6">Pending Approvals</div>
              <div class="text-caption text-grey-7">
                Review and approve pending user registrations.
              </div>
            </q-card-section>
            <q-card-actions align="left">
              <q-btn
                color="red-8"
                label="View Pending"
                flat
                @click="router.push('/admin-dashboard/pending-approval')"
              />
            </q-card-actions>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card class="dashboard-card">
            <q-card-section>
              <div class="text-h6">System Settings</div>
              <div class="text-caption text-grey-7">
                Configure system preferences and settings.
              </div>
            </q-card-section>
            <q-card-actions align="left">
              <q-btn color="red-8" label="Settings" flat />
            </q-card-actions>
          </q-card>
        </div>
      </q-scroll-area>
    </q-drawer>

    <!-- Main Page Container for child routes -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue';
import { useAuthStore } from 'src/stores/auth-store';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'AdminDashboard',
  setup() {
    const leftDrawer = ref(false);
    const router = useRouter();
    function selectCard(name: string) {
      alert(`You clicked ${name}!`);
    }

    const authStore = useAuthStore();
    function logout() {
      authStore.logout();
    }

    return { leftDrawer, selectCard, logout, router };
  },
});
</script>

<style scoped>
.dashboard-card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  cursor: pointer;
}
</style>
