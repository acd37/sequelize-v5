import Sequelize, { Model } from 'sequelize';

export default (sequelize) => {
  class Task extends Model {
    static associate() {
      this.belongsTo(sequelize.models.User, { foreignKey: 'userId' });
    }
  }
  Task.init(
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: true,
      tableName: 'task',
      paranoid: true,
      comment: 'tasks',
      name: {
        singular: 'task',
        plural: 'tasks',
      },
    },
  );
  return Task;
};
