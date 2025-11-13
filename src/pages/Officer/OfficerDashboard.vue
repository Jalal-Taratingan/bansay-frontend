<template>
  <q-page class="bg-grey-1 flex flex-center">
    <div>
      <h1>Officer Dashboard</h1>
      <p>Welcome, Officer!</p>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OfficerDashboard',
});
</script>

<style scoped>
h1 {
  color: #047857;
  text-align: center;
  margin-bottom: 10px;
}
p {
  text-align: center;
  color: #333;
}
</style>
