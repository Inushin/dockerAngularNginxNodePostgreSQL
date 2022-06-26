environments = {
  main: {
    prod: {
      production: true,
      apiUrl: '/api',
      socketUrl: '/'
    }
  },
  develop: {
    prod: {
      production: true,
      apiUrl: '/api',
      socketUrl: '/'
    }
  }
};
2
module.exports = environments;
