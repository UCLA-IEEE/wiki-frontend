// prodConfig contains production level configuration variables
const prodConfig = {
  API_HOST: "http://ucla-ieee-api-development.herokuapp.com"
}

// devConfig contains development level configuration variables
const devConfig = {
  API_HOST: "http://localhost:3000"
}

// Export set of configuration variables based on environment
if (process.env.BUILD_ENV === "production") {
  module.exports = prodConfig
} else {
  module.exports = devConfig
}
