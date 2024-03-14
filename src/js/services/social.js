import { baseUrl } from '../variables.js';

async function getSeguidores(userName) {
  const response = await fetch(`${baseUrl}/${userName}/followers`);
  return await response.json();
}

async function getSeguindo(userName) {
  const response = await fetch(`${baseUrl}/${userName}/following`);
  return await response.json();
}

export { getSeguidores, getSeguindo };
