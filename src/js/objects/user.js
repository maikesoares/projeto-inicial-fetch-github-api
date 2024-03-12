const user = {
  avatarUrl: '',
  name: '',
  bio: '',
  userName: '',
  repositories: [],
  setInfo(gitHubUser) {
    this.avatarUrl = gitHubUser.avatar_url;
    this.name = gitHubUser.name;
    this.bio = gitHubUser.bio;
    this.userName = gitHubUser.login;
    this.seguidores = gitHubUser.followers_url;
    this.seguindo = gitHubUser.following_url;
  },

  setRepositories(repositories) {
    this.repositories = repositories;
  },

  setSeguidores(seguidores) {
    this.seguidores = seguidores.length;
  },
  setSeguindo(seguindo) {
    this.seguindo = seguindo.length;
  },
};

export { user };
