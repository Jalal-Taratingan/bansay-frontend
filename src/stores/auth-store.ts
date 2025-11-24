import { defineStore, acceptHMRUpdate } from 'pinia';
import { BansayService } from 'src/services/bansay-service';
import type { UserInfoDto, UserLoginDto, UserRegisterDto } from 'src/services/sdk';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    currentUser: null as UserInfoDto | null,
  }),

  getters: {},

  actions: {
    async login(payload: UserLoginDto) {
      const response = await BansayService.getInstance().loginUser(payload);

      // Save access token to localStorage.
      localStorage.setItem('token', response.accessToken);
      localStorage.setItem('user', JSON.stringify(response.user));
      this.currentUser = response.user;

      return response;
    },
    async register(data: UserRegisterDto) {
      return await BansayService.getInstance().registerUser(data);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
