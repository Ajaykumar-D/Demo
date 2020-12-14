const API = {
    async apiFetchUser() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const user = await res.json();

        return user;
      } catch (err) {
        return [];
      }
    }
}

export default API