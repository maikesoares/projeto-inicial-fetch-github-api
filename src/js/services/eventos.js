import { baseUrl, respositoriesQuantity } from '../variables.js';

async function getEvents(userName) {
  const response = await fetch(
    `${baseUrl}/${userName}/events?per_page=${respositoriesQuantity}`,
  );
  return await response.json();
}

export { getEvents };
