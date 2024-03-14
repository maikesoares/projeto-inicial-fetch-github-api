import { getUser } from '../js/services/user.js';
import { getRepositories } from '../js/services/repositories.js';
import { getSeguidores, getSeguindo } from '../js/services/social.js';
import { getEvents } from '../js/services/eventos.js';

import { user } from './objects/user.js';
import { screen } from './objects/screen.js';

document.getElementById('btn-search').addEventListener('click', () => {
  const userName = document.getElementById('input-search').value;
  if (validateEmptyInput(userName)) return;
  getUserData(userName);
});

document.getElementById('input-search').addEventListener('keyup', (e) => {
  const userName = e.target.value;
  const key = e.which || e.keyCode;
  const isEnterKeyPressed = key === 13;

  if (isEnterKeyPressed) {
    if (validateEmptyInput(userName)) return;
    getUserData(userName);
  }
});

function validateEmptyInput(userName) {
  if (userName.length === 0) {
    alert('Preencha o campo com o nome do usuário do GitHub');
    return true;
  }
}

async function getUserData(userName) {
  const userResponse = await getUser(userName);

  if (userResponse.message === 'Not Found') {
    screen.renderNotFound();
    return;
  }

  const repositoriesResponse = await getRepositories(userName);
  const seguidoresResponse = await getSeguidores(userName);
  const seguindoResponse = await getSeguindo(userName);
  const eventosResponse = await getEvents(userName);

  user.setInfo(userResponse);
  user.setRepositories(repositoriesResponse);
  user.setSeguidores(seguidoresResponse);
  user.setSeguindo(seguindoResponse);
  user.setEvents(eventosResponse);

  screen.renderUser(user);
}
