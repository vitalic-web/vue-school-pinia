import { defineStore } from "pinia";
export const useAuthUserStore = defineStore("AuthUserStore", {
  state: () => {
    return {
      username: "vitaly",
    };
  },
  actions: {
    visitTwitterProfile() {
      window.open(`https://twitter.com/${this.username}`, "_blank");
    }
  }
});
