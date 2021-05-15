const dotenv = require('dotenv').config()

module.exports = {
  port: process.env.PORT || 8080,

  rootRoute: '/',

  NODE_ENV: process.env.NODE_ENV || 'development'
}