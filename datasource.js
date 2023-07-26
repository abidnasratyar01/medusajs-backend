const { DataSource } = require("typeorm");

const AppDataSource = new DataSource({
  type: "postgres",
  port: 5432,
  username: "postgres",
  password: "123",
  database: "medusa-OJJ6",
  entities: ["dist/models/*.ts"],
  migrations: ["dist/migrations/*.ts"],
});

module.exports = {
  datasource: AppDataSource,
};
