import { defineStore, acceptHMRUpdate } from 'pinia';
import { BansayService } from 'src/services/bansay-service';
import type { UserLoginDto, UserRegisterDto, UserInfoDto } from 'src/services/sdk';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    currentUser: null as UserInfoDto | null
  }),

  getters: {
    isAuthenticated: (state) => !!state.currentUser,
  },

  actions: {
    initialize() {
      const user = localStorage.getItem('user');
      if (user) {
        this.currentUser = JSON.parse(user);
      }
    },

    async login(payload: UserLoginDto) {
      const response = await BansayService.getInstance().loginUser(payload);
      if (response.user) {
        this.currentUser = response.user;
      }
      return response;
    },
    async register(data: UserRegisterDto) {
      return await BansayService.getInstance().registerUser(data);
    },

    logout() {
      BansayService.getInstance().logout();
      this.currentUser = null;
    }
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
