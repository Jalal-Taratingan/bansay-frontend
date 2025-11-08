import { defineStore, acceptHMRUpdate } from 'pinia';
import { BansayService } from 'src/services/bansay-service';
import { type UserRegisterDto } from 'src/services/sdk';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    currentUser: null
  }),

  getters: {

  },

  actions: {
    async register(data: UserRegisterDto) {
      await BansayService.getInstance().registerUser(data);
    }
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
