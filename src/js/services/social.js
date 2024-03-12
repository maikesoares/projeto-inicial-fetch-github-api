async function getSeguidores(userName) {
  const response = await fetch(
    `https://api.github.com/users/${userName}/followers`,
  );
  return await response.json();
}

async function getSeguindo(userName) {
  const response = await fetch(
    `https://api.github.com/users/${userName}/following`,
  );
  return await response.json();
}

export { getSeguidores, getSeguindo };
