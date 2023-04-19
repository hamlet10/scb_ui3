import { ref } from "vue";

class AuthService {
  constructor() {
    this.user = ref([]);
  }

  get User() {
    return this.user;
  }
  async fetchAll() {
    try {
      const url = "http://localhost:3000/users";
      const response = await fetch(url);
      const json = await response.json();
      this.user.value = await json;
    } catch (err) {
      console.log(err);
    }
  }
}

export default AuthService;
