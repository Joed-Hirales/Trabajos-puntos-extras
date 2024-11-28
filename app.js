const { createApp } = Vue;

createApp({
  data() {
    return {
      characters: [],
      nextPage: 'https://rickandmortyapi.com/api/character/'
    };
  },
  methods: {
    async fetchCharacters() {
      if (this.nextPage) {
        try {
          const response = await fetch(this.nextPage);
          const data = await response.json();
          this.characters.push(...data.results);
          this.nextPage = data.info.next;
        } catch (error) {
          console.error('Error fetching characters:', error);
        }
      }
    }
  },
  mounted() {
    this.fetchCharacters();
  }
}).mount('#app');
