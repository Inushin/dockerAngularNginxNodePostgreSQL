import Sequelize from 'sequelize';

export const sequelize = new Sequelize('docker', 'docker', 'docker', {
  host: 'db',
  dialect: 'postgres',
});

