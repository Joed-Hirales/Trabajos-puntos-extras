new Vue({
  el: '#app',
  data: {
      apiKey: '14b098188aa6bb143f5f796fe6ef7757',
      cities: ['La Paz', 'Cabo San Lucas', 'San José del Cabo', 'Loreto', 'Mulegé'],
      citiesWeather: []
  },
  methods: {
      async fetchWeather() {
          const units = 'metric';
          const lang = 'es';
          for (const city of this.cities) {
              try {
                  const response = await axios.get(
                      `https://api.openweathermap.org/data/2.5/weather?q=${city},MX&units=${units}&lang=${lang}&appid=${this.apiKey}`
                  );
                  const { name, main, weather } = response.data;
                  this.citiesWeather.push({
                      name,
                      temp: main.temp,
                      weather: weather[0].description
                  });
              } catch (error) {
                  console.error(`Error al conseguir el clima de ${city}:`, error);
              }
          }
      }
  },
  created() {
      this.fetchWeather();
  }
});
