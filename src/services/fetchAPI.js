const URL_ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchAPI() {
  const data = await fetch(URL_ENDPOINT); // fetch API
  const { results } = await data.json(); // convert/parse body text to json
  delete results.residents; // "preencha .. tabela com os dados.. com exceção dos da coluna residents"
  // Ref.: https://stackoverflow.com/questions/1219630/remove-a-json-attribute
  // JSON => "results": [{planet_1},{planet_2},{planet_3},..]
  return results;
}

export default fetchAPI;
