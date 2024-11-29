new Vue({
  el: '#app',
  data: {
      loading: true,
      launches: []
  },
  methods: {
      fetchLaunches() {
          axios.get('https://api.spacexdata.com/v4/launches')
              .then(response => {
                  this.launches = response.data.slice(0, 5);  
                  this.loading = false;
              })
              .catch(error => {
                  console.error('Error fetching SpaceX launches:', error);
                  this.loading = false;
              });
      },
      formatDate(date) {
          const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
          return new Date(date).toLocaleDateString('en-US', options); 
      }
  },
  created() {
      this.fetchLaunches();
  }
});
