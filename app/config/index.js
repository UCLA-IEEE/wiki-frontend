if (process.env.BUILD_ENV === 'production') {
  module.exports = {
    API_HOST: 'http://ucla-ieee-api-development.herokuapp.com'
  }
} else {
  module.exports = {
    API_HOST: 'http://localhost:3000'
  }
}
