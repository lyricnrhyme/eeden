// Update with your config settings.
require('dotenv').config({path: '../server/.env'})
// console.log(process.env)

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost' || process.env.POSTGRES_HOSTNAME,
      port: 5432 || process.env.POSTGRES_CONTAINER_PORT,
      database: 'clarity' || process.env.POSTGRES_DB,
      user: 'eeden' || process.env.POSTGRES_USER,
      password: 'atlas' || process.env.POSTGRES_PASSWORD
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'clarity',
      user:     'development',
      password: 'development'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'clarity',
      user:     'development',
      password: 'development'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
