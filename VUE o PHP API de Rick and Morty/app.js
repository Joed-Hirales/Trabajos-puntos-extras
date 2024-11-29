new Vue({
  el: '#app',
  data: {
      user: null,
      loading: true,
  },
  methods: {
      async fetchUser() {
          this.loading = true; 
          try {
              const response = await axios.get('https://randomuser.me/api/');
              const userData = response.data.results[0]; 

              this.user = {
                  name: `${userData.name.first} ${userData.name.last}`,
                  email: userData.email,
                  phone: userData.phone,
                  picture: userData.picture.large,
              };
              this.loading = false;
          } catch (error) {
              console.error('Error al obtener datos usuario:', error);
              this.loading = false;
          }
      },

      fetchNewUser() {
          this.fetchUser(); 
      }
  },
  created() {
      this.fetchUser();
  }
});
