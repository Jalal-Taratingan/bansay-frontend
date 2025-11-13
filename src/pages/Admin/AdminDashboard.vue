<template>
  <q-page class="bg-grey-1 flex flex-center">
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, Admin!</p>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AdminDashboard',
});
</script>

<style scoped>
h1 {
  color: #b91c1c;
  text-align: center;
  margin-bottom: 10px;
}
p {
  text-align: center;
  color: #333;
}
</style>
