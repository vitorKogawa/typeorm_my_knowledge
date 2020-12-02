module.exports = {
   "type": "postgres",
   "host": process.env.PG_HOST,
   "port": 5433,
   "database": process.env.PG_DATABASE,
   "username": process.env.PG_USERNAME,
   "password": process.env.PG_PASSWORD,
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/database/entity/**/*.ts"
   ],
   "migrations": [
      "src/database/migration/**/*.ts"
   ],
   "subscribers": [
      "src/database/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/database/entity",
      "migrationsDir": "src/database/migration",
      "subscribersDir": "src/database/subscriber"
   }
}