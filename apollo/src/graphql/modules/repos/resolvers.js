module.exports = {
  Query: {
    async repos(_, { login }, { dataSources }) {
      return await dataSources.gitHubService.getReposUser(login);
    },
    async repo(_, { id }, { dataSources }) {
      const userData = await dataSources.gitHubService.getRepoUserById(id);

      userData.htmlUrl = userData.html_url;

      delete userData.html_url;

      return userData;
    },
  },
};
