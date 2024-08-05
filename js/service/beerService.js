export default class BeerService {
  constructor() {
      this.baseUrl = 'https://api.openbrewerydb.org/v1/breweries';
  }

async fetchBreweries() {
    return this.fetchData(`${this.baseUrl}/`);
}

async fetchTypes() {
  return this.fetchData(`${this.baseUrl}/types`);
}

async fetchNationalities() {
  return this.fetchData(`${this.baseUrl}/nationalities`);
}

async fetchBrands() {
  return this.fetchData(`${this.baseUrl}/brands`);
}

async fetchData(url) {

  try {
    const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return await response.json();

    } catch (error) {
        console.log('Failed to fetch data: ', error);
        return [];
    }
  }
};
