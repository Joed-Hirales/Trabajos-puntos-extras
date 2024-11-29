new Vue({
  el: '#app',
  data: {
      loading: true,
      countries: []
  },
  methods: {
      fetchCountries() {
          axios.get('https://restcountries.com/v2/all')
              .then(response => {
                  this.countries = response.data;
                  this.countries.sort((a, b) => a.name.localeCompare(b.name)); 
                  this.loading = false;
              })
              .catch(error => {
                  console.error('Error fetching countries:', error);
                  this.loading = false;
              });
      }
  },
  created() {
      this.fetchCountries();
  }
});
