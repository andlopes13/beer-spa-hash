const URL_API = "https://api.sampleapis.com/beers/ale";

let beers = [];

async function getBeers() {
  const response = await fetch(URL_API);
  const data = await response.json();

  console.log(typeof data);
  console.log(typeof data[0].name);
  console.log(data[0].name);

  return data;
}

beers = getBeers();

export default { beers };
