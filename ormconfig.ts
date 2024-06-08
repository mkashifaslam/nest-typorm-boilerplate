import { DataSource } from 'typeorm';
import * as process from 'node:process';
import { User } from './src/user/entities/user.entity';
import { DataSourceOptions } from 'typeorm/data-source/DataSourceOptions';
import migrations from './src/migrations';

const DB_CONFIG: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST ?? 'localhost',
  port: +process.env.DB_PORT ?? 5433,
  username: process.env.DB_USER ?? 'postgres',
  password: process.env.DB_PASS ?? 'postgres',
  database: process.env.DB_NAME ?? 'nest_typeorm_db',
  entities: [User],
  synchronize: true,
  migrations: [...migrations],
  migrationsTableName: 'migrations',
};

export default new DataSource(DB_CONFIG);
